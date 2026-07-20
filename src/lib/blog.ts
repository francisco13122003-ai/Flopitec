import type { CollectionEntry } from "astro:content";

export const legacyBlogOrder = [
  "merece-la-pena-cambiar-disco-duro-por-ssd",
  "actualizar-a-windows-11",
  "portatil-no-enciende-causas",
] as const;

export type BlogEntry = CollectionEntry<"blog">;

export function isPublicBlogPost(post: Pick<BlogEntry, "data">, buildTime = new Date()): boolean {
  if (post.data.draft) return false;
  if (post.data.status === "published") return true;
  if (post.data.status === "scheduled") {
    return Boolean(post.data.publishAt && post.data.publishAt <= buildTime);
  }
  return false;
}

export function sortBlogPosts(posts: BlogEntry[]): BlogEntry[] {
  return [...posts].sort((a, b) => {
    const aIndex = legacyBlogOrder.indexOf(a.id as (typeof legacyBlogOrder)[number]);
    const bIndex = legacyBlogOrder.indexOf(b.id as (typeof legacyBlogOrder)[number]);

    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
    }

    const aTime = a.data.publishAt?.getTime() ?? 0;
    const bTime = b.data.publishAt?.getTime() ?? 0;
    return bTime - aTime || a.id.localeCompare(b.id);
  });
}

export function toBlogCardPost(post: BlogEntry) {
  return {
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    image: post.data.featuredImage,
  };
}
