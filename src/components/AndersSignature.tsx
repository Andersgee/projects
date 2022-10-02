import { useRef } from "react";
import { useIntersectionObserver } from "src/hooks/useIntersectionObserver";

export function AndersSignature() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: false });
  const isIntersecting = !!entry?.isIntersecting;

  return (
    <svg
      ref={ref}
      width="232"
      height="107"
      viewBox="0 0 432 207"
      fill="none"
      className="stroke-neutral-600 dark:stroke-neutral-300"
    >
      <title>Anders Signature</title>

      {isIntersecting && (
        <path
          className="animate-strokedraw"
          id="signature"
          d="M70 111C50.4739 117.861 33.5939 131.033 20.2222 146.667C15.0676 152.693 -3.40886 173.974 5.66668 183.333C9.6992 187.492 18.5793 185.348 23.1111 184.222C36.275 180.954 48.6411 174.943 59.8889 167.445C82.6965 152.239 104.419 132.886 122.111 112C139.131 91.9086 155.637 70.2384 167.778 46.7778C173.993 34.7681 177.817 22.2136 182 9.4445C191.747 -20.31 157.421 67.0858 147 96.6112C138.618 120.36 129.722 144.071 122.389 168.167C120.564 174.163 119.119 180.197 118.167 186.389C117.532 190.512 119.102 178.097 119.5 173.945C120.783 160.546 122.295 147.208 121.944 133.722C121.907 132.299 120.265 113.934 117.556 117.889C112.411 125.397 108.117 136.35 109.444 145.556C110.768 154.734 116.994 149.328 121.667 145.333C133.237 135.441 143.07 123.75 155.778 115.222C157.41 114.127 167.5 108.5 172.5 112C176.222 116 175.169 121.488 174.5 124.5C171.611 135.667 173.45 128.86 171.556 135.833C168.579 146.787 165.904 157.851 163.5 168.945C163.095 170.812 158.924 187.576 160.667 178.389C163.117 165.469 167.923 154.196 176.222 143.945C181.492 137.435 187.332 131.753 194.444 127.278C197.804 125.164 204.359 120.207 208.611 120.056C213.772 119.871 211.289 144.372 210.889 147.056C209.421 156.908 200.891 185.562 202.444 175.722C204.754 161.096 210.935 144.607 220 132.889C225.269 126.077 234.387 117.445 243.778 117.445C249.537 117.445 250.615 116.908 256.5 117.889C258.616 118.242 271.151 120.781 269.556 120.222C267.616 119.543 263.962 121.602 262.333 122.222C256.205 124.554 250.033 126.843 244.611 130.611C235.218 137.138 229.8 147.912 225.722 158.333C224.474 161.523 220.85 170.91 223.556 174.389C225.386 176.743 239.252 161.57 240.5 160.222C255.918 143.571 269.665 122.701 280.778 103C292.181 82.7847 298.798 61.1145 302.778 38.3334C303.18 36.0323 304.786 29.705 303.111 31.3334C299.357 34.9833 296.837 40.7698 294.556 45.3334C289.448 55.5489 285.226 66.1775 280.222 76.4445C273.713 89.7986 266.224 102.69 260.556 116.445C254.598 130.902 251 144.289 251 159.778C251 181.396 265.829 159.033 270.889 151C276.417 142.222 282.487 138.13 285.851 128.167C287.495 123.299 286.556 130.611 286.556 130.611C286.294 136.618 286.261 139.172 291.611 143.333C295.728 146.535 303.679 142.067 307 138.5C311.292 133.89 312.392 106.185 299.5 114.833C291.468 120.222 281.193 130.443 281 142.222C280.869 150.221 281 154.5 286.556 160.778C297.501 165.753 308.602 160.46 317 154.5C328.799 146.127 336.701 136.6 344.333 124.111C345.082 122.887 351.502 109.937 349.889 116.389C348.823 120.653 344.891 130.617 352.167 129.889C357.136 129.392 362.293 127.447 366.389 124.611C370.075 122.06 364.558 127.319 363.889 128.167C360.879 131.979 337.128 154.996 345.222 160.778C351.968 165.596 368.974 150.13 373.778 146.667C384.445 138.978 395.257 131.329 404.778 122.222C406.196 120.866 406.706 120.402 405.778 122.667C404.126 126.698 402.354 130.665 401.222 134.889C397.141 150.117 406.271 155.956 420.278 158.945C426.349 160.24 431.094 158.911 427.333 164.778C415.014 183.997 383.083 185.357 363.111 187.333C307.389 192.849 251.232 190.61 195.333 191.111C148.449 191.532 100.594 192.337 55 204"
          strokeWidth="5"
          strokeMiterlimit="0"
          strokeLinejoin="bevel"
          strokeDasharray={2327.7}
          strokeDashoffset={2327.7}
        />
      )}
    </svg>
  );
}