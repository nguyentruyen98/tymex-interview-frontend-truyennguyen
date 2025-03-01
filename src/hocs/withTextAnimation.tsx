import * as motion from "motion/react-client";

import { WithAnimationProps } from "./type";

export const withTextAnimation = <T extends WithAnimationProps<object>>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return (props: T) => {
    const { isAnimations = false, ...restProps } = props;
    if (isAnimations)
      return (
        <motion.div
          whileHover={{
            scale: 1.3,
            x: 5,
            y: -5,
            transition: { type: "spring", stiffness: 600 },
          }}
        >
          <WrappedComponent {...(restProps as T)} />
        </motion.div>
      );
    return <WrappedComponent {...(restProps as T)} />;
  };
};
