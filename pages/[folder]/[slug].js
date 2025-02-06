import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const rootDir = process.cwd();

export async function getStaticPaths() {
  const folders = fs.readdirSync(rootDir).filter(f => fs.lstatSync(path.join(rootDir, f)).isDirectory());

  let paths = [];
  folders.forEach(folder => {
    const files = fs.readdirSync(path.join(rootDir, folder)).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      paths.push({ params: { folder, slug: file.replace('.md', '') } });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(rootDir, params.folder, `${params.slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return { props: { frontmatter: data, mdxSource } };
}

export default function NotePage({ mdxSource }) {
  return <MDXRemote {...mdxSource} />;
}
