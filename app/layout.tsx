import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypingCareer – Track Typing Speed for Career Goals",
  description: "Gamified typing practice with career-specific content. Track WPM progress, hit milestones, and advance your career with faster typing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96f98939-5fb7-4871-86b2-e63f06a800ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
