import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { sanityClient } from "../sanity";
import { pageInfoQuery, skillsQuery } from "../lib/sanity/queries";

const isNonNull = <T>(x: T | null | undefined): x is T => x != null;

/** Pull ordered lists from expanded pageInfo and return a lean pageInfo document for props. */
function splitPageInfoLists(raw: PageInfo): {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
} {
  const experiences = (raw.experiences ?? []).filter(isNonNull);
  const projects = (raw.projects ?? []).filter(isNonNull);
  const socials = (raw.socials ?? []).filter(isNonNull);
  const { experiences: _e, projects: _p, socials: _s, ...rest } = raw;
  return { pageInfo: rest, experiences, projects, socials };
}

/** Direct Sanity fetch for getStaticProps — no HTTP, no NEXT_PUBLIC_BASE_URL needed at build. */
export const fetchPageInfo = async (): Promise<PageInfo> => {
  const data = await sanityClient.fetch<PageInfo | null>(pageInfoQuery);
  if (!data) throw new Error("Page info not found");
  return data;
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const data = await sanityClient.fetch<Skill[]>(skillsQuery);
  return data ?? [];
};

/** Parallel fetch for getStaticProps — pageInfo drives order for socials, experiences, projects. */
export const fetchAllPageData = async () => {
  const [rawPageInfo, skills] = await Promise.all([fetchPageInfo(), fetchSkills()]);
  const { pageInfo, experiences, projects, socials } = splitPageInfoLists(rawPageInfo);
  return { pageInfo, experiences, skills, projects, socials };
};
