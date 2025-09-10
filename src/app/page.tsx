import { Hero } from "@/components/home/hero";
import { SocialIcons } from "@/components/home/social-icons";
import { Categories } from "@/components/home/categories";
import { LatestPosts } from "@/components/home/latest-posts";
import { getCategories } from "@/lib/queries";

export default async function Home() {

  const categories = await getCategories();

  return (
    <div>
      <Hero />
      <SocialIcons />
      <Categories categories={categories}/>
      <LatestPosts />
    </div>
  );
}
