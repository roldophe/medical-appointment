import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstAid, faUser, faHeartbeat, faBrain, faBaby, faSyringe, faHands } from "@fortawesome/free-solid-svg-icons";

const Toolbar: React.FC = () => {
  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="sticky top-24 md:top-20 w-full flex bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded divide-x divide-muted-200 dark:divide-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 overflow-x-auto z-30">
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'all' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('all')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'all' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faFirstAid} className="w-6 h-6 text-2xl" />
        </span>
        <span>All</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'general' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('general')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'general' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-2xl" />
        </span>
        <span>General</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'cardiology' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('cardiology')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'cardiology' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faHeartbeat} className="w-6 h-6 text-2xl" />
        </span>
        <span>Cardiology</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'neurology' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('neurology')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'neurology' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faBrain} className="w-6 h-6 text-2xl" />
        </span>
        <span>Neurology</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'gynaecology' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('gynaecology')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'gynaecology' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faBaby} className="w-6 h-6 text-2xl" />
        </span>
        <span>Gynaecology</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'surgery' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('surgery')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'surgery' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faSyringe} className="w-6 h-6 text-2xl" />
        </span>
        <span>Surgery</span>
      </button>
      <button
        className={`group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300 ${activeCategory === 'dermatology' ? 'bg-muted-50 dark:bg-muted-700' : ''}`}
        onClick={() => setActiveCategory('dermatology')}
      >
        <span className={`flex items-center justify-center h-10 w-10 ${activeCategory === 'dermatology' ? 'text-rose-500' : 'text-muted-400 group-hover:text-primary-500'}`}>
          <FontAwesomeIcon icon={faHands} className="w-6 h-6 text-2xl" />
        </span>
        <span>Dermatology</span>
      </button>
    </div>
  );
};

export default Toolbar;
