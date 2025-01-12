type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Nikhil Blog",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://next-blog-cj.vercel.app/",
  ogImage: "https://next-blog-cj.vercel.app/og",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/WaltHunter",
  },
};
