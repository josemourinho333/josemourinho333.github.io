import React from 'react';
import Header from './Header';
import MainCategoryList from './MainCategoryList';
import PresetActions from './PresetActions';
import Notes from './Notes';
import ProjectsPreview from './ProjectsPreview';
import SkillsPreview from './SkillsPreview';
import EducationModal from './EducationModal';
import WorkModal from './WorkModal';

const NavModal = () => {
  
  return (
    <>
      <input type="checkbox" id="nav-modal" className="modal-toggle" />
      <div className="modal modal-bottom lg:hidden">
        <div className="modal-box relative bg-gray-50 flex flex-col h-[90vh]">
          <label htmlFor="nav-modal" className="cursor-pointer self-end font-semibold text-[#147efb]">
            Done
          </label>
          <Header />
          <MainCategoryList />
          <PresetActions/>
          <Notes />
          <ProjectsPreview />
          <SkillsPreview />
          <EducationModal />
          <WorkModal />
        </div>
      </div>
    </>
  )
}

export default NavModal;