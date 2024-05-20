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
