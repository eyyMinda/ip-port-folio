export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Platform Name",
      description: "Label for this social link (e.g. GitHub, LinkedIn).",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    }
  ]
};
