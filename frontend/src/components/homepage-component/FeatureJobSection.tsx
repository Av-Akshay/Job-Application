

interface job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}



const dummyJobsData: Array<job> = [
  {
    id:1,
    title: "Software Engineer",
    company: "ABC Company",
    location: "New York",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We are looking for a talented Software Engineer to join our growing team. You will be responsible for developing and maintaining web applications.",
  },
  {
    id:2,
    title: "Graphic Designer",
    company: "XYZ Agency",
    location: "San Francisco",
    type: "Part-time",
    salary: "$80,000 - $100,000",
    description: "We are seeking a creative Graphic Designer to work on various projects, including branding, marketing materials, and digital assets.",
  },
  {
    id:3,
    title: "Marketing Manager",
    company: "PQR Corp",
    location: "Chicago",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "We are looking for an experienced Marketing Manager to lead our marketing efforts and drive brand awareness.",
  },
  {
    id:4,
    title: "Data Analyst",
    company: "Data Insights Inc.",
    location: "Seattle",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    description: "We are seeking a skilled Data Analyst to interpret data, analyze results using statistical techniques and provide ongoing reports.",
  }
]


const FeatureJobSection = ()=> {
  return (
    <section className="my-10 w-full">
        <div className='flex flex-col gap-4'>
        <h1 className="text-center font-bold text-5xl">Featured Opportunities</h1>
        <div className="flex justify-center">
            <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {dummyJobsData.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-gray-500 text-sm mt-2">{job.type} | {job.salary}</p>
              <p className="text-gray-700 mt-4 text-sm">{job.description}</p>
              <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">View Details</button>
            </div>
          ))}
        </div>
    </section>
  )
}

export default FeatureJobSection