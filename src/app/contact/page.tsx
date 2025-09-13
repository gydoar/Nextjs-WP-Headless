import Link from "next/link";

export default function Page() {
    return (
        <div className="prose">
            <h1 className="text-xl mb-4">Contact Me!</h1>
            <p className="mb-6">Send me a message and I will reply as soon as possible.</p>
            <p><Link href={`mailto:me@andvega.com`}>me[at]andvega.com</Link></p>
        </div>
    );

}