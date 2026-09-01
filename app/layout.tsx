import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA AI — Ask. Create. Get It Done.",
  description:
    "NOVA AI is an all-in-one AI assistant for chat, image generation, writing, coding, research, and productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
