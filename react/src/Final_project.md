import React from 'react';
import Card from './components/Card';

const App = () => {
  const cards = [
    { title: 'Book 1', description: 'Learning web development.' },
    { title: 'Book 2', description: 'Explore new worlds and ideas.' },
    {tittle: 'Book 3', description: 'Use content and skills to enjoy learning. '},
    {tittle:'Book 4', description: 'Get growing as a great developer.' },
  ];

  return (
    <div className="p-4">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold back-ground color:lightblue">Book Café</h1>
      </header>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
