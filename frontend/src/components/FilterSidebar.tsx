import { useState } from "react";
import AutocompleteInput from "./AutocompleteInput";
import { jobTitles, indianCitiesAndStates } from "../data/suggestions";

interface FilterSidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

interface FilterState {
  searchTitle: string;
  location: string;
  jobType: string[];
  salaryRange: string;
  experienceLevel: string[];
  company: string;
}

const FilterSidebar = ({ isMobile = false, onClose }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTitle: "",
    location: "",
    jobType: [],
    salaryRange: "",
    experienceLevel: [],
    company: "",
  });

  const handleFilterChange = (key: keyof FilterState, value: string | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key: 'jobType' | 'experienceLevel', value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      searchTitle: "",
      location: "",
      jobType: [],
      salaryRange: "",
      experienceLevel: [],
      company: "",
    });
  };

  const applyFilters = () => {
    console.log('Applying filters:', filters);
    // TODO: Implement filter application logic
    if (isMobile && onClose) {
      onClose();
    }
  };

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote"
  ];

  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Lead/Manager",
    "Director+"
  ];

  const salaryRanges = [
    "Under ₹5L",
    "₹5L - ₹10L",
    "₹10L - ₹20L",
    "₹20L - ₹30L",
    "₹30L - ₹50L",
    "Above ₹50L"
  ];

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Search & Location
        </h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <AutocompleteInput
              suggestions={jobTitles}
              value={filters.searchTitle}
              onChange={(e) => handleFilterChange('searchTitle', e.target.value)}
              placeholder="e.g. Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <AutocompleteInput
              suggestions={indianCitiesAndStates}
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              placeholder="e.g. Mumbai, Delhi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              value={filters.company}
              onChange={(e) => handleFilterChange('company', e.target.value)}
              placeholder="e.g. Google, Microsoft"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Job Type Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.jobType.includes(type)}
                onChange={() => handleCheckboxChange('jobType', type)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.experienceLevel.includes(level)}
                onChange={() => handleCheckboxChange('experienceLevel', level)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Salary Range</h3>
        <div className="space-y-2">
          {salaryRanges.map((range) => (
            <label key={range} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="salaryRange"
                value={range}
                checked={filters.salaryRange === range}
                onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter Actions */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <button
            onClick={applyFilters}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Apply Filters
          </button>
          <button
            onClick={clearAllFilters}
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      <div className="pt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Active Filters</h4>
        <div className="flex flex-wrap gap-2">
          {filters.searchTitle && (
            <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
              Title: {filters.searchTitle}
              <button
                onClick={() => handleFilterChange('searchTitle', '')}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.location && (
            <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
              Location: {filters.location}
              <button
                onClick={() => handleFilterChange('location', '')}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.jobType.map((type) => (
            <span key={type} className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
              {type}
              <button
                onClick={() => handleCheckboxChange('jobType', type)}
                className="ml-1 text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          ))}
          {filters.salaryRange && (
            <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-md">
              {filters.salaryRange}
              <button
                onClick={() => handleFilterChange('salaryRange', '')}
                className="ml-1 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.experienceLevel.map((level) => (
            <span key={level} className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-md">
              {level}
              <button
                onClick={() => handleCheckboxChange('experienceLevel', level)}
                className="ml-1 text-yellow-600 hover:text-yellow-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;