import { useState } from "react";
import type { DemoId } from "../data";
import DapurWork from "./DapurWork";
import KopiWork from "./KopiWork";

const filters = [
  { id: "all", label: "All Works" },
  { id: "fnb", label: "F&B" },
  { id: "catalog", label: "Catalog" },
  { id: "concept", label: "Concept" },
];
export default function Portfolio({
  onOpen,
}: {
  onOpen: (id: DemoId) => void;
}) {
  const [filter, setFilter] = useState("all");
  return (
    <section
      id="works"
      className="sec-pad"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">// 02 — Portfolio</span>
            <h2 className="sec-title">Selected Works</h2>
          </div>
          <div className="tabs" role="group" aria-label="Filter portfolio">
            {filters.map((item) => (
              <button
                key={item.id}
                className={`tab${filter === item.id ? " on" : ""}`}
                aria-pressed={filter === item.id}
                aria-controls="portfolio-results"
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="works" id="portfolio-results" aria-live="polite">
          {filter !== "concept" && <DapurWork onOpen={onOpen} />}
          {filter !== "catalog" && <KopiWork onOpen={onOpen} />}
        </div>
      </div>
    </section>
  );
}
