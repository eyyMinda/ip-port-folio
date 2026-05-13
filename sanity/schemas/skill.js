export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Skill name",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress (0–100)",
      type: "number",
      description: "Proficiency from 0 to 100.",
      initialValue: 50,
      validation: Rule => Rule.min(0).max(100)
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
