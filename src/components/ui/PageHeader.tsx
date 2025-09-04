import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat py-20 mb-20 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-down">
          {title}
        </h1>
        <nav className="flex justify-center items-center space-x-2 text-white">
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2" />
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
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
