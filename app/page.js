import JobDetails from '../components/JobDetails'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Interview Application</h1>
      <JobDetails />
    </div>
  )
}