import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
    title: string
    image: string
    href: string
}

export default function HomeProductCard({ title, image, href }: ProductCardProps) {
    return (
        <Link href={href} className="group block w-full">
            <div className="overflow-hidden bg-[#470E0E] hover:scale-105 transition-transform duration-300 shadow-md">
                <div className="relative w-full" style={{ aspectRatio: '3.5 / 4' }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-30 group-hover:opacity-50 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 md:p-8 text-white text-left">
                        <span className="text-[18px] sm:text-[20px] md:text-[24px] font-normal tracking-[-0.05em] leading-snug">
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
