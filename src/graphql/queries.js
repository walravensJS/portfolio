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
            php
            mySql
            nextJs
            tailwindCss
            craftCms
            id
            illustrator
            javascript
            photoshop
            publishedAt
            react
            slug
            title
            createdAt
            nodeJs
            video {
                url
            }
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
