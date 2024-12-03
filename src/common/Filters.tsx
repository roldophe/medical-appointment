import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="px-2">
      {/* Availability Filter */}
      <div className="pb-10 border-b border-muted-200 dark:border-muted-800">
        <h3 className="font-sans font-light text-lg mb-6 text-muted-800 dark:text-muted-100">
          Availability
        </h3>
        <div className="relative max-w-[210px]">
          <select
            title="select"
            className="appearance-none px-3 py-2 h-10 text-sm leading-5 font-sans w-full border border-muted-300 bg-white text-muted-600 placeholder-muted-300 focus-visible:border-muted-300 focus-visible:shadow-lg dark:placeholder-muted-600 dark:bg-muted-700 dark:text-muted-200 dark:border-muted-600 dark:focus-visible:border-muted-600 focus-visible:ring-0 outline-transparent focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-muted-300 dark:focus-visible:outline-muted-600 focus-visible:outline-offset-2 transition-all duration-300"
          >
            <option>24/24</option>
            <option>Day only</option>
            <option>Night only</option>
          </select>
          <div className="absolute top-0 right-0 h-10 w-10 flex justify-center items-center text-muted-400 transition-transform duration-300 group-focus-within:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

        </div>
      </div>

      {/* Location Filter */}
      <div className="pt-6 pb-10 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-sans font-light text-lg mb-6 text-gray-800 dark:text-gray-100">
          Location
        </h3>
        <div className="space-y-4">
          {["All locations", "Same town", "Same country", "Other countries"].map(
            (label, index) => (
              <div key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  id={`location-${index}`}
                  name="location"
                  className="form-radio text-blue-600 dark:text-blue-400"
                  defaultChecked={index === 0}
                />
                <label
                  htmlFor={`location-${index}`}
                  className="text-sm font-normal text-gray-800 dark:text-gray-200"
                >
                  {label}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Consultation Type */}
      <div className="pt-6 pb-10 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-sans font-light text-lg mb-6 text-gray-800 dark:text-gray-100">
          Consultation Type
        </h3>
        <div className="space-y-4">
          {["Video call", "Audio call"].map((label, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                id={`type-${index}`}
                name="type"
                className="form-radio text-blue-600 dark:text-blue-400"
                defaultChecked={index === 0}
              />
              <label
                htmlFor={`type-${index}`}
                className="text-sm font-normal text-gray-800 dark:text-gray-200"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="pt-6 pb-10 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-sans font-light text-lg mb-6 text-gray-800 dark:text-gray-100">
          Experience
        </h3>
        <div className="space-y-4">
          {["5+ years", "10+ years", "15+ years"].map((label, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                id={`experience-${index}`}
                name="experience"
                className="form-radio text-blue-600 dark:text-blue-400"
                defaultChecked={index === 0}
              />
              <label
                htmlFor={`experience-${index}`}
                className="text-sm font-normal text-gray-800 dark:text-gray-200"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
