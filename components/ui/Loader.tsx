"use client";

import { motion } from "framer-motion";

export default function Loader({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-9999 bg-background text-muted flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="w-70 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-3  bg-foreground/80 origin-left div"
        />

        {/* Content blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2 div">
          <div className="h-4 w-full  bg-foreground/20 div" />
          <div className="h-4 w-2/3 bg-foreground/20" />
          <div className="h-4 w-5/6 bg-foreground/20" />
        </motion.div>

        {/* Status text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-muted/80">
          Building clean, performant web experiences
        </motion.p>
      </div>
    </motion.div>
  );
}
