import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  "Retrieval-Augmented Generation", "BERT", "GPT", "Fine-Tuning", 
  "Prompt Engineering", "Sequence-to-Sequence Modeling", "LSTM & RNNs", 
  "CNNs", "GANs", "VAEs", "RLHF", "Multimodal Architectures"
];

export default function FocusBubbles() {
  return (
    <ul 
      style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '12px', 
        listStyle: 'none', 
        padding: 0, 
        margin: '0 auto',
        justifyContent: 'center', 
        maxWidth: '860px'
      }}
    >
      {topics.map((t, i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '14px 28px',
            fontSize: '1.05rem',
            color: '#f4f4f5',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '100px',
            cursor: 'default',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#f4f4f5';
          }}
        >
          {t}
        </motion.li>
      ))}
    </ul>
  );
}
