import React from "react";
import { motion } from "framer-motion";
import "./Quote.css";

function Quote() {
  return (
    <motion.section
      className="quote"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>“You are my sunshine, my only love.”</h2>
    </motion.section>
  );
}

export default Quote;
