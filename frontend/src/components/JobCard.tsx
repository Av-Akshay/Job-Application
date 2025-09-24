import { useNavigate } from "react-router-dom";

interface JobCardProps {
  job: {
    _id: string;
    title: string;
    discription: string;
    userId: string;
    company: string;
    location: string;
  };
  viewMode: 'grid' | 'list';
  onApply?: (jobId: string) => void;
}

const JobCard = ({ job, viewMode, onApply }: JobCardProps) => {
  const navigate = useNavigate();
  
  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking apply button
    if (onApply) {
      onApply(job._id);
    }
  };

  const handleCardClick = () => {
    navigate(`/jobs/${job._id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group
        ${viewMode === 'list' ? 'flex items-center space-x-6' : ''}
      `}
    >
      {/* Company Logo Placeholder */}
      <div className={`
        ${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}
      `}>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          {job.company.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* Job Details */}
      <div className="flex-1 min-w-0">
        <div className={`
          ${viewMode === 'list' ? 'flex items-center justify-between' : ''}
        `}>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
              {job.title}
            </h3>
            <p className="text-blue-600 font-medium mb-2 hover:text-blue-700 transition-colors">
              {job.company}
            </p>
            <div className="flex items-center text-gray-600 mb-3">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{job.location}</span>
            </div>
            
            {/* Description */}
            <p className={`
              text-gray-700 text-sm leading-relaxed
              ${viewMode === 'grid' ? 'line-clamp-3' : 'line-clamp-2'}
            `}>
              {job.discription}
            </p>
            
            {/* Job Meta Info - Only show in grid mode */}
            {viewMode === 'grid' && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Posted 2 days ago</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Apply Button - Positioned differently for list/grid */}
          <div className={`
            ${viewMode === 'list' 
              ? 'flex-shrink-0 ml-6' 
              : 'mt-4 flex justify-end'
            }
          `}>
            <button
              onClick={handleApplyClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium group-hover:shadow-md"
            >
              View Details
            </button>
          </div>
        </div>

        {/* List mode meta info */}
        {viewMode === 'list' && (
          <div className="mt-3 flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Posted 2 days ago</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Full-time</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>$80k - $120k</span>
            </div>
          </div>
        )}
      </div>

      {/* Bookmark Icon */}
      <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
  );
};

export default JobCard;