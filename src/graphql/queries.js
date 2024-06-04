import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query Projects {
        projects {
            githubUrl
            site
            css
            description
            adobe
            gsap
            html
            id
            illustrator
            javascript
            photoshop
            publishedAt
            react
            slug
            title
            fullImage {
                url
            }
        }
    }
`;

export const GET_EDUCATION = gql`
    query Educations {
        educations {
            id
            title
            course
            period
        }
    }
`;
