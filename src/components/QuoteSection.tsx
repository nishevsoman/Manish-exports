import './QuoteSection.css'; // make sure this path matches where you save the CSS

export default function QuoteSection() {
    return (
        <section className="quote-section">
            <div className="max-w-4xl text-left">
                <p className="text-[28px] sm:text-[36px] md:text-[50px] font-light leading-tight tracking-[-0.02em] text-black relative">
                    <span className="text-[60px] sm:text-[80px] md:text-[100px] font-semibold leading-none absolute -top-10 -left-3 md:-left-5 text-[#470E0E]">
                        “
                    </span>
                    <span className="block pl-6 md:pl-12">
                        For those who value consistency over claims, and craftsmanship over compromise.
                    </span>
                </p>
            </div>
        </section>
    );
}
