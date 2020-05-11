import { info } from './info';
import { careerSummary } from './careerSummary';
import { interests } from './interests';
import { education } from './education';
import { sideProjects } from './sideProjects';
import { technicalSkills } from './technicalSkills';
import { careerExperience } from './careerExperience';

export const FormConfig = {
  label: 'CV Data',
  fields: [
    info,
    careerSummary,
    technicalSkills,
    careerExperience,
    sideProjects,
    education,
    interests,
  ],
};
