import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeSection />
      </main>
    </div>
  );
}

export default App;
