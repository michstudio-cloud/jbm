import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './HomePage';
import LegalTintPage from './LegalTintPage';
import SmartTintPage from './SmartTintPage';
import WhyTintPage from './WhyTintPage'; // Import the new WhyTintPage
import QuotePage from './QuotePage'; // Import the new QuotePage

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/polarizados-legales':
        return <LegalTintPage />;
      case '#/polarizado-inteligente':
        return <SmartTintPage />;
      case '#/por-que-polarizar': // New case for Why Tint page
        return <WhyTintPage />;
      case '#/cotizacion-polarizado': // New case for Quote page
        return <QuotePage />;
      case '#':
      case '':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;