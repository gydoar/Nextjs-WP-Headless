const baseUrl = process.env.WORDPRESS_URL;

import { Post, Category } from "@/lib/types";

//Fetch categories from WordPress
export async function getCategories(): Promise<Category[]>{
    const response = await fetch (`${baseUrl}/wp-json/wp/v2/categories`);
    const data = await response.json();
    return data;
}

