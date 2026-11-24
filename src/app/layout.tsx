import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "HarborMarket | B2B Demo", description: "Independent maritime B2B marketplace portfolio demo" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
