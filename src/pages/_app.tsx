import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="www.andyfx.net">
      <ThemeProvider attribute="class">
        <div className={montserrat.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </PlausibleProvider>
  );
};

export default MyApp;
