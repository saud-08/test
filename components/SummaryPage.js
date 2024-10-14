'use client'

import Link from 'next/link'
import jobData from '../data/jobData.json'

export default function SummaryPage() {
  // In a real application, you would calculate these values based on user responses
  const questionsAttended = jobData.questions.length // Assuming all questions were answered
  const totalQuestions = jobData.questions.length
  const totalScore = "No value" // Placeholder
  const status = "Test" // Placeholder

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Interview Summary</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-2">Questions attended</th>
            <th className="border border-gray-300 p-2">Total Score</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{questionsAttended} of {totalQuestions}</td>
            <td className="border border-gray-300 p-2">{totalScore}</td>
            <td className="border border-gray-300 p-2">{status}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Home
      </Link>
    </div>
  )
}