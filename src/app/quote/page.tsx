import PageHeader from '@/components/ui/PageHeader';
// import QuoteForm from '@/components/sections/QuoteForm'; // Commented out - will work on it later

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
      {/* <QuoteForm /> */} {/* Commented out - will work on it later */}
      <div className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quote Form Coming Soon</h2>
          <p className="text-gray-600">This section is currently under development.</p>
        </div>
      </div>
    </>
  );
}
