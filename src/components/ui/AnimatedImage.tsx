import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedImageProps {
  src: string;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.img
      ref={ref}
      src={src}
      className={className}
      initial="hidden"
      animate={controls}
      whileHover={{
        scale: 1.05,
        transition: { type: "tween", duration: 2},
      }}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 40,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 12,
            mass: 0.7,
            delay: 0.1,
          },
        },
      }}
    />
  );
};

export default AnimatedImage;
