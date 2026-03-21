import { useMediaQuery } from "react-responsive";

const BREAKPOINT = {
  mobileMin: 360,
  mobileMax: 599,
  tabletMin: 600,
  tabletMax: 1279,
  pc: 1280,
};

export default function useResponsive() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAKPOINT.mobileMax}px)`,
  });
  const isOverTablet = useMediaQuery({
    query: `(min-width: ${BREAKPOINT.tabletMin}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(max-width: ${BREAKPOINT.tabletMax}px)`,
  });
  const isPc = useMediaQuery({ query: `(min-width: ${BREAKPOINT.pc}px)` });

  return { isPc, isTablet, isOverTablet, isMobile };
}
