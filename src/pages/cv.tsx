import React from 'react';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import 'sanitize.css/sanitize.css';
import { ArrowheadUp } from '@styled-icons/evaicons-solid/ArrowheadUp';
import { polyfill as scrollPolyfill } from 'smoothscroll-polyfill';

import {
  Info,
  FormConfig,
  CareerSummary,
  CareerExperience,
  TechnicalSkills,
  Interests,
  Education,
  SideProjects,
} from 'components/CV';
import { JsonNode } from 'types';
import { DataJson } from 'graphql-types';
import { theme, GlobalCVStyles } from 'components/CV/styles';

if (typeof window !== `undefined`) {
  scrollPolyfill();
}

const CVMain = styled.main`
  max-width: 798px;
  width: 100%;
  padding: 0 14px;
  margin: 0 auto;
  position: relative;
  padding-top: 46px;

  @media screen and (min-width: 515px) {
    padding: 0 16px;
    padding-top: 26px;
  }
`;

const HomeLink = styled(Link)`
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 9;

  @media print {
    display: none;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  box-shadow: 2px 2px 7px -3px rgba(0, 0, 0, 0.6);
  border: none;
  background-color: #fff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

type CvPageProps = {
  data: {
    dataJson: JsonNode;
  };
};

const moveToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CvPage: React.FC<CvPageProps> = ({ data: apiData }) => {
  const [data]: [DataJson, unknown] = useLocalJsonForm(
    apiData.dataJson,
    FormConfig,
  );

  return (
    <>
      <HomeLink to="/">Back to home</HomeLink>
      <CVMain>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalCVStyles />

        <ThemeProvider theme={theme}>
          <Info data={data.info!} />
          <CareerSummary data={data.career_summary!} />
          <TechnicalSkills data={data.technical_skills!} />
          <CareerExperience data={data.career_history!} />
          <SideProjects data={data.side_projects!} />
          <Education data={data.education!} />
          <Interests data={data.interests!} />
        </ThemeProvider>
        <ScrollToTopButton onClick={moveToTop}>
          <ArrowheadUp size={21} />
        </ScrollToTopButton>
      </CVMain>
    </>
  );
};

export const pageQuery = graphql`
  query DataQuery {
    dataJson(path: { eq: "/cv" }) {
      fileRelativePath
      rawJson
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
