"use client";
import { useState } from 'react';

const NUMBER_QUESTIONS = [
  {
    id: 1,
    question: "How many apples are there?",
    image: "🍎🍎🍎",
    options: ["2", "3", "4", "5"],
    correct: "3"
  },
  {
    id: 2,
    question: "What comes after 5?",
    image: "1️⃣2️⃣3️⃣4️⃣5️⃣❓",
    options: ["4", "6", "7", "8"],
    correct: "6"
  },
  {
    id: 3,
    question: "How many stars do you see?",
    image: "⭐⭐⭐⭐",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    id: 4,
    question: "What is 2 + 2?",
    image: "➕",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    id: 5,
    question: "How many balloons are floating?",
    image: "🎈🎈🎈🎈🎈",
    options: ["3", "4", "5", "6"],
    correct: "5"
  },
  {
    id: 6,
    question: "What is 3 + 3?",
    image: "➕",
    options: ["4", "5", "6", "7"],
    correct: "6"
  }
];

export default function NumberQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const correct = answer === NUMBER_QUESTIONS[currentQuestion].correct;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion === NUMBER_QUESTIONS.length - 1) {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {showScore ? (
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Quiz Complete! 🎉</h2>
            <p className="text-2xl text-gray-700 mb-6">
              You scored {score} out of {NUMBER_QUESTIONS.length}
            </p>
            <div className="mb-8">
              {score === NUMBER_QUESTIONS.length && (
                <div className="text-green-500 text-xl mb-4">
                  Perfect Score! You're a math genius! 🧮
                </div>
              )}
            </div>
            <button
              onClick={restartQuiz}
              className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold text-gray-600">
                Question {currentQuestion + 1}/{NUMBER_QUESTIONS.length}
              </span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-purple-600 font-semibold">
                Score: {score}
              </span>
            </div>

            <div className="mb-8 text-center">
              <span className="text-6xl mb-4 block">
                {NUMBER_QUESTIONS[currentQuestion].image}
              </span>
              <h2 className="text-2xl font-bold text-gray-800">
                {NUMBER_QUESTIONS[currentQuestion].question}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {NUMBER_QUESTIONS[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 text-2xl font-bold rounded-xl transition-all transform hover:scale-105 ${
                    selectedAnswer === option
                      ? option === NUMBER_QUESTIONS[currentQuestion].correct
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : selectedAnswer !== null && option === NUMBER_QUESTIONS[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
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