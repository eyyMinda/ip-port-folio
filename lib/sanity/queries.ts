import { groq } from "next-sanity";

/** PageInfo with dereferenced ordered lists (socials, experiences, projects). */
export const pageInfoQuery = groq`*[_type == "pageInfo"][0]{
  ...,
  socials[]->,
  projects[]->{
    ...,
    technologies[]->
  },
  experiences[]->{
    ...,
    technologies[]->
  }
}`;

export const skillsQuery = groq`*[_type == "skill"]`;

/** Ordered projects from PageInfo (same order as the site). */
export const orderedProjectsFromPageInfoQuery = groq`
  *[_type == "pageInfo"][0].projects[]->{
    ...,
    technologies[]->
  }
`;

/** Ordered experiences from PageInfo (same order as the site). */
export const orderedExperiencesFromPageInfoQuery = groq`
  *[_type == "pageInfo"][0].experiences[]->{
    ...,
    technologies[]->
  }
`;

/** Ordered socials from PageInfo (same order as the site). */
export const orderedSocialsFromPageInfoQuery = groq`*[_type == "pageInfo"][0].socials[]->`;
