"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  /** Optional key to differentiate pages — use pathname if needed */
  routeKey?: string;
}

/**
 * PageTransition — wraps page content with a simple 0.3s fade-in.
 * Place inside each page.tsx root div to get smooth route transitions.
 * Uses AnimatePresence so the fade plays on mount.
 */
export default function PageTransition({ children, routeKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
