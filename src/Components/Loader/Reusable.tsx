import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import { ArrowRight } from "@phosphor-icons/react";

export const IconWithText = () => {
  const [isCircle, setIsCircle] = React.useState(false);

  const variants = {
    initial: { borderRadius: "50px", width: "60px", height: "60px" },
    animate: { borderRadius: "50px", width: "130px", height: "60px", transition: { duration: 1 } },
  };

  return (
    <motion.div
      style={{
        backgroundColor: colors.loading_secondary,
        overflow: "hidden",
        textWrap: "nowrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {isCircle && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ color: colors.loading_primary, fontSize: 25 }}
          >
            DENTAL
          </motion.div>
        )}

        {isCircle && (
          <motion.div
            style={{ position: "absolute" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowRight size={30} weight="bold" color="#fffcef" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
