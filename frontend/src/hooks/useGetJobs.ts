import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchData, clearSearch as clearSearchAction } from "../store/slice";
import type { RootState } from "../store/store";

// Define the form data type
interface JobSearchFormData {
  searchTitle?: string;
  location?: string;
}

// Define the job result type (currently unused but kept for future API integration)
// interface Job {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   type: string;
//   salary?: string;
//   description: string;
//   postedDate: string;
// }

const useGetJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchTitle, location, jobs } = useSelector((state: RootState) => state.jobs);
  
  // const [isLoading, setIsLoading] = useState(false); // Currently unused but kept for future API integration
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
      searchTitle: searchTitle || "",
      location: location || "",
    }
  });

  const submitform: SubmitHandler<JobSearchFormData> = async (data) => {
    dispatch(setSearchData({
      searchTitle: data.searchTitle || "",
      location: data.location || ""
    }));
    
    // Navigate to jobs page
    navigate('/jobs');
  };

  const clearSearch = () => {
    reset();
    dispatch(clearSearchAction());
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
    // isLoading, // Currently unused
    jobs,
    error
  };
};

export default useGetJobs;
