import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        breadcrumbs={[
          { label: 'Pages' },
          { label: 'Contact' }
        ]}
        backgroundImage="/img/s3.png"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <ContactForm />
            </div>
            <div className="animate-fade-in">
              <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.1634181578477!2d90.43338937385309!3d23.810629979534625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6353f3a5b1d%3A0xcd84817e7695947e!2sBlock%20E%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1757871979412!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}