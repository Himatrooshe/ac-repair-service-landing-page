import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import FactsCounter from '@/components/sections/FactsCounter';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import QuoteForm from '@/components/sections/QuoteForm';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <FactsCounter />
      <FeaturesSection />
      <ServicesGrid />
      <QuoteForm />
      <TestimonialsCarousel />
    </>
  );
}
