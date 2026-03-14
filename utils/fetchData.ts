import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { sanityClient } from "../sanity";
import {
  pageInfoQuery,
  experiencesQuery,
  skillsQuery,
  projectsQuery,
  socialsQuery
} from "../lib/sanity/queries";

/** Direct Sanity fetch for getStaticProps — no HTTP, no NEXT_PUBLIC_BASE_URL needed at build. */
export const fetchPageInfo = async (): Promise<PageInfo> => {
  const data = await sanityClient.fetch<PageInfo | null>(pageInfoQuery);
  if (!data) throw new Error("Page info not found");
  return data;
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  const data = await sanityClient.fetch<Experience[]>(experiencesQuery);
  return data ?? [];
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const data = await sanityClient.fetch<Skill[]>(skillsQuery);
  return data ?? [];
};

export const fetchProjects = async (): Promise<Project[]> => {
  const data = await sanityClient.fetch<Project[]>(projectsQuery);
  return data ?? [];
};

export const fetchSocials = async (): Promise<Social[]> => {
  const data = await sanityClient.fetch<Social[]>(socialsQuery);
  return data ?? [];
};

/** Parallel fetch for getStaticProps — single round-trip time instead of 5. */
export const fetchAllPageData = async () => {
  const [pageInfo, experiences, skills, projects, socials] = await Promise.all([
    fetchPageInfo(),
    fetchExperiences(),
    fetchSkills(),
    fetchProjects(),
    fetchSocials()
  ]);
  return { pageInfo, experiences, skills, projects, socials };
};