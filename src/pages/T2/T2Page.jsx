import React from "react";
import "./T2Page.css";
import FadeIn from "../../components/ui/FadeIn.jsx";
import FocusBubbles from "./FocusBubbles.jsx";

export default function T2Page() {
  return (
    <div className="t2-container">
      <div className="t2-content-wrap">
        <FadeIn>
          <div className="t2-header">
            <h1 className="t2-title">Model & Research Focus</h1>
            <p className="t2-subtitle">
              Focused on building and understanding modern AI systems across these architectures and tooling loops.
            </p>
          </div>
        </FadeIn>

        <div className="t2-bubbles-wrapper">
          <FocusBubbles />
        </div>
      </div>
    </div>
  );
}
