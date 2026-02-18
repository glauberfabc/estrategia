
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { Method } from './components/Method';
import { Expert } from './components/Expert';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-background-dark overflow-x-hidden">
      <main className="pt-0">
        <Hero />
        <Statement />
        <Method />
        <Expert />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
