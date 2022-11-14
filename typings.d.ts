interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  email: string;
  role: string;
  profilePic: string;
  bgInformation: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  linkToBuild: string;
  image: Image;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage: Image;
  currentlyWorking: boolean;
  dateStarted: date;
  dateEnded: date;
  points: string[];
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}