import "./src/utils/validate-process-env.mjs";
import { NEXTCONFIG_imageSizes, NEXTCONFIG_deviceSizes } from "./src/utils/image-sizes-constants.mjs";
import { withPlausibleProxy } from "next-plausible";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: NEXTCONFIG_imageSizes,
    deviceSizes: NEXTCONFIG_deviceSizes,
  },
};

export default withPlausibleProxy()(nextConfig);
