import * as React from "react";

import "./index.scss";
import { HelpDisplayMode } from "../../types";

import githubIcon from "../../assets/github.svg";

export const TopBar: React.FC<{
  helpDisplayMode: HelpDisplayMode;
  setHelpDisplayMode: (mode: HelpDisplayMode) => void;
}> = ({ setHelpDisplayMode, helpDisplayMode }) => {
  return (
    <div className="top-bar">
      <div className="top-bar__product-name">CODERS.GUIDE</div>
      <div className="top-bar__title">
        roadmap from junior developer towards seniority{" "}
        <span className="top-bar__subtitle">AKA</span> your interactive
        education plan
      </div>

      <div className="top-bar__plan-select">
        select your roadmap:{" "}
        <select className="select">
          <option value="">React web developer</option>
          <option value="" disabled>
            More coming soon...
          </option>
        </select>
      </div>

      <div className="top-bar__status">
        <div className="scale-indicator" />
        <div className="scale-help">Use your mouse wheel to zoom in/out</div>
      </div>

      <div className="top-bar__buttons">
        <button
          className={(helpDisplayMode === "credits" && "is-active") || ""}
          onClick={() =>
            setHelpDisplayMode(
              helpDisplayMode === "credits" ? undefined : "credits"
            )
          }
        >
          Credits
        </button>
        <button
          className={(helpDisplayMode === "help" && "is-active") || ""}
          onClick={() =>
            setHelpDisplayMode(helpDisplayMode === "help" ? undefined : "help")
          }
        >
          Help
        </button>
        <a href="https://github.com/coders-guide/coders-guide" target="_blank">
          <img className="top-bar__github-icon" src={githubIcon} />
        </a>
      </div>
    </div>
  );
};
