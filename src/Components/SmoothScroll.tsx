import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SmoothScroll({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
export default SmoothScroll;
