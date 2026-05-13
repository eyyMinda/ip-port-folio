export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string"
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date"
    },
    {
      name: "currentlyWorking",
      title: "Currently Working Here",
      type: "boolean"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "points",
      title: "Bullet Points",
      type: "array",
      of: [
        {
          type: "string",
          title: "Point",
          options: {
            layout: "textarea"
          }
        }
      ]
    }
  ]
};
