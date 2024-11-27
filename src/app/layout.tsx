import { headers } from "next/headers";
import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userAgent = headers().get("user-agent") || "Unknown User Agent";

  return (
    <html lang="en">
      <body>
        <UserAgentProvider userAgent={userAgent}>

          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
}
