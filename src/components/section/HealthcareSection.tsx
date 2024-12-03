import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFirstAid, faHeartbeat, faVideo, faPhone, faCalendar, faPills } from '@fortawesome/free-solid-svg-icons';

const HealthcareSection: React.FC = () => {
  return (
    <section >
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full max-w-xl mb-14">
          <h4 className="font-sans font-semibold text-xs tracking-widest uppercase mb-3 text-primary-500">On-Demand Healthcare</h4>
          <h2 className="font-sans text-4xl font-medium mb-4 text-muted-800 dark:text-muted-100">Forget about the hassle</h2>
          <p className="text-lg text-muted-500 dark:text-muted-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
          </p>
        </div>
        <div className="grid md:grid-cols-3 ltablet:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-12">
          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faClock} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Save time &amp; effort</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-rose-500" icon={faFirstAid} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Curated professionals</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faFirstAid} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">24/24 Emergencies</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-rose-500" icon={faHeartbeat} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Connected services</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faVideo} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Video consultations</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faPhone} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Audio consultations</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faCalendar} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Appointments</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>

          {/* Item */}
          <div>
            <div className="font-sans">
              <FontAwesomeIcon className="w-7 h-7 text-3xl mb-2 text-primary-600" icon={faPills} />
              <h4 className="font-light text-lg mb-2 text-muted-800 dark:text-muted-100">Medicine</h4>
              <p className="text-sm text-muted-500 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
