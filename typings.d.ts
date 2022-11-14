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

export interface PageInfo extends sanityBody {
  _type: "pageInfo";
  name: string;
  email: string;
  role: string;
  profilePic: string;
  bgInformation: string;
}

export interface Technology extends sanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends sanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Project extends sanityBody {
  _type: "project";
  title: string;
  summary: string;
  linkToBuild: string;
  image: Image;
  technologies: Technology[];
}

export interface Experience extends sanityBody {
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

export interface Social extends sanityBody {
  _type: "social";
  title: string;
  url: string;
}