import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query Projects {
        projects {
            id
            title
            shortDescription
            longDescription
            slug
            skill {
                id
                title
            }
            image {
                id
            }
            github
            site
        }
    }
`;

export const GET_EDUCATION = gql`
    query Educations {
        educations {
            id
            course
            period
            title
        }
    }
`;

export const GET_SKILLS = gql`
    query skills {
        skills {
            title
            id
            project {
                id
            }
        }
    }
`;

export const GET_IMAGES = gql`
    query Images {
        images {
            image {
                url
            }
            project {
                id
            }
        }
    }
`;

export const GET_CONTRIBUTIONS = `
  query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}

`;
