const baseUrl = process.env.WORDPRESS_URL;

import { Post, Category } from "@/lib/types";

const revalidateTime: number = 86400 //24 hours

//Fetch categories from WordPress
export async function getCategories(): Promise<Category[]>{
    const response = await fetch (`${baseUrl}/wp-json/wp/v2/categories`);
    const data = await response.json();
    return data;
}

//Fetch all posts from WordPress
export async function getAllPosts(
    pageNumber: number = 1, 
    perPage = 10, 
    searchTerm: string = '',
    categories: number = 0
) : Promise<{posts: Post[], totalPages: number}> {
    const params = new URLSearchParams ({
        per_page: perPage.toString(),
        page: pageNumber.toString(),
        search: searchTerm
    });

if(categories != 0) {
    params.set('categories', categories.toString());
}

//console.log(`${baseUrl}/wp-json/wp/v2/posts?${params}`);

const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`, {
    next:{
        revalidate: revalidateTime
    }
});
const posts = await response.json();
const totalPages = parseInt(response.headers.get('X-WP-TotalPages') ?? '1');
return {posts, totalPages }

}