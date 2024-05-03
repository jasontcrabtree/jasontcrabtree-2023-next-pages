import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { formatDate, truncateString } from '@/lib/utils';

const BlogPostCard = ({
  slug,
  meta: {
    title,
    description,
    date,
  }
}: BlogPost) => {
  return (
    <li className="shadow-lg rounded-lg md:p-6 p-4 gap-4 dark:bg-indigo-950 flex flex-col">
      <Link href={slug} className="underline text-indigo-700">
        <h2 className="text-indigo-700">{title}</h2>
      </Link>
      {date && (<p className="mt-auto">{formatDate(date)}</p>)}
      {description && <p className="description">{truncateString(description, 120)}</p>}
    </li>
  );
}

const BlogPostsList = ({ posts, paginationLimit }: { posts: BlogPost[], paginationLimit: number }) => {

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
      {posts ? (
        posts.slice(0, paginationLimit).map((item, i) => (
          <BlogPostCard
            key={i}
            meta={item.meta}
            slug={`/blog/${item.slug}`}
          />
        ))
      ) : (
        <div>No blog posts</div>
      )}
    </ul>
  );
}

export default BlogPostsList;
