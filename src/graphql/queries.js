import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query Projects {
        projects {
            description
            id
            title
            slug
            fullImage {
                width
                fileName
                url
            }
            css
            adobe
            html
            illustrator
            javascript
            photoshop
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
