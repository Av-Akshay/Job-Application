import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../store/store";
import ApplyForm from "../components/ApplyForm";

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [showApplyForm, setShowApplyForm] = useState(false);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  
  // Find the job by ID
  const job = jobs.find(j => j._id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/jobs')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  const handleApplySuccess = () => {
    setShowApplyForm(false);
    // Show success message or redirect
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <button
                  onClick={() => navigate('/jobs')}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  Jobs
                </button>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-500 font-medium truncate">{job.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {job.company.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h1>
                    <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Job Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Posted 3 days ago</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>₹12-20 LPA</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApplyClick}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Apply for this position
              </button>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {job.discription}
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Develop and maintain high-quality software applications</li>
                  <li>Collaborate with cross-functional teams to define and implement new features</li>
                  <li>Write clean, efficient, and well-documented code</li>
                  <li>Participate in code reviews and maintain coding standards</li>
                  <li>Debug and resolve technical issues in a timely manner</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills & Experience</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>3+ years of experience in relevant technologies</li>
                  <li>Strong problem-solving and analytical skills</li>
                  <li>Experience with modern development frameworks</li>
                  <li>Knowledge of database systems and API integration</li>
                  <li>Excellent communication and teamwork abilities</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Competitive salary and performance bonuses</li>
                  <li>Health insurance and wellness programs</li>
                  <li>Flexible working hours and remote work options</li>
                  <li>Professional development opportunities</li>
                  <li>Modern office environment with great team culture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About {job.company}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {job.company.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{job.company}</p>
                    <p className="text-sm text-gray-600">Technology Company</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A leading technology company focused on innovation and delivering cutting-edge solutions 
                  to help businesses transform and grow in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Company Size</p>
                    <p className="font-medium">100-500 employees</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Industry</p>
                    <p className="font-medium">Technology</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Founded</p>
                    <p className="font-medium">2015</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Website</p>
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-700">Visit site</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {jobs.filter(j => j._id !== job._id).slice(0, 3).map((similarJob) => (
                  <div
                    key={similarJob._id}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
                    onClick={() => navigate(`/jobs/${similarJob._id}`)}
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{similarJob.title}</h4>
                    <p className="text-sm text-blue-600 mb-1">{similarJob.company}</p>
                    <p className="text-xs text-gray-500">{similarJob.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Form Modal */}
      {showApplyForm && (
        <ApplyForm
          job={job}
          onClose={() => setShowApplyForm(false)}
          onSuccess={handleApplySuccess}
        />
      )}
    </div>
  );
};

export default JobDetail;