import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './MainContent'; // Renamed from HomePage

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;