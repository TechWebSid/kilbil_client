"use client";
import { useState, useEffect } from 'react';

const CARD_PAIRS = [
  { id: 1, emoji: "🐶", name: "dog" },
  { id: 2, emoji: "🐱", name: "cat" },
  { id: 3, emoji: "🐰", name: "rabbit" },
  { id: 4, emoji: "🐼", name: "panda" },
  { id: 5, emoji: "🦁", name: "lion" },
  { id: 6, emoji: "🐸", name: "frog" },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Initialize game
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, index }));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    // Check for matches
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].id === cards[second].id) {
        setMatchedPairs([...matchedPairs, cards[first].id]);
        setScore(score + 10);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedPairs.includes(cards[index].id)) return;
    setFlippedCards([...flippedCards, index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">Memory Game</h1>
          <p className="text-xl text-gray-600 mb-4">Match the pairs of animals!</p>
          <div className="bg-white rounded-full px-6 py-2 inline-block shadow-md">
            <span className="text-2xl font-bold text-yellow-500">Score: {score}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`aspect-square bg-white rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 ${
                flippedCards.includes(index) || matchedPairs.includes(card.id)
                  ? 'rotate-y-180'
                  : ''
              } hover:scale-105`}
            >
              <div className="w-full h-full flex items-center justify-center">
                {(flippedCards.includes(index) || matchedPairs.includes(card.id)) ? (
                  <span className="text-6xl">{card.emoji}</span>
                ) : (
                  <span className="text-6xl">❓</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {matchedPairs.length === CARD_PAIRS.length && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">Congratulations! 🎉</h2>
              <p className="text-xl text-gray-600 mb-6">You've completed the game!</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 