import { createSlice } from "@reduxjs/toolkit";

interface Job {
    _id:string,
    title:string,
    discription:string,
    userId:string,
    company:string,
    location:string
}

interface jobstates {
    jobs: Array<Job>;
    searchTitle: string;
    location: string;
}

// Dummy jobs data for demonstration
const dummyJobs: Job[] = [
  {
    _id: "1",
    title: "Senior Frontend Developer",
    discription: "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building user-friendly web applications using React, TypeScript, and modern CSS frameworks. Experience with responsive design and performance optimization is essential.",
    userId: "user1",
    company: "TechCorp Solutions",
    location: "Bangalore, Karnataka"
  },
  {
    _id: "2",
    title: "Full Stack Developer",
    discription: "Join our startup as a Full Stack Developer! You'll work on exciting projects using Node.js, React, and MongoDB. We offer flexible working hours, competitive salary, and equity options. Perfect for someone who loves both frontend and backend development.",
    userId: "user2",
    company: "InnovateLab",
    location: "Mumbai, Maharashtra"
  },
  {
    _id: "3",
    title: "Python Developer",
    discription: "Looking for a Python Developer with expertise in Django/Flask frameworks. You'll be working on data-driven applications, API development, and system integration. Experience with PostgreSQL and Docker is a plus.",
    userId: "user3",
    company: "DataSystems Inc",
    location: "Hyderabad, Telangana"
  },
  {
    _id: "4",
    title: "UI/UX Designer",
    discription: "Creative UI/UX Designer wanted to design intuitive and beautiful user interfaces. Proficiency in Figma, Adobe XD, and understanding of user research methodologies required. You'll collaborate closely with development teams.",
    userId: "user4",
    company: "DesignStudio Pro",
    location: "Pune, Maharashtra"
  },
  {
    _id: "5",
    title: "DevOps Engineer",
    discription: "We need a DevOps Engineer to manage our cloud infrastructure on AWS. Experience with Kubernetes, Docker, CI/CD pipelines, and monitoring tools like Prometheus is required. You'll ensure high availability and scalability of our services.",
    userId: "user5",
    company: "CloudTech Systems",
    location: "Delhi, NCR"
  },
  {
    _id: "6",
    title: "Mobile App Developer",
    discription: "React Native developer needed to build cross-platform mobile applications. Experience with iOS and Android deployment, push notifications, and mobile-specific UI/UX patterns required. Join our mobile-first company!",
    userId: "user6",
    company: "MobileTech Solutions",
    location: "Chennai, Tamil Nadu"
  },
  {
    _id: "7",
    title: "Data Scientist",
    discription: "Data Scientist position open for someone with strong Python, R, and machine learning skills. You'll work on predictive analytics, data modeling, and business intelligence projects. PhD in related field preferred.",
    userId: "user7",
    company: "Analytics Pro",
    location: "Bangalore, Karnataka"
  },
  {
    _id: "8",
    title: "Backend Developer",
    discription: "Backend Developer role focusing on microservices architecture using Java/Spring Boot. Experience with Redis, RabbitMQ, and database optimization required. You'll build scalable APIs for our e-commerce platform.",
    userId: "user8",
    company: "E-Commerce Giants",
    location: "Gurgaon, Haryana"
  },
  {
    _id: "9",
    title: "Product Manager",
    discription: "Product Manager wanted to lead our B2B SaaS product development. Strong analytical skills, customer focus, and experience with agile methodologies required. You'll work with engineering and design teams to deliver amazing products.",
    userId: "user9",
    company: "SaaS Innovations",
    location: "Mumbai, Maharashtra"
  }
];

const initialState:jobstates = {
  jobs: dummyJobs,
  searchTitle: "",
  location: "",
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchTitle = action.payload.searchTitle || "";
      state.location = action.payload.location || "";
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    clearSearch: (state) => {
      state.searchTitle = "";
      state.location = "";
      state.jobs = [];
    },
  },
});

export const { setSearchData, setJobs, clearSearch } = jobSlice.actions;
export default jobSlice.reducer;
