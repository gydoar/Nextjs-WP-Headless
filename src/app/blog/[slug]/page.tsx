import { getPostBySlug, getAuthorById, getCategoriesByIds } from "@/lib/queries";
import type { Metadata, ResolvingMetadata } from 'next'
import Link from "next/link";


type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {


    const post = await getPostBySlug((await params).slug);
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: post?.title.rendered,
        description: post?.excerpt.rendered,
        openGraph:{
            images:['/open-graph.jpg', ...previousImages]
        }
    }
}


export default async function Page({params} : {
        params: Promise<{slug:string}>
}) {
    const post = await getPostBySlug((await params).slug);
    if(!post){ return <div>Post not found.</div>}

    const author = await getAuthorById(post.author);

    const categories = await getCategoriesByIds(post.categories);

    const formattedDate = new Date(post.date);
    const date = formattedDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

  return (
    <div>
        <h1 className="font-bold text-2xl mb-4"
            dangerouslySetInnerHTML={{__html: post.title.rendered}}
        ></h1>

        <div className="flex justify-between text-sm item-center mb-8">
            <p>Published on <b>{date}</b> by <b>{author?.name}</b></p>

            <div className="flex gap-2 text-[0.7rem]">
                {categories.map((category) => (
                    <Link key={category.id} className="border p-1 rounded-md "
                    href={`/blog?categories=${category.id}`}>
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>


        <div className="article prose" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        
        {post.acf?.country && (

            <div className="prose">
                <p><strong>Country: </strong>{post.acf.country}</p>
            </div>
            
        )}

    </div>
  );
}
