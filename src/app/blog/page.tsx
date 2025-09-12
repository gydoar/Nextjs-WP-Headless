import { LatestPosts } from "@/components/home/latest-posts";
import { getAllPosts } from "@/lib/queries";

type Prams = Promise<[slug: string]>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: {
  params: Prams;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const currentPage = searchParams?.page
    ? parseInt(searchParams.page as string, 10)
    : 1;
  const postPerPage = 10;
  const searchTerm =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const categories = parseInt(searchParams.categories as string) || 0;

  const { posts, totalPages } = await getAllPosts(
    currentPage,
    postPerPage,
    searchTerm,
    categories
  );

  const LatestsPostsProps = {
    posts,
    currentPage,
    totalPages,
    searchTerm,
    categories,
  };

  return (
    <div>
      <LatestPosts {...LatestsPostsProps} />
    </div>
  );
}
