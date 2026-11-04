/// <reference path="../.astro/types.d.ts" />

declare module 'node:fs' {
  export function existsSync(path: string): boolean;
  export function readFileSync(path: string, encoding: string): string;
}

declare module 'node:path' {
  export function resolve(...paths: string[]): string;
  const pathDefault: { resolve(...paths: string[]): string };
  export default pathDefault;
}

declare var process: {
  cwd(): string;
  env: Record<string, string | undefined>;
};

