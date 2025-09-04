import PageHeader from '@/components/ui/PageHeader';
import QuoteForm from '@/components/sections/QuoteForm';

export default function QuotePage() {
  return (
    <>
      <PageHeader 
        title="Free Quote"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Free Quote' }
        ]}
      />
      <QuoteForm />
    </>
  );
}
