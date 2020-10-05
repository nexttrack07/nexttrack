import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { Header } from '../../components/header'
import { Note } from '../../components/note'
import { Contents } from '../../components/contents'

const root = process.cwd()

const components = { Note, Contents }

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components })

  return (
    <>
      <Header />
      <div className='px-4'>
        <h1>{frontMatter.title}</h1>
        <div className='w-8/12 sm:w-full my-4'>
          <img
            src={frontMatter.image}
            alt={frontMatter.title}
            className='max-w-full h-auto'
          />
        </div>
        <div className='text-start'>{content}</div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, 'content'))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, '') } })),
  }
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'content', `${params.slug}.mdx`),
    'utf-8'
  )
  const { data, content } = matter(source)
  const mdxSource = await renderToString(content)

  return { props: { mdxSource, frontMatter: data } }
}
