"use client";

import PlausibleProvider from "next-plausible";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PlausibleProvider domain="www.andyfx.net">{children}</PlausibleProvider>;
}
