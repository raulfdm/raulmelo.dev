import React from 'react';
import { graphql } from 'gatsby';
import 'sanitize.css/sanitize.css';
import { ArrowheadUp } from '@styled-icons/evaicons-solid/ArrowheadUp';

import SEO from '@components/SEO';
import { titleWithNameAndJobTitle } from '@utils/seo';
import { useScrollToTop } from '@hooks/useScrollToTop';
import {
  Info,
  CareerSummary,
  CareerExperience,
  TechnicalSkills,
  Interests,
  Education,
  SideProjects,
} from '@screens/CV/components';
import {
  StrapiPersonalInformation,
  StrapiSocial,
  StrapiCv,
} from '@app-types/graphql';
import { theme, GlobalCVStyles, StyledThemeProvider } from '@screens/CV/styled';
import { CVMain, HomeLink, ScrollToTopButton } from '@screens/CV/components/UI';

type CvPageProps = {
  data: {
    personal: StrapiPersonalInformation;
    social: StrapiSocial;
    cv: StrapiCv;
  };
};

const CvPage: React.FC<CvPageProps> = ({ data: { personal, social, cv } }) => {
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
          <Info
            full_name={personal.full_name}
            phone={personal.phone}
            city={personal.city}
            country={personal.country}
            email={personal.email}
            linkedIn={social.linkedIn}
            github={social.github}
          />
          <CareerSummary summary={cv.summary} />
          <TechnicalSkills technical_skills={cv.technical_skills} />
          <CareerExperience jobs={cv.jobs} />
          <SideProjects side_projects={cv.side_projects} />
          <Education education={cv.education} />
          <Interests interests={cv.interests} />
        </StyledThemeProvider>
        <ScrollToTopButton onClick={moveToTop}>
          <ArrowheadUp size={21} />
        </ScrollToTopButton>
      </CVMain>
    </>
  );
};

export const pageQuery = graphql`
  query CVData {
    personal: strapiPersonalInformation {
      phone
      email
      city
      country
      full_name
    }
    social: strapiSocial {
      github {
        url
        display_name
      }
      linkedIn {
        url
        display_name
      }
    }
    cv: strapiCv {
      summary
      jobs {
        id
        role
        description
        company
        start_date
        end_date
        is_actual
      }
      technical_skills {
        id
        name
        technologies {
          id
          name
        }
      }
      education {
        formal {
          id
          foundation
          start_date
          end_date
          is_actual
          title
        }
        languages {
          id
          name
          proficiency
        }
      }
      interests {
        name
        id
      }
      side_projects {
        id
        name
        description
        start_date
        end_date
        is_ongoing
        is_visible
      }
    }
  }
`;

export default CvPage;
