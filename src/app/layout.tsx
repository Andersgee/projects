import "./globals.css";
import { fontSans } from "#src/utils/font";
import { seo } from "#src/utils/seo";
import { ScreenSizeIndicator } from "#src/app/_components/ScreensizeIndicator";
import { Providers } from "./Providers";

export const metadata = seo({
  title: "Boilerplate app",
  description: "Boilerplate app",
  url: "/",
  image: "/icons/favicon-512x512.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body>
        <Providers>{children}</Providers>
        <ScreenSizeIndicator />
      </body>
    </html>
  );
}
