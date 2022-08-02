export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62e930c23858760d0baf3ffd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gvrycudk",
                  apiId: "c505a7c5-2b5e-4ef7-86d1-182ce22cec51",
                },
                {
                  buildHookId: "62e930c308e0e2088890e2e4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2spx35xi",
                  apiId: "d079d913-4819-45d3-b3dd-f47453a68eb2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/anish180398/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2spx35xi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
