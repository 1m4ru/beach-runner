"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
  from = "from-orange-300",
  to = "to-yellow-200",
}: {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
      className={cn(
        `relative inline-block rounded-md bg-gradient-to-r ${from} ${to} bg-[length:0%_100%] bg-clip-text text-transparent`,
        className
      )}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
    >
      {children}
    </motion.span>
  );
};
