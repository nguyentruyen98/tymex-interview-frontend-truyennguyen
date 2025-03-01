import * as motion from "motion/react-client";

export const withPageTransitions = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return (props: T) => (
    <motion.div
      key="page"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};
