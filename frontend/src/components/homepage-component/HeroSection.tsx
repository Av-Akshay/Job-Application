import useGetJobs from "../../hooks/useGetJobs";
import AutocompleteInput from "../AutocompleteInput";
import { WavyBackground } from "./WavyBackground";
import { jobTitles, indianCitiesAndStates } from "../../data/suggestions";





const HeroSection = () => {
  const { register, handleSubmit, submitform, setValue } = useGetJobs();

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Find Your Dream Job Today
      </h1>
      <p className="text-xl md:text-xl mt-4 text-white font-normal inter-var text-center">
        Discover thousands of job opportunities with top companies.
      </p>
      
      <form onSubmit={handleSubmit(submitform)} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <AutocompleteInput 
          {...register("searchTitle")}
          suggestions={jobTitles}
          type="text" 
          placeholder="Job title" 
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-sm"
          containerClassName="flex-1"
          onSuggestionSelect={(value) => setValue("searchTitle", value)}
        />
        <AutocompleteInput 
          {...register("location")}
          suggestions={indianCitiesAndStates}
          type="text" 
          placeholder="City or State" 
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-sm"
          containerClassName="flex-1"
          onSuggestionSelect={(value) => setValue("location", value)}
        />
        <button 
          type="submit"
          className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Search Jobs
        </button>
      </form>
      
      <div className="mt-8 flex items-center justify-center gap-8 text-white/80">
        <div className="text-center">
          <p className="text-2xl font-bold">10,000+</p>
          <p className="text-sm">Active Jobs</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">5,000+</p>
          <p className="text-sm">Companies</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">50,000+</p>
          <p className="text-sm">Job Seekers</p>
        </div>
      </div>
    </WavyBackground>
  );
}

export default HeroSection