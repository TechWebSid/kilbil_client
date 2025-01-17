"use client";
import { useState } from 'react';

const COLOR_QUESTIONS = [
  {
    id: 1,
    question: "What color do you get when you mix blue and yellow?",
    options: ["Green", "Purple", "Orange", "Brown"],
    correct: "Green",
    emoji: "🎨"
  },
  {
    id: 2,
    question: "Which color represents the sun?",
    options: ["Blue", "Yellow", "Green", "Red"],
    correct: "Yellow",
    emoji: "☀️"
  },
  {
    id: 3,
    question: "What color are most bananas?",
    options: ["Yellow", "Red", "Green", "Orange"],
    correct: "Yellow",
    emoji: "🍌"
  },
  {
    id: 4,
    question: "What color is a strawberry?",
    options: ["Orange", "Purple", "Red", "Pink"],
    correct: "Red",
    emoji: "🍓"
  },
  {
    id: 5,
    question: "What color is grass?",
    options: ["Blue", "Yellow", "Brown", "Green"],
    correct: "Green",
    emoji: "🌿"
  },
  {
    id: 6,
    question: "What color is the sky on a clear day?",
    options: ["Green", "Blue", "Yellow", "Red"],
    correct: "Blue",
    emoji: "🌤️"
  }
];

export default function ColorQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer !== null) return; // Prevent multiple answers

    setSelectedAnswer(answer);
    const correct = answer === COLOR_QUESTIONS[currentQuestion].correct;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion === COLOR_QUESTIONS.length - 1) {
        setShowScore(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {showScore ? (
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Quiz Complete! 🎉</h2>
            <p className="text-2xl text-gray-700 mb-6">
              You scored {score} out of {COLOR_QUESTIONS.length}
            </p>
            <div className="mb-8">
              {score === COLOR_QUESTIONS.length && (
                <div className="text-green-500 text-xl mb-4">
                  Perfect Score! You're a color expert! 🌈
                </div>
              )}
            </div>
            <button
              onClick={restartQuiz}
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors shadow-md"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold text-gray-600">
                Question {currentQuestion + 1}/{COLOR_QUESTIONS.length}
              </span>
              <span className="bg-pink-100 px-4 py-2 rounded-full text-pink-600 font-semibold">
                Score: {score}
              </span>
            </div>

            <div className="mb-8 text-center">
              <span className="text-6xl mb-4 block">
                {COLOR_QUESTIONS[currentQuestion].emoji}
              </span>
              <h2 className="text-2xl font-bold text-gray-800">
                {COLOR_QUESTIONS[currentQuestion].question}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COLOR_QUESTIONS[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 ${
                    selectedAnswer === option
                      ? option === COLOR_QUESTIONS[currentQuestion].correct
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : selectedAnswer !== null && option === COLOR_QUESTIONS[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 