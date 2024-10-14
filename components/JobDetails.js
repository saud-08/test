import Link from 'next/link'
import jobData from '../data/jobData.json'

export default function JobDetails() {
  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-2">Job Title</th>
            <th className="border border-gray-300 p-2">Skills</th>
            <th className="border border-gray-300 p-2">Experience</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">Questions</th>
            <th className="border border-gray-300 p-2">Minimum Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{jobData.jobTitle}</td>
            <td className="border border-gray-300 p-2">{jobData.skills.join(', ')}</td>
            <td className="border border-gray-300 p-2">{jobData.experience}</td>
            <td className="border border-gray-300 p-2">{jobData.location}</td>
            <td className="border border-gray-300 p-2">{jobData.questions.length}</td>
            <td className="border border-gray-300 p-2">
              <Link href="/questions" className="text-blue-600 hover:underline">
                Interview &gt;&gt;
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        Looking for a proven software engineer having proven experience in Java based development with experience in
        building messaging applications using KAFKA. Exposure to building banking of financial services applications is
        added advantage
      </p>
    </div>
  )
}