import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faCalendarCheck, faMapPin, faVideo, faAward, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchFiltersOne from "./NavbarSearchFiltersOne";
import NavbarSearchFiltersTwo from "./NavbarSearchFiltersTwo";
import NavbarSearchFiltersFour from "./NavbarSearchFiltersFour";
import NavbarSearchFiltersThree from "./NavbarSearchFiltersThree";
import NavbarSearchFiltersFive from "./NavbarSearchFiltersFive";

const NavbarSearchFilters: React.FC = () => {
  const [activeFilterTab, setActiveFilterTab] = useState<string>("tab-1");

  const filterTabs = [
    { id: "tab-1", label: "Speciality", icon: faStethoscope },
    { id: "tab-2", label: "Availability", icon: faCalendarCheck },
    { id: "tab-3", label: "Location", icon: faMapPin },
    { id: "tab-4", label: "Consultation", icon: faVideo },
    { id: "tab-5", label: "Experience", icon: faAward },
  ];

  const renderFilterContent = () => {
    switch (activeFilterTab) {
      case "tab-1":
        return <NavbarSearchFiltersOne />;
      case 'tab-2':
        return <NavbarSearchFiltersTwo />
      case 'tab-3':
        return <NavbarSearchFiltersThree />;
      case 'tab-4':
        return <NavbarSearchFiltersFour />;
      case 'tab-5':
        return <NavbarSearchFiltersFive />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-11 left-0 w-[660px] ptablet:w-[580px] grid grid-cols-12 bg-white dark:bg-muted-1000 rounded-lg overflow-hidden border border-muted-200 dark:border-muted-800 shadow-xl shadow-muted-400/20 dark:shadow-muted-800/20 z-10 tw-accessibility">
      <div className="col-span-4 p-6 space-y-2 bg-muted-50 dark:bg-muted-900">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur ${
              activeFilterTab === tab.id
                ? "text-primary-500 border-primary-500 bg-primary-500/10"
                : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
            }`}
            onClick={() => setActiveFilterTab(tab.id)}
          >
            <FontAwesomeIcon
              className="w-4 h-4 text-lg"
              icon={tab.icon}
            />
            <span>{tab.label}</span>
            <FontAwesomeIcon
              className="w-4 h-4 ml-auto text-lg"
              icon={faChevronRight}
            />
          </button>
        ))}
      </div>

      <div className="col-span-8 min-h-[310px] p-6">{renderFilterContent()}</div>
    </div>
  );
};

export default NavbarSearchFilters;
