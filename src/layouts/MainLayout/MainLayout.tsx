import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MainLayout;
