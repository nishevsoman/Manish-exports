'use client'

import HomeProductCard from "@/components/HomeProductCard";

export default function HomeProducts() {
    const data = [
        {
            heading: 'Architectural & Structural Hardware',
            description: 'Engineered hardware for doors, walls, and large-scale installations.',
            products: [
                { title: 'Door Hardware', image: '/images/door.jpg', href: '/products/door' },
                { title: 'Curtain Fittings', image: '/images/curtain.jpg', href: '/products/curtain' },
                { title: 'Firefronts and Vents', image: '/images/fire.jpg', href: '/products/firefronts' },
                { title: 'Ironmongery', image: '/images/iron.jpg', href: '/products/ironmongery' },
            ]
        },
        {
            heading: 'Furniture & Cabinet Hardware',
            description: 'Precision fittings and components for interior furniture and modular units.',
            products: [
                { title: 'Cabinet Fittings', image: '/images/cabinet.jpg', href: '/products/cabinet' },
                { title: 'Furniture Fittings', image: '/images/furniture.jpg', href: '/products/furniture' },
                { title: 'Hooks and Hangers', image: '/images/hooks.jpg', href: '/products/hooks' },
            ]
        },
        {
            heading: 'Specialised & Outdoor Hardware',
            description: 'Built to endure — rugged, corrosion-resistant, and application-specific.',
            products: [
                { title: 'Marine Hardware', image: '/images/marine.jpg', href: '/products/marine' },
                { title: 'Bathroom Accessories', image: '/images/bathroom.jpg', href: '/products/bathroom' },
                { title: 'Electrical Accessories', image: '/images/electrical.jpg', href: '/products/electrical' },
            ]
        }
    ]

    return (
        <section className="py-12 px-6 sm:px-10 md:px-20 max-w-[1440px] mx-auto">
            <h2 className="text-[40px] sm:text-[60px] md:text-[100px] font-normal tracking-[-0.05em] text-left pt-8 sm:pt-10 pb-10 sm:pb-[60px] leading-tight">
                Product Categories
            </h2>

            {data.map((section, idx) => (
                <div key={idx} className="mb-16 sm:mb-20">
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] mb-1 text-left tracking-[-0.05em]">
                        {section.heading}
                    </h3>
                    <p className="text-[16px] sm:text-[18px] md:text-base text-gray-700 mb-4 text-left tracking-[-0.05em]">
                        {section.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-10">
                        {section.products.map((item, idx) => (
                            <HomeProductCard
                                key={idx}
                                title={item.title}
                                image={item.image}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <div className="mt-10 sm:mt-12">
                <a
                    href="/products"
                    className="inline-block px-6 sm:px-8 py-3 bg-[#470E0E] text-white text-[18px] sm:text-[20px] tracking-[-0.05em] hover:bg-[#5a1a1a] transition"
                >
                    Explore more
                </a>
            </div>
        </section>
    )
}
