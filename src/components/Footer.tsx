export default function Footer() {
    return (
        <footer className="bg-[#4A1B1B] text-white">
            <div className="w-full flex flex-col items-center text-center md:flex-row md:items-start md:text-left justify-between px-6 md:px-[80px]">

                {/* Left Section */}
                <div className="w-full md:w-1/2 pt-12 pb-8 md:pb-5">
                    <h2 className="text-[36px] sm:text-[40px] md:text-[36px] mb-4 leading-tight md:leading-snug">
                        Made in India.
                    </h2>
                    <p className="opacity-50 mb-6 max-w-[350px] mx-auto md:mx-0 text-[18px] sm:text-[20px] md:text-base">
                        Looking for a Trusted Global Supplier of Premium Metal Components?
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-4 sm:py-3 md:py-2 font-light text-white tracking-[-0.05em] border border-white hover:bg-white hover:text-black transition-colors mx-auto md:mx-0"
                        style={{ minWidth: '180px', textAlign: 'center' }}
                    >
                        Send Your Requirements
                    </a>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 pt-12 md:pt-20 pb-5 pr-0 md:pr-[20px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 text-center md:text-left">
                        {/* Socials */}
                        <div>
                            <h3 className="font-normal opacity-50 mb-3 text-[20px] sm:text-[22px] md:text-lg">
                                Socials
                            </h3>
                            <ul className="space-y-1 font-normal text-[16px] sm:text-[18px] md:text-base">
                                <li><a href="#" className="hover:underline block">Facebook</a></li>
                                <li><a href="#" className="hover:underline block">Instagram</a></li>
                            </ul>
                        </div>

                        {/* About */}
                        <div>
                            <h3 className="font-normal opacity-50 mb-3 text-[20px] sm:text-[22px] md:text-lg">
                                About
                            </h3>
                            <ul className="space-y-1 font-normal text-[16px] sm:text-[18px] md:text-base">
                                <li><a href="#" className="hover:underline block">Mission</a></li>
                                <li><a href="#" className="hover:underline block">Company</a></li>
                                <li><a href="#" className="hover:underline block">Manufacturing</a></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="col-span-2 md:col-span-1 mx-auto md:mx-0 max-w-xs">
                            <h3 className="font-normal opacity-50 mb-3 text-[20px] sm:text-[22px] md:text-lg">
                                Products
                            </h3>
                            <ul className="space-y-1 font-normal text-[16px] sm:text-[18px] md:text-base">
                                <li><a href="#" className="hover:underline block">Furniture Fittings</a></li>
                                <li><a href="#" className="hover:underline block">Home Hardware</a></li>
                                <li><a href="#" className="hover:underline block">Specialty Hardware</a></li>
                                <li><a href="#" className="hover:underline block">Custom / OEM Fittings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-[14px] sm:text-[16px] text-gray-300 pt-8 pb-12 md:pb-10">
                © 2025 Manish Exports. All Rights Reserved.
            </div>
        </footer>
    );
}
