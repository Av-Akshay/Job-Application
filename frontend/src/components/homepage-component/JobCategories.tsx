import Button from "../../lib/Button";

interface job {
  userId: string;
  title: string;
  discription: string;
  company: string;
  location: string;
  link: string;
}

const jobs: Array<job> = [
  {
    userId: "user1",
    title: "Web Development",
    discription:
      "We need web developer who have 2-3 year of experience and having good communication skills.",
    company: "cynoteck",
    location: "Dehradun",
    link:"/job/mern"
  },
  {
    userId: "user2",
    title: "App Developer",
    discription:
      "We neeed a MEAN Stack developer who have 1-2 year of experience and having good communication skills.",
    company: "coders",
    location: "Dehradun",
    link:"/job/mean"
  },
  {
    userId: "user2",
    title: "Devops Engenier",
    discription:
      "We neeed a MEAN Stack developer who have 1-2 year of experience and having good communication skills.",
    company: "coders",
    location: "Dehradun",
    link:"/job/mean"
  },
    {
    userId: "user2",
    title: "Marketing Head",
    discription:
      "We neeed a MEAN Stack developer who have 1-2 year of experience and having good communication skills.",
    company: "coders",
    location: "Dehradun",
    link:"/job/mean"
  },
];

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const JobCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Job Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover exciting opportunities across various domains. Find your perfect role and take your career to the next level.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          )}
        >
      {jobs.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card className="h-full">
            <JobIcon category={item.title} />
            <CardTitle>{item?.title}</CardTitle>
            <CardDescription>{item?.discription}</CardDescription>
            
            {/* Company and Location Info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="capitalize">{item.company}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{item.location}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Button link={item.link} text="View Jobs" className="w-full"/>
            </div>
          </Card>
        </motion.div>
      ))}
        </div>
      </div>
    </section>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full p-6 overflow-hidden border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 relative z-20 group",
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0  transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mt-4", className)}>
      {children}
    </h3>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-gray-600 leading-relaxed text-sm line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};

// Job Icon Component
const JobIcon = ({ category }: { category: string }) => {
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('web')) return '🌐';
    if (lowerTitle.includes('app')) return '📱';
    if (lowerTitle.includes('devops')) return '⚙️';
    if (lowerTitle.includes('marketing')) return '📈';
    return '💼';
  };

  const getColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('web')) return 'from-blue-500 to-blue-600';
    if (lowerTitle.includes('app')) return 'from-green-500 to-green-600';
    if (lowerTitle.includes('devops')) return 'from-purple-500 to-purple-600';
    if (lowerTitle.includes('marketing')) return 'from-pink-500 to-pink-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColor(category)} flex items-center justify-center text-white text-xl shadow-lg`}>
      {getIcon(category)}
    </div>
  );
};

