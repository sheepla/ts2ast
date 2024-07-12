import { basename } from "https://deno.land/std/path/mod.ts";

import {
  Ast
} from "./types.ts"
import {
  parseSourceCode,
} from "./mod.ts"


async function parseSourceFile(filePath: string): Promise<Ast> {
  const fileName: string = basename(filePath);
  const content: string = await Deno.readTextFile(filePath);

  return parseSourceCode(content, fileName);
}

if (Deno.args.length !== 1) {
  console.error("Must requires an argument.")
  console.log(`Usage: ts2ast <FILE> `)
  Deno.exit(1)
}

const path = Deno.args[0]
const ast = await parseSourceFile(path)

console.log(JSON.stringify(ast, null, 2));
