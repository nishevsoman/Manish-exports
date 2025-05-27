import Image from 'next/image'

export default function HomeHero() {
    return (
        <section className="relative h-[90vh]">
            {/* Background Image */}
            <Image
                src="/images/hero-bg.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Content - Left Aligned */}
            <div className="absolute inset-0 flex items-center">
                <div className="text-white px-6 sm:px-10 md:px-20 max-w-4xl">
                    <h1 className="text-[36px] sm:text-[44px] md:text-[50px] font-normal leading-tight mb-8 tracking-[-0.03em]">
                        Precision Engineered Metal Components for the World’s Leading OEMs & Distributors
                    </h1>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 text-base sm:text-lg md:text-xl font-light text-white tracking-[-0.03em] border border-white hover:bg-white hover:text-black transition"
                        >
                            Explore Products
                        </a>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 text-base sm:text-lg md:text-xl font-light text-white tracking-[-0.03em] border border-white hover:bg-white hover:text-black transition"
                        >
                            Send Enquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
