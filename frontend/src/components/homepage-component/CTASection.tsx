import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who've found their perfect career match. 
            Whether you're looking for your next opportunity or seeking top talent, we're here to help.
          </p>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/jobs"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Start Job Search
              </span>
            </Link>
            
            <Link
              to="/post-job"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Post a Job
              </span>
            </Link>
          </div>
          
          {/* Statistics/Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H9V9H21ZM12 8C14.67 8 16.87 9.33 18 11.3V21C18 21.6 17.6 22 17 22H7C6.4 22 6 21.6 6 21V11.3C7.13 9.33 9.33 8 12 8Z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-blue-200 font-medium">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18ZM18 12H6V10H18V12Z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1,200+</div>
              <div className="text-blue-200 font-medium">Jobs Posted Today</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">&lt; 2 hrs</div>
              <div className="text-blue-200 font-medium">Average Response Time</div>
            </div>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="mt-12 pt-8 border-t border-blue-400 border-opacity-30">
            <p className="text-blue-100 text-sm mb-4">Trusted by professionals at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              {/* Company logos placeholder - you can replace these with actual company names/logos */}
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold">Google</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold">Microsoft</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold">Apple</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold">Netflix</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold">Tesla</span>
              </div>
            </div>
          </div>
          
          {/* Final encouragement */}
          <div className="mt-8">
            <p className="text-blue-100 text-lg">
              Your perfect opportunity is just one click away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;