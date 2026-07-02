// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  site: "https://djblackberry64.github.io",
  base: "/programming-fundamentals-course/",
  integrations: [
    starlight({
      title: {
        en: "Programming Fundamentals Curriculum",
        de: "Programmier Grundlagen Kurs",
      },
      customCss: ["katex/dist/katex.min.css"],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        de: {
          label: "Deutsch",
          lang: "de",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          translations: { de: "Einführung" },
          slug: "",
        },
        {
          label: "Course",
          translations: { de: "Kurs" },
          items: [
            {
              label: "Foundations",
              translations: { de: "Grundlagen" },
              items: [{ autogenerate: { directory: "01-foundations" } }],
            },
            {
              label: "Language Specific Lessons",
              translations: { de: "Sprachspezifische Lektionen" },
              items: [
                { autogenerate: { directory: "02-language-specific-lessons" } },
              ],
            },
            {
              label: "Advanced",
              translations: { de: "Fortgeschritten" },
              items: [{ autogenerate: { directory: "03-advanced-section" } }],
            },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
    mdx({
      // Zwingt MDX dazu, die globalen Markdown-Plugins zu erben
      extendMarkdownConfig: true,
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
