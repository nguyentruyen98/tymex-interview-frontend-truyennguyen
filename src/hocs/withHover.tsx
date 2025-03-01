import * as motion from "motion/react-client";

export const withHover = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return (props: T) => (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <WrappedComponent {...props} />
    </motion.div>
  );
};
