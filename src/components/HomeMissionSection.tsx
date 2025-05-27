export default function HomeMissionSection() {
    return (
        <section className="flex items-center justify-start px-6 sm:px-12 md:px-20 py-16 sm:py-20 md:py-24 md:min-h-screen">
            <div className="text-left max-w-full sm:max-w-[700px] md:max-w-[1100px]">
                <h2 className="text-[48px] sm:text-[64px] md:text-[100px] tracking-[-0.05em] pb-12 sm:pb-[60px]">
                    Mission
                </h2>

                <p className="text-black mb-4 text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.05em]">
                    We care about craft. We obsess over precision. We deliver what we promise.
                </p>

                <p className="text-black mb-6 pt-5 text-[18px] sm:text-[20px] md:text-[24px] tracking-[-0.05em]">
                    At Manish Exports, we don’t just manufacture — we refine, perfect, and deliver with intent.
                    Every product is a result of quiet dedication, proven process, and a commitment to doing things right.
                    No noise. No shortcuts. Just quality that speaks for itself.
                </p>

                <div className="pt-10">
                    <a
                        href="/about"
                        className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#470E0E] text-white text-[18px] sm:text-[20px] tracking-[-0.05em] hover:bg-[#5a1a1a] transition font-light"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
