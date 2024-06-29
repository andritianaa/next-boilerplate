import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextAS - Let's Build faster",
  description: `A Next.js boilerplate with pre-configured authentication, database connection, and customizable themes. Plus, access a wide range of reusable components for seamless project development.`,
  openGraph: {
    title: "NextAS - Let's Build faster",
    description: `A Next.js boilerplate with pre-configured authentication, database connection, and customizable themes. Plus, access a wide range of reusable components for seamless project development.`,
    url: "https://editbag.com",
    siteName: "Editbag",
    images: [
      {
        url: "https://editbag.com/preview.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://editbag.com/preview.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
