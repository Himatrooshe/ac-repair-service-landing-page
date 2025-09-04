import PageHeader from '@/components/ui/PageHeader';
import FeaturesSection from '@/components/sections/FeaturesSection';

export default function FeaturesPage() {
  return (
    <>
      <PageHeader 
        title="Features"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Features' }
        ]}
      />
      <FeaturesSection />
    </>
  );
}
