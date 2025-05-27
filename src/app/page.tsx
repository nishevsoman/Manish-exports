import Navbar from "@/components/Navbar"
import HomeHero from "@/components/HomeHero";
import CompanySlider from "@/components/CompanySlider";
import HomeAbout from "@/components/HomeAbout";
import HomeProducts from "@/components/HomeProducts";
import QuoteSection from "@/components/QuoteSection";
import HomeStandards from "@/components/HomeStandards";
import HomeMissionSection from "@/components/HomeMissionSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeHero />
            <CompanySlider />
            <HomeAbout/>
            <HomeProducts />
            <QuoteSection />
            <HomeStandards />
            <HomeMissionSection />
            <Footer />
        </>
    );
}
