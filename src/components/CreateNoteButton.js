import React from "react";
import { motion } from "framer-motion";

const CreateNoteButton = ({ onClick }) => (
  <motion.button
    className="create-note-button"
    whileTap={{ scale: 1.2 }} 
    onClick={onClick}
  >
    +
  </motion.button>
);

export default CreateNoteButton;
