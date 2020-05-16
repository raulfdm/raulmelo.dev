import React from 'react';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
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
import { CvJsonEdge, CvJson } from 'graphql-types';
import { theme, GlobalCVStyles } from 'components/CV/styles';
import { CVMain, HomeLink, ScrollToTopButton } from 'components/CV/UI';
import { useIntl } from 'context/react-intl';

if (typeof window !== `undefined`) {
  scrollPolyfill();
}

type CvPageProps = {
  data: {
    allCvJson: {
      edges: CvJsonEdge[];
    };
  };
};

const moveToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CvPage: React.FC<CvPageProps> = ({ data: apiData }) => {
  const { locale } = useIntl();
  const dataByLocale = apiData.allCvJson.edges.find(
    (e) => e.node.lang === locale,
  )!;

  const [data]: [CvJson, unknown] = useLocalJsonForm(
    (dataByLocale.node as unknown) as JsonNode,
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
    allCvJson(filter: { path: { eq: "/cv" } }) {
      edges {
        node {
          lang
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
    }
  }
`;

export default CvPage;
