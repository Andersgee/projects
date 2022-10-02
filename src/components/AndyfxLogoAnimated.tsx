export function AndyfxLogoAnimated() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100">
      <title>Andyfx Logo</title>
      <path
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="hsl(353, 100%, 45%)"
        d="M 18 92 L 39 30 L 75 80 L 102 8"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          fill="freeze"
          dur="0.35s"
          calcMode="spline"
          begin="0s"
          restart="never"
          values="M 18 92 L 18 92 L 18 92 L 18 92 ;
    M 18 92 L 39 30 L 39 30 L 39 30 ;
    M 18 92 L 39 30 L 75 80 L 75 80 ;
    M 18 92 L 39 30 L 75 80 L 102 8"
          keyTimes="0 ; 0.333 ; 0.666; 1"
          keySplines="0.45 0 0.55 1 ; 0.45 0 0.55 1; 0.45 0 0.55 1"
        />
      </path>

      <path
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="hsl(206, 76%, 80%)"
        d="M 18 92 L 102 8"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          fill="freeze"
          dur="0.35s"
          calcMode="spline"
          begin="0s"
          restart="never"
          values="M 18 92 L 18 92 ;
            M 18 92 L 102 8"
          keyTimes="0 ; 1"
          keySplines="0.45 0 0.55 1"
        />
      </path>
    </svg>
  );
}
