# Sanity Content Studio (v2)

This folder uses **Sanity Studio v2** (`sanity.json`). The global **`sanity` / `@sanity/cli` v3+** CLI refuses to start v2 projects (“Studio < v3 is no longer supported”).

**Local Studio:** from this directory, use the **pinned v2 CLI** (installed as `devDependency`):

```bash
cd sanity
npm install --legacy-peer-deps
npm start
```

Use **`npm start`** (not `npx sanity …` from elsewhere), so `node_modules/.bin` resolves to **`@sanity/cli@2.36.2`**.

Long-term, migrate the studio to **Sanity v3** (`sanity.config.ts`) so you can use the current CLI without pinning.

---

# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
