export default function StandardSection() {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">

                {/* Left Text Content */}
                <div className="flex flex-col justify-center tracking-[-0.05em]">
                    <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-normal mb-8 leading-tight">
                        Our Standard
                    </h2>

                    <div className="divide-y divide-gray-300 text-black">
                        {/* Row 1 */}
                        <div className="py-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-y-2 sm:gap-x-6 items-start text-[18px] sm:text-[20px] leading-relaxed">
                            <p className="font-medium">Adaptive</p>
                            <p>We tailor hardware solutions to fit your needs — custom finishes, sizes, and OEM specs.</p>
                        </div>

                        {/* Row 2 */}
                        <div className="py-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-y-2 sm:gap-x-6 items-start text-[18px] sm:text-[20px] leading-relaxed">
                            <p className="font-medium">Durable</p>
                            <p>Engineered for endurance. Our components are built to perform in demanding environments, season after season.</p>
                        </div>

                        {/* Row 3 */}
                        <div className="py-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-y-2 sm:gap-x-6 items-start text-[18px] sm:text-[20px] leading-relaxed">
                            <p className="font-medium">Reliable</p>
                            <p>Consistent quality. On-time dispatch. Trusted by global buyers for over 35 years and counting.</p>
                        </div>
                    </div>
                </div>

                {/* Right Visual Box */}
                <div className="flex justify-center md:justify-end items-end">
                    <div
                        className="w-full max-w-[550px] h-[400px] sm:h-[500px] md:h-[650px] bg-[#470E0E]"
                    />
                </div>
            </div>
        </section>
    );
}
