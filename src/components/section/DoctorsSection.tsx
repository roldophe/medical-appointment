import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../common/SectionTitle";
import Toolbar from "../../common/Toolbar";
import Grid from "../../common/grid/Grid";
import ButtonMain from "../../common/ButtonMain";
import Filters from "../../common/Filters";

const DoctorsSection: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionTitle
        title="Our great doctors"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tibi hoc incredibile, quod beatissimum."
        miniTitle="Healthcare Professionals"
        className="mx-auto text-center"
      />
      <Toolbar />
      <div className="py-10">
        
        <div className="grid grid-cols-12 md:gap-12 pb-20">
          <div className="hidden lg:block col-span-12 lg:col-span-3">
            <Filters />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Grid />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <ButtonMain to="#" className="w-64 h-14 max-w-full">
            View All Doctors <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
