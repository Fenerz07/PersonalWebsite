import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Hugo MATYLA",
  description: "Site Personnel d'Hugo MATYLA",
  icons: "/favicon.ico", // ✅ Format correct pour Next.js 13+
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
