import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Runbook Template Generator",
  description: "Generate incident response runbooks from past incidents. AI-powered analysis for DevOps teams and SREs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="af447232-a3c7-4cf7-9962-8dc6464a886a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
