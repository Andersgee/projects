import "./globals.css";
import { fontSans } from "#src/utils/font";
import { seo } from "#src/utils/seo";
import { ScreenSizeIndicator } from "#src/app/_components/ScreensizeIndicator";
import { Providers } from "./Providers";

export const metadata = seo({
  title: "Andyfx - latest projects and contact",
  description: "Andyfx latest web projects and contact.",
  url: "/",
  image: "/andyfx.png",
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
