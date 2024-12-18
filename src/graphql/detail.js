import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
query Projects ($slug: String!){
  projects(where: { slug: $slug }){
    id
    title
    shortDescription
    longDescription
    slug
    skill{
      id
    }
    image{
      id
    }
    github
    site
  }
}
`;