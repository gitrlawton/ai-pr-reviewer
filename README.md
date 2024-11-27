# AI PR Reviewer

## Overview

This project is an AI-powered pull request reviewer that analyzes code changes in GitHub pull requests and provides constructive feedback. It leverages machine learning models to generate code suggestions and improvements, enhancing the code review process.

The project consists of two main components:

1. **Backend Service**: A Node.js application that processes pull requests, analyzes code changes, and generates suggestions using Groq's AI models.
2. **GitHub Integration**: The application interacts with GitHub's API to post comments and suggestions directly on pull requests.

## Features

- **Webhook Integration**: Listens to GitHub webhook events to trigger reviews automatically when a pull request is created or updated.
- **Automated Code Review**: Automatically analyzes pull requests and provides feedback on code changes.

## Installation and Usage

To set up the project, please refer to the [SETUP.md](https://github.com/gitrlawton/ai-pr-reviewer/blob/main/SETUP.md) file for detailed installation and usage instructions. This file contains all the necessary steps to configure the environment, set up a GitHub App, and run the application. Ensure you have Node.js and npm installed on your machine.

## File Descriptions

- **src/app.ts**: The main application file that sets up a Node.js server to listen for incoming webhook events from GitHub.
- **src/llms/**: Contains the code for interacting with Groq's AI models.
- **src/prompts.ts**: Contains the prompts used to generate suggestions and feedback.
- **src/reviews.ts**: Handles the logic for posting comments and suggestions to GitHub.
- **SETUP.md**: Instructions for setting up and configuring the application.

## Dependencies

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **Octokit**: GitHub API client for interacting with GitHub.
- **Groq SDK**: For accessing Groq's AI models and generating suggestions.
- **Babel**: For transpiling modern JavaScript code.
- **tree-sitter-python**: For parsing Python code syntax.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
