import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'; // Import star icons
import Card from '../../components/base/Card';


interface Doctor {
  name: string;
  specialization: string;
  imgSrc: string;
  rating: string;
  ratingScore: string; // ratingScore as a string, e.g., '4.8'
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Melissa Thorman',
    specialization: 'Cardiologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-1.svg',
    rating: '4.5/5',
    ratingScore: '4.5',
  },
  {
    name: 'Dr. Aaron Zimmerman',
    specialization: 'Gynaecologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-2.svg',
    rating: '4.4/5',
    ratingScore: '4.4',
  },
  {
    name: 'Dr. Michael Harris',
    specialization: 'Neurologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-3.svg',
    rating: '5/5',
    ratingScore: '5',
  },
  {
    name: 'Dr. Emma Williams',
    specialization: 'Dermatologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-4.svg',
    rating: '3.8/5',
    ratingScore: '3.8',
  },
  {
    name: 'Dr. James Black',
    specialization: 'Orthopedic',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-5.svg',
    rating: '4.0/5',
    ratingScore: '4.0',
  },
  {
    name: 'Dr. Olivia Green',
    specialization: 'Pediatrician',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-6.svg',
    rating: '3.5/5',
    ratingScore: '3.5',
  },
  {
    name: 'Dr. Samuel White',
    specialization: 'Psychiatrist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-7.svg',
    rating: '4.7/5',
    ratingScore: '4.7',
  },
  {
    name: 'Dr. Charlotte Brown',
    specialization: 'Gynecologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-8.svg',
    rating: '3.0/5',
    ratingScore: '3.0',
  },
  {
    name: 'Dr. Lucas Blue',
    specialization: 'Urologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-9.svg',
    rating: '4.2/5',
    ratingScore: '4.2',
  },
  {
    name: 'Dr. Sophia Grey',
    specialization: 'Radiologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-10.svg',
    rating: '4.5/5',
    ratingScore: '4.5',
  },
  {
    name: 'Dr. Jack Red',
    specialization: 'Oncologist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-11.svg',
    rating: '2.8/5',
    ratingScore: '2.8',
  },
  {
    name: 'Dr. Isabel Pink',
    specialization: 'ENT Specialist',
    imgSrc: 'src/assets/images/illustrations/doctors/doctor-12.svg',
    rating: '4.6/5',
    ratingScore: '4.6',
  },
];

const Grid: React.FC = () => (
  <div className="grid md:grid-cols-3 ltablet:grid-cols-3 lg:grid-cols-3 gap-x-6 ptablet:gap-x-4 gap-y-16 pt-10 dark:bg-gray-900">
    {doctors.map((doctor, index) => (
      <Card key={index} className="p-4 bg-white dark:bg-gray-800">
        <div className="relative w-full h-40 rounded-lg bg-muted-200 dark:bg-gray-700">
          <img
            className="absolute bottom-0 inset-x-0 mx-auto w-full max-w-[170px] sm:max-w-[150px]"
            src={doctor.imgSrc}
            alt="Doctor"
          />
        </div>
        <div className="font-sans mt-3">
          <h4 className="font-semibold text-muted-800 dark:text-gray-200">{doctor.name}</h4>
          <p className="text-sm text-muted-400 dark:text-gray-400">{doctor.specialization}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm ptablet:text-xs text-muted-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo illi intellegunt quid
          </p>
        </div>
        <div className="flex items-center justify-between font-sans mt-3">
          <div className="flex items-center gap-2">
            <button
              title="Book appointment"
              className="h-8 w-8 rounded-full text-muted-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-muted-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="w-4 h-4" />
            </button>
            <button
              title="Send message"
              className="h-8 w-8 rounded-full text-muted-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-muted-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4" />
            </button>
            <button
              title="View profile"
              className="h-8 w-8 rounded-full text-muted-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-muted-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-end gap-2">
            <div className="flex items-center gap-1">
              {Number(doctor.ratingScore) < 2.5 ? (
                <FontAwesomeIcon
                  className="w-4 h-4 text-yellow-400 dark:text-yellow-300"
                  icon={faStarHalf}
                />
              ) : (
                <FontAwesomeIcon
                  className="w-4 h-4 text-yellow-400 dark:text-yellow-300"
                  icon={faStar}
                />
              )}
            </div>
            <span className="font-semibold text-xs text-muted-500 dark:text-gray-400">{doctor.rating}</span>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export default Grid;
