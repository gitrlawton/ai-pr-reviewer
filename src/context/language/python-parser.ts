import { AbstractParser, EnclosingContext } from "../../constants";
import Parser from "tree-sitter";
import Python from "tree-sitter-python";

const processNode = (
  node: Parser.SyntaxNode,
  lineStart: number,
  lineEnd: number,
  largestSize: number,
  largestEnclosingContext: Parser.SyntaxNode | null
) => {
  if (node.startPosition.row <= lineStart && lineEnd <= node.endPosition.row) {
    const size = node.endPosition.row - node.startPosition.row;
    if (size > largestSize) {
      largestSize = size;
      largestEnclosingContext = node;
    }
  }
  return { largestSize, largestEnclosingContext };
};

export class PythonParser implements AbstractParser {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
    this.parser.setLanguage(Python);
  }

  findEnclosingContext(
    file: string,
    lineStart: number,
    lineEnd: number
  ): EnclosingContext {
    const tree = this.parser.parse(file);
    let largestEnclosingContext: Parser.SyntaxNode | null = null;
    let largestSize = 0;

    // Traverse the syntax tree using tree-sitter's cursor API for efficient tree traversal
    const cursor = tree.rootNode.walk();

    do {
      const node = cursor.currentNode;
      if (
        // Function Definition and Class Definition are python's node types equivalent to
        // Javascript-parser's Function and Interface nodes.
        node.type === "function_definition" ||
        node.type === "class_definition"
      ) {
        ({ largestSize, largestEnclosingContext } = processNode(
          node,
          lineStart,
          lineEnd,
          largestSize,
          largestEnclosingContext
        ));
      }
    } while (
      cursor.gotoNextSibling() ||
      (cursor.gotoParent() && cursor.gotoNextSibling())
    );

    return {
      enclosingContext: largestEnclosingContext,
    } as EnclosingContext;
  }
  dryRun(file: string): { valid: boolean; error: string } {
    try {
      const tree = this.parser.parse(file);

      if (tree.rootNode.hasError) {
        return {
          valid: false,
          error: "Invalid Python syntax",
        };
      }
      return {
        valid: true,
        error: "",
      };
    } catch (exc) {
      return {
        valid: false,
        error: exc.toString(),
      };
    }
  }
}
