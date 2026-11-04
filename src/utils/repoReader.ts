import fs from 'node:fs';
import path from 'node:path';

export interface CodeVariant {
  id: string;
  label: string;
  badge: string;
  filePath: string;
  lang: string;
  code: string;
}

export function readRepoFile(relativePath: string): string {
  try {
    const fullPath = path.resolve(process.cwd(), relativePath);
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    return `// Archivo no encontrado: ${relativePath}`;
  }
}

export function loadComponentVariants(
  files: Array<{ id: string; label: string; badge: string; filePath: string; lang: string }>
): CodeVariant[] {
  return files.map((item) => ({
    ...item,
    code: readRepoFile(item.filePath)
  }));
}

