"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Search teams</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search teams..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Results intentionally empty for now */}
      </ul>
    </main>
  );
}
