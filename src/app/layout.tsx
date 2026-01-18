import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Feed App",
  description: "Next.js Parallel and Intercepting Routes Demo",
};

export default function RootLayout({
  children,
  modal, // This matches the @modal folder
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {modal} 
        <div id="modal-root" />
      </body>
    </html>
  );
}