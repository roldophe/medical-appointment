import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCheck } from "@fortawesome/free-solid-svg-icons";

const FilterSearch: React.FC = () => (
  <div className="relative">
    <input
      type="text"
      className="w-full px-4 py-2 text-sm border border-muted-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
      placeholder="Search specialities"
    />
    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-400">
      <FontAwesomeIcon icon={faSearch} />
    </span>
  </div>
);

const FilterOptions: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {["All Specialities", "In-network", "Out-of-network", "Nearby"].map((filter, index) => (
      <button
        key={index}
        type="button"
        className="text-sm py-2 px-4 rounded border border-muted-300 text-muted-400 bg-white hover:bg-primary-500 hover:text-white transition"
      >
        {filter}
      </button>
    ))}
  </div>
);

const SpecialitiesSection: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {[
      ["General medicine", "Pediatrics"],
      ["Cardiology", "Orthopedics"],
    ].map((column, colIndex) => (
      <div key={colIndex} className="space-y-4">
        {column.map((speciality, index) => (
          <div key={index} className="relative flex items-center">
            <div className="group relative overflow-hidden text-primary-500 w-5 h-5 rounded flex flex-shrink-0 justify-center items-center mr-2 outline-1 cursor-pointer transition-all duration-300">
              <input
                id={`checkbox-speciality-${colIndex}-${index}`}
                type="checkbox"
                className="peer cursor-pointer opacity-0 absolute h-5 w-5 z-20"
              />
              <div className="absolute top-0 left-0 h-full w-full rounded bg-white border-2 border-muted-400 z-0 peer-checked:border-primary-500"></div>
              <FontAwesomeIcon
                className="absolute top-0 left-0 opacity-0 w-2.5 h-2.5 text-lg pointer-events-none transition duration-300 translate-y-6 peer-checked:opacity-100 peer-checked:translate-y-0 z-10"
                icon={faCheck}
              />
            </div>
            <label
              htmlFor={`checkbox-speciality-${colIndex}-${index}`}
              className="cursor-pointer select-none text-muted-400 font-sans text-sm"
            >
              {speciality}
            </label>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const NavbarSearchFiltersTwo: React.FC = () => {

  const handleClearAll = () => {
    // Optionally, reset any filters here
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <p className="font-sans text-sm text-muted-400">Filter by</p>
        <button
          type="button"
          onClick={handleClearAll}
          className="font-sans text-sm text-medium text-primary-500"
        >
          Clear All
        </button>
      </div>

      <FilterSearch />
      <FilterOptions />
      <SpecialitiesSection />
    </div>
  );
};

export default NavbarSearchFiltersTwo;
