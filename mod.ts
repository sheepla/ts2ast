import * as ts from "https://esm.sh/typescript";
import {
  Ast,
} from "./types.ts";

export async function parseSourceCode(sourceCode: string, fileName: string): Promise<Ast> {
  const srcFile = ts.createSourceFile(
    fileName,
    sourceCode,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  const serializer = () => {
    const seen = new WeakSet();
    return (_: any, value: any) => {
      if (typeof value === "object" && value !== null) {

        const containsCicularRef = seen.has(value)

        if (containsCicularRef) {
          return;
        }

        seen.add(value);
      }
      return value;
    };
  };

  return JSON.parse(JSON.stringify(srcFile, serializer()));
}
