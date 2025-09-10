import Link from "next/link";

export function Footer() {
    return(
        <footer className="text-center mt-8">
            <p>&copy; 2025 Lite &middot; Build with Nextjs v15 &middot; <Link className="underline decoration-sky-500" href={'sitemap'}>
                Sitemap
            </Link></p>
            <p className="text-gray-500"><Link target="_blank" href={'https://andvega.com/'}><span className="underline decoration-pink-500">Andvega</span> &middot; WordPress Frontend Developer</Link></p>
        </footer>
    );
}
