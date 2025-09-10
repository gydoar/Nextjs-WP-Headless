export default function Page() {
    return (
        <div className="prose">
            <h1 className="text-xl mb-4">Contact Us</h1>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugit adipisci dolorum eius temporibus dolor blanditiis? Reprehenderit quidem non fugiat laudantium deleniti commodi, at iure porro beatae sint autem illum.</p>
            
            <div className="flex flex-col md:flex-row justify-center mb-6">
                <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">Address</h2>
                    <p>123 London St. UK </p>
                </div>
                 <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">Phone</h2>
                    <p>+123 456 789 </p>
                </div>
                 <div className="w-full md:w-1/3 mb-4">
                    <h2 className="text-lg mb-2">Email</h2>
                    <p>example [at] example.com</p>
                </div>
            </div>
        </div>
    );

}