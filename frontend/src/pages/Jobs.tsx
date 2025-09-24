import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import JobCard from "../components/JobCard";
import FilterSidebar from "../components/FilterSidebar";
import { JobsLoading } from "../components/JobCardSkeleton";
import EmptyState from "../components/EmptyState";

const Jobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading] = useState(false); // Currently hardcoded, will be connected to API later
  const { jobs, searchTitle, location } = useSelector((state: RootState) => state.jobs);

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleApply = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // TODO: Implement apply functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Job Opportunities
              </h1>
              <p className="mt-2 text-gray-600">
                {searchTitle || location ? (
                  <>
                    Showing results for{" "}
                    {searchTitle && <span className="font-medium">"{searchTitle}"</span>}
                    {searchTitle && location && " in "}
                    {location && <span className="font-medium">{location}</span>}
                  </>
                ) : (
                  "Discover your next career opportunity"
                )}
              </p>
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={toggleFilters}
              className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 lg:hidden"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <FilterSidebar />
            </div>
          </div>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleFilters}></div>
              <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={toggleFilters}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar isMobile={true} onClose={toggleFilters} />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-sm text-gray-700 mb-2 sm:mb-0">
                Showing <span className="font-medium">{jobs.length}</span> results
              </p>
              
              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Most Recent</option>
                  <option>Most Relevant</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
            </div>

            {/* Job Listings */}
            {isLoading ? (
              <JobsLoading viewMode={viewMode} />
            ) : (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-4'
                }
              `}>
                {jobs.length > 0 ? (
                  jobs.map((job) => (
                    <div key={job._id} className="relative">
                      <JobCard
                        job={job}
                        viewMode={viewMode}
                        onApply={handleApply}
                      />
                    </div>
                  ))
                ) : (
                  <EmptyState 
                    title="No jobs found"
                    description={
                      searchTitle || location 
                        ? `No jobs found for "${searchTitle}" ${location ? `in ${location}` : ''}. Try adjusting your search criteria.`
                        : "No jobs available at the moment. Check back later for new opportunities."
                    }
                    actionText="Clear Filters"
                    onAction={() => {
                      // TODO: Implement clear filters functionality
                      console.log('Clear filters');
                    }}
                  />
                )}
              </div>
            )}

            {/* Pagination - Placeholder */}
            {jobs.length > 0 && (
              <div className="mt-8 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Previous
                  </button>
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">1</span>
                  <span className="px-3 py-2 text-sm text-gray-600">2</span>
                  <span className="px-3 py-2 text-sm text-gray-600">3</span>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;