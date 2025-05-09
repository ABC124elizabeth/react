
    import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const cards = [
    { title: 'Book 1', description: 'Learning web development.' },
    { title: 'Book 2', description: 'Explore new worlds and ideas.' },
    { title: 'Book 3', description: 'Use content and skills to enjoy learning.' },
    { title: 'Book 4', description: 'Get growing as a great developer.' },
  ];

  return (
    <div className="p-4">
      <header className="text-center mb-4" style={{ backgroundColor: 'lightblue' }}>
        <h1 className="text-4xl font-bold">Book Café</h1>
      </header>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundColor: 'blue', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}
          >
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
      <footer className="mt-4 text-center" style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
        © 2025 Book Café. All rights reserved.
      </footer>
    </div>
  );
};

export default App;