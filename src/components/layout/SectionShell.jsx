import { motion } from "framer-motion";
import SectionBackground from "../backgrounds/SectionBackground.jsx";
import "./section-shell.css";

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  background = "none",
  children,
  className = "",
}) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <SectionBackground variant={background} />

      <div className="section-shell__inner">
        {(eyebrow || title || description) && (
          <motion.div
            className="section-shell__header"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {eyebrow && <p className="section-shell__eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-shell__title">{title}</h2>}
            {description && (
              <p className="section-shell__description">{description}</p>
            )}
          </motion.div>
        )}

        <div className="section-shell__content">{children}</div>
      </div>
    </section>
  );
}
