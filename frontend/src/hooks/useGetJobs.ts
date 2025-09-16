import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";

// Define the form data type
interface JobSearchFormData {
  searchTitle?: string;
  location?: string;
}

// Define the job result type
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  postedDate: string;
}

const useGetJobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues
  } = useForm<JobSearchFormData>({
    defaultValues: {
      searchTitle: "",
      location: "",
    }
  });

  const submitform: SubmitHandler<JobSearchFormData> = async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Build query parameters
      const queryParams = new URLSearchParams();
      if (data.searchTitle) queryParams.append("title", data.searchTitle);
      if (data.location) queryParams.append("location", data.location);

      // TODO: Replace with actual API endpoint
      // const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/jobs?${queryParams.toString()}`;
      
      console.log("Searching jobs with params:", data);
      
      // Simulated API call - replace with actual fetch
      // const response = await fetch(apiUrl);
      // if (!response.ok) throw new Error("Failed to fetch jobs");
      // const jobsData = await response.json();
      // setJobs(jobsData);

      // Mock data for demonstration
      const mockJobs: Job[] = [
        {
          id: "1",
          title: data.searchTitle || "Software Engineer",
          company: "TechCorp",
          location: data.location || "San Francisco, CA",
          type: "Full-time",
          salary: "$120k - $180k",
          description: "Looking for experienced software engineers...",
          postedDate: "2024-01-15"
        }
      ];
      
      setJobs(mockJobs);
      console.log("Jobs found:", mockJobs.length);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while fetching jobs");
      console.error("Error fetching jobs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    reset();
    setJobs([]);
    setError(null);
  };

  return {
    // Form methods
    handleSubmit,
    register,
    errors,
    watch,
    setValue,
    getValues,
    reset,
    
    // Custom methods
    submitform,
    clearSearch,
    
    // State
    isLoading,
    jobs,
    error
  };
};

export default useGetJobs;
