import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import FactsCounter from '@/components/sections/FactsCounter';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
// import QuoteForm from '@/components/sections/QuoteForm'; // Commented out - will work on it later
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ReviewRequestSection from '@/components/sections/ReviewRequestSection';
import CertificateSection from '@/components/sections/CertificateSection';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <FactsCounter />
      <FeaturesSection />
      <ServicesGrid />
      {/* <QuoteForm /> */} {/* Commented out - will work on it later */}
      <TestimonialsCarousel />
      <ReviewRequestSection />
      <CertificateSection />
    </>
  );
}
