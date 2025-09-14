import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHeader = ({ title, breadcrumbs, backgroundImage = '/img/s1.png' }: PageHeaderProps) => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 relative overflow-hidden min-h-[200px] xs:min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      {/* Gradient Overlay - Optimized for text visibility */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(20, 30, 60, 0.7) 50%, rgba(0, 0, 0, 0.8) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center relative z-10 h-full flex flex-col justify-center">
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 animate-slide-in-down leading-tight drop-shadow-2xl px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          {title}
        </h1>
        <nav className="flex flex-wrap justify-center items-center gap-1 xs:gap-1.5 sm:gap-2 text-white text-xs xs:text-sm sm:text-base" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          <Link href="/" className="flex items-center hover:text-primary transition-colors touch-manipulation">
            <Home className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 mr-1" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 mx-1 xs:mx-1.5 sm:mx-2" />
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors touch-manipulation">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
