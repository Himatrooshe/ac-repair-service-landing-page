import PageHeader from '@/components/ui/PageHeader';
import TeamGrid from '@/components/sections/TeamGrid';

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title="Our Team"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Our Team' }
        ]}
      />
      <TeamGrid />
    </>
  );
}
