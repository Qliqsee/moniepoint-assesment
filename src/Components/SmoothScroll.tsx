import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }} root>
      {children}
    </ReactLenis>
  );
}
export default SmoothScroll;
