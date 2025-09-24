interface JobCardSkeletonProps {
  viewMode: 'grid' | 'list';
}

const JobCardSkeleton = ({ viewMode }: JobCardSkeletonProps) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse
        ${viewMode === 'list' ? 'flex items-center space-x-6' : ''}
      `}
    >
      {/* Company Logo Placeholder */}
      <div className={`
        ${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}
      `}>
        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        <div className={`
          ${viewMode === 'list' ? 'flex items-center justify-between' : ''}
        `}>
          <div className="flex-1 space-y-3">
            {/* Job Title */}
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            
            {/* Company */}
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            
            {/* Location */}
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              {viewMode === 'grid' && <div className="h-4 bg-gray-200 rounded w-4/6"></div>}
            </div>
          </div>

          {/* Apply Button */}
          <div className={`
            ${viewMode === 'list' 
              ? 'flex-shrink-0 ml-6' 
              : 'mt-4 flex justify-end'
            }
          `}>
            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* List mode meta info */}
        {viewMode === 'list' && (
          <div className="mt-3 flex items-center space-x-6">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        )}
      </div>
    </div>
  );
};

// Loading Grid Component
interface JobsLoadingProps {
  viewMode: 'grid' | 'list';
  count?: number;
}

export const JobsLoading = ({ viewMode, count = 9 }: JobsLoadingProps) => {
  return (
    <div className={`
      ${viewMode === 'grid' 
        ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
        : 'space-y-4'
      }
    `}>
      {Array.from({ length: count }).map((_, index) => (
        <JobCardSkeleton key={index} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default JobCardSkeleton;