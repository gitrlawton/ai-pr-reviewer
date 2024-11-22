import { AbstractParser, EnclosingContext } from "../../constants";
//import * as python from 'python-ast-parser';

export class PythonParser implements AbstractParser {
  findEnclosingContext(
    file: string,
    lineStart: number,
    lineEnd: number
  ): EnclosingContext {
    // TODO: Implement this method for Python
    return null;
  }
  dryRun(file: string): { valid: boolean; error: string } {
    try {
      //python.parse(file);
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
