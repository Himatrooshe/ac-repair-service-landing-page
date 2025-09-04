import PageHeader from '@/components/ui/PageHeader';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader 
        title="Testimonial"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Testimonial' }
        ]}
      />
      <TestimonialsCarousel />
    </>
  );
}
