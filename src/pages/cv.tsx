import React from 'react';
import { graphql } from 'gatsby';
import 'sanitize.css/sanitize.css';
import { ArrowheadUp } from '@styled-icons/evaicons-solid/ArrowheadUp';

import SEO from '@components/SEO';
import { titleWithNameAndJobTitle } from 'utils/seo';
import { useScrollToTop } from 'hooks/useScrollToTop';
import {
  Info,
  CareerSummary,
  CareerExperience,
  TechnicalSkills,
  Interests,
  Education,
  SideProjects,
} from '@screens/CV/components';
import { CvJson } from '@app-types/graphql';
import { theme, GlobalCVStyles, StyledThemeProvider } from '@screens/CV/styled';
import { CVMain, HomeLink, ScrollToTopButton } from '@screens/CV/components/UI';

type CvPageProps = {
  data: {
    cvJson: CvJson;
  };
};

const CvPage: React.FC<CvPageProps> = ({ data: { cvJson } }) => {
  const { moveToTop } = useScrollToTop();

  return (
    <>
      <GlobalCVStyles />
      <SEO
        title={titleWithNameAndJobTitle('Curriculum')}
        description="Raul Melo is a Software Developer focused on client-side. Have over 5 years of experience building websites and applications. Check my CV for more info."
        url="/cv"
        lang="en"
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </SEO>
      <HomeLink to="/">Back to home</HomeLink>
      <CVMain>
        <StyledThemeProvider theme={theme as any}>
          <Info data={cvJson.info!} />
          <CareerSummary data={cvJson.career_summary!} />
          <TechnicalSkills data={cvJson.technical_skills!} />
          <CareerExperience data={cvJson.career_history!} />
          <SideProjects data={cvJson.side_projects!} />
          <Education data={cvJson.education!} />
          <Interests data={cvJson.interests!} />
        </StyledThemeProvider>
        <ScrollToTopButton onClick={moveToTop}>
          <ArrowheadUp size={21} />
        </ScrollToTopButton>
      </CVMain>
    </>
  );
};

export const pageQuery = graphql`
  query DataQuery {
    cvJson {
      info {
        name
        phone
        city
        email
        linkedIn
        github
      }
      side_projects {
        section_title
        projects {
          id
          name
          start_date
          end_date
          description
          is_ongoing
          show
        }
      }
      career_summary {
        section_title
        description
      }
      technical_skills {
        section_title
        skills {
          id
          technologies {
            id
            name
          }
          group_name
        }
      }
      education {
        section_title
        formal {
          id
          foundation
          start_date
          end_date
          title
        }
        languages {
          id
          name
          proficiency
        }
        extra_courses {
          section_title
          platforms {
            id
            name
            courses {
              id
              name
              hours
            }
          }
        }
      }
      career_history {
        section_title
        jobs {
          id
          role
          description
          company
          end_date
          is_actual
          start_date
        }
      }
      interests {
        section_title
        values {
          id
          name
        }
      }
    }
  }
`;

export default CvPage;
