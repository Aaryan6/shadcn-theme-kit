import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";
import fonts from "@/lib/fonts";
import { FontProvider } from "@/components/font-provider";

export const metadata: Metadata = {
  title: "Shadcn UI Theme Kit",
  description: "Shadcn UI Theme Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
    >
      <body>
        <Providers>
          <FontProvider>{children}</FontProvider>
        </Providers>
      </body>
    </html>
  );
}
