export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "bgInformation",
      title: "Background Information",
      description: "Rich text shown in the About section.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" }
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" }
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "socials",
      title: "Social Links",
      description: "Order in this list = order in the header. Drag to reorder.",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }]
    },
    {
      name: "experiences",
      title: "Experiences",
      description: "Which jobs to show and in what order. Drag to reorder. Only listed items appear on the site.",
      type: "array",
      of: [{ type: "reference", to: { type: "experience" } }]
    },
    {
      name: "projects",
      title: "Projects",
      description: "Which projects to show and in what order. Drag to reorder. Only listed items appear on the site.",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }
  ]
};
