import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import Spinner from '../ui/Spinner';
import FloatingActionButton from '../ui/FloatingActionButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Spinner />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
