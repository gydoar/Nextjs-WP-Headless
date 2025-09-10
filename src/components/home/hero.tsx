import Image from "next/image"

export function Hero() {
    return(
       <div className="mb-4">
         <h1 className="font-bold text-2xl mb-2">Hi, I’m Expert WordPress Developer</h1>
         <p className="mb-4">Building custom websites built for speed, flexibility, and real business impact that drives online growth.</p>

         <Image src={"/hero.png"} width={700} height={192} alt="Hero Image" quality={70} placeholder="blur" blurDataURL="/hero-placeholder.png" loading="eager"/>
       </div> 
    )
}