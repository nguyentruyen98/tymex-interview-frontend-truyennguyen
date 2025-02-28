import * as motion from "motion/react-client";

export const withFadeIn = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return (props: T) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};
