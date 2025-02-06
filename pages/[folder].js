import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const rootDir = process.cwd();

export async function getStaticPaths() {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const folders = entries
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);

  const paths = folders.map(folder => ({ params: { folder } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const folderPath = path.join(rootDir, params.folder);
  const files = fs.readdirSync(folderPath);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  return { props: { folder: params.folder, mdFiles } };
}

export default function FolderPage({ folder, mdFiles }) {
  return (
    <div>
      <h1>Файлы в папке "{folder}"</h1>
      <ul>
        {mdFiles.map(file => (
          <li key={file}>
            <Link href={`/${folder}/${file.replace('.md', '')}`}>{file}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
