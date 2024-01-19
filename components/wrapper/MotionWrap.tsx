// MotionWrap.tsx
import React from "react";
import { motion } from "framer-motion";

interface MotionWrapProps {
  classNames: string;
}

const MotionWrap = (
  WrappedComponent: React.ComponentType,
  { classNames }: MotionWrapProps
) => {
  const WrappedComponentWithMotion = () => (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} flex-center`}
    >
      <WrappedComponent />
    </motion.div>
  );

  return WrappedComponentWithMotion;
};

export default MotionWrap;
