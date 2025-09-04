import PageHeader from '@/components/ui/PageHeader';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Services"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Services' }
        ]}
      />
      <ServicesGrid />
    </>
  );
}
