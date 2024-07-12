interface BaseNode {
  pos: number;
  end: number;
  kind: number;
  id: number;
  flags: number;
  modifierFlagsCache: number;
  transformFlags: number;
}

interface IdentifierNode extends BaseNode {
  kind: 80;
  escapedText: string;
}

interface ParameterNode extends BaseNode {
  kind: 169;
  name: IdentifierNode;
}

interface ArgumentNode extends BaseNode {
  expression: ExpressionNode;
}

interface ExpressionNode extends BaseNode {
  expression: IdentifierNode | BinaryExpressionNode;
  arguments?: ArgumentNode[];
}

interface BinaryExpressionNode extends BaseNode {
  left: StringLiteralNode;
  operatorToken: TokenNode;
  right: IdentifierNode;
}

interface StringLiteralNode extends BaseNode {
  kind: 11;
  text: string;
  hasExtendedUnicodeEscape: boolean;
}

interface TokenNode extends BaseNode {
  kind: number;
}

interface StatementNode extends BaseNode {
  name: IdentifierNode;
  parameters: ParameterNode[];
  body: BlockNode;
}

interface BlockNode extends BaseNode {
  statements: ExpressionStatementNode[];
  multiLine: boolean;
}

interface ExpressionStatementNode extends BaseNode {
  expression: ExpressionNode;
}

export interface Ast extends BaseNode {
  statements: StatementNode[];
  endOfFileToken: TokenNode;
  text: string;
  fileName: string;
  path: string;
  resolvedPath: string;
  originalFileName: string;
  languageVersion: number;
  languageVariant: number;
  scriptKind: number;
  isDeclarationFile: boolean;
  hasNoDefaultLib: boolean;
  nodeCount: number;
  identifierCount: number;
  symbolCount: number;
  parseDiagnostics: any[];
  bindDiagnostics: any[];
  pragmas: any;
  referencedFiles: any[];
  typeReferenceDirectives: any[];
  libReferenceDirectives: any[];
  amdDependencies: any[];
  identifiers: any;
  jsDocParsingMode: number;
}
