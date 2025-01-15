import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Site Personnel d'Hugo Matyla - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
