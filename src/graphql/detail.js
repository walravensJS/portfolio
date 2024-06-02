import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
    query Projects($slug: String!) {
        projects(where: { slug: $slug }) {
            description
            id
            title
            slug
            fullImage {
                url
                fileName
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
