import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      excerpt: z.string().min(1),
      status: z.enum(["draft", "scheduled", "published", "archived"]).default("draft"),
      draft: z.boolean().default(true),
      publishAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      category: z.string().min(1),
      relatedService: z.string().min(1).optional(),
      relatedArticles: z.array(z.string()).default([]),
      author: z.string().min(1),
      reviewedBy: z.string().min(1).optional(),
      featuredImage: z.string().min(1),
      imageAlt: z.string().min(1),
    })
    .refine((data) => data.status !== "scheduled" || data.publishAt, {
      message: "Los artículos programados requieren publishAt con fecha ISO completa y offset explícito.",
      path: ["publishAt"],
    }),
});

export const collections = { blog };
