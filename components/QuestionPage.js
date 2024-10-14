'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import jobData from '../data/jobData.json'

export default function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState(Array(jobData.questions.length).fill(''))
  const router = useRouter()

  const handleNext = () => {
    if (currentQuestionIndex < jobData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      router.push('/summary')
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleAnswer = (e) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = e.target.value
    setAnswers(newAnswers)
  }

  const currentQuestion = jobData.questions[currentQuestionIndex]

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Question {currentQuestionIndex + 1} of {jobData.questions.length}</h2>
      <p className="mb-4">{currentQuestion}</p>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        value={answers[currentQuestionIndex]}
        onChange={handleAnswer}
        placeholder="Enter your answer here..."
      ></textarea>
      <div className="flex justify-between">
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          {currentQuestionIndex === jobData.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
      <div className="mt-4">Question {currentQuestionIndex + 1} of {jobData.questions.length}</div>
    </div>
  )
}