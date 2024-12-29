import HeroSection from "@/components/home";
import AboutSection from "@/components/layout/aboutSection";
import ContactUsSection from "@/components/layout/contactUsSection";
import HomeProductsSection from "@/components/layout/homeProductsSection";
import { SectionTitle } from "@/components/layout/sectionTitle";


export default function Home() {
  return (
<>

<HeroSection/>
<SectionTitle title = "الاكثر طلبا" />
<HomeProductsSection/>
<SectionTitle title = "نبذة عنا" />
<AboutSection/>
<SectionTitle title = "تواصل معنا" />
<ContactUsSection/>
</>
  );
}
