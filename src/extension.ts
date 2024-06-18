import * as vscode from "vscode";
import registerLinter from "./linter";
import registerFormatter from "./formatter";
import registerHover from "./hover";

/**
 * Activate the extension. Run automatically by VSCode based on
 * the `activationEvents` property in package.json.
 */
export function activate(context: vscode.ExtensionContext): void {
  registerFormatter(context);
  registerLinter(context);
  registerHover(context);
}

export function deactivate(): void {}
