import PageHeader from '@/components/ui/PageHeader';
import AboutSection from '@/components/sections/AboutSection';
import FactsCounter from '@/components/sections/FactsCounter';
// import TeamGrid from '@/components/sections/TeamGrid';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'About' }
        ]}
        backgroundImage="/img/p2.png"
      />
      <AboutSection />
      <FactsCounter />
      {/* <TeamGrid /> */}
    </>
  );
}
