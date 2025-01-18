'use client';

import { useState } from 'react';

export default function ScheduleOverview() {
  const [activeDay, setActiveDay] = useState('monday');

  const schedule = {
    monday: [
      { time: '09:00 AM', activity: 'Morning Circle Time', icon: '🌞' },
      { time: '09:30 AM', activity: 'Language & Literacy', icon: '📚' },
      { time: '10:30 AM', activity: 'Creative Arts', icon: '🎨' },
      { time: '11:30 AM', activity: 'Outdoor Play', icon: '🌳' },
      { time: '12:30 PM', activity: 'Lunch Time', icon: '🍱' },
      { time: '01:30 PM', activity: 'Quiet Time/Nap', icon: '😴' },
      { time: '02:30 PM', activity: 'Music & Movement', icon: '🎵' },
      { time: '03:30 PM', activity: 'Story Time', icon: '📖' }
    ],
    tuesday: [
      { time: '09:00 AM', activity: 'Morning Assembly', icon: '🌅' },
      { time: '09:30 AM', activity: 'Numbers & Counting', icon: '🔢' },
      { time: '10:30 AM', activity: 'Art Workshop', icon: '🖼️' },
      { time: '11:30 AM', activity: 'Garden Activities', icon: '🌱' },
      { time: '12:30 PM', activity: 'Lunch Break', icon: '🍽️' },
      { time: '01:30 PM', activity: 'Rest Time', icon: '💤' },
      { time: '02:30 PM', activity: 'Dance Class', icon: '💃' },
      { time: '03:30 PM', activity: 'Free Play', icon: '🎮' }
    ],
    wednesday: [
      { time: '09:00 AM', activity: 'Morning Yoga', icon: '🧘' },
      { time: '09:30 AM', activity: 'Science Exploration', icon: '🔬' },
      { time: '10:30 AM', activity: 'Music Class', icon: '🎼' },
      { time: '11:30 AM', activity: 'Physical Activities', icon: '⚽' },
      { time: '12:30 PM', activity: 'Lunch Time', icon: '🍳' },
      { time: '01:30 PM', activity: 'Quiet Reading', icon: '📚' },
      { time: '02:30 PM', activity: 'Drama & Theatre', icon: '🎭' },
      { time: '03:30 PM', activity: 'Show & Tell', icon: '🗣️' }
    ],
    thursday: [
      { time: '09:00 AM', activity: 'Morning Exercise', icon: '🏃' },
      { time: '09:30 AM', activity: 'World Discovery', icon: '🌍' },
      { time: '10:30 AM', activity: 'Craft Making', icon: '✂️' },
      { time: '11:30 AM', activity: 'Sports Time', icon: '🏈' },
      { time: '12:30 PM', activity: 'Lunch Break', icon: '🥗' },
      { time: '01:30 PM', activity: 'Nap Time', icon: '🛏️' },
      { time: '02:30 PM', activity: 'Building Blocks', icon: '🏗️' },
      { time: '03:30 PM', activity: 'Group Games', icon: '🎲' }
    ],
    friday: [
      { time: '09:00 AM', activity: 'Morning Songs', icon: '🎤' },
      { time: '09:30 AM', activity: 'Nature Study', icon: '🦋' },
      { time: '10:30 AM', activity: 'Painting', icon: '🎨' },
      { time: '11:30 AM', activity: 'Adventure Play', icon: '🎪' },
      { time: '12:30 PM', activity: 'Lunch Time', icon: '🍜' },
      { time: '01:30 PM', activity: 'Rest Period', icon: '🌙' },
      { time: '02:30 PM', activity: 'Fun Projects', icon: '🎯' },
      { time: '03:30 PM', activity: 'Weekly Celebration', icon: '🎉' }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Daily Activity Schedule</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A balanced mix of learning and fun activities throughout the day.
          </p>
        </div>

        {/* Day Selection */}
        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-4">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 min-w-[120px] ${
                activeDay === day
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          {schedule[activeDay].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-6 group"
            >
              {/* Time */}
              <div className="w-24 text-right">
                <span className="text-sm font-semibold text-gray-600">
                  {item.time}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform duration-300"></div>
                {index !== schedule[activeDay].length - 1 && (
                  <div className="absolute top-4 left-2 w-0.5 h-10 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                )}
              </div>

              {/* Activity Card */}
              <div className="flex-1">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-800">
                      {item.activity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 