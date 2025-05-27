'use client'

import Image from 'next/image'

const companies = [
    '/logos/godrej.png',
    '/logos/godrej.png',
    '/logos/godrej.png',
    '/logos/godrej.png',
    '/logos/godrej.png',
    '/logos/godrej.png'
    // Add more logo paths here
]

export default function CompanySlider() {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="w-full relative">
                <div className="flex animate-marquee space-x-16">
                    {companies.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Company logo ${index}`}
                                width={150}
                                height={90}
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate logos for smooth infinite loop */}
                    {companies.map((logo, index) => (
                        <div key={`duplicate-${index}`} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Duplicate logo ${index}`}
                                width={150}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}