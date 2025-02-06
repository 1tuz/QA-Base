import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const rootDir = process.cwd(); // Корневая директория проекта

export async function getStaticProps() {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const folders = entries
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);

  return { props: { folders } };
}

export default function Home({ folders }) {
  return (
    <div>
      <h1>Доступные папки</h1>
      <ul>
        {folders.map(folder => (
          <li key={folder}>
            <Link href={`/${folder}`}>{folder}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
