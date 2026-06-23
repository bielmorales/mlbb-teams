import "./about.css";

export const metadata = {
  title: "About — MLBB Teams",
  description: "Learn about MLBB Teams, the platform that helps Mobile Legends: Bang Bang players find teammates and squads.",
};

export default function AboutPage() {
  return (
    <main className="about-container">
      <h1 className="about-title">About MLBB Teams</h1>
      <p className="about-tagline">
        The easiest way to find teammates and squads in Mobile Legends: Bang Bang.
      </p>

      <div className="about-sections">
        <section className="about-section">
          <h2 className="about-section-heading">What is MLBB Teams?</h2>
          <p className="about-section-body">
            MLBB Teams is a platform built for{" "}
            <span className="about-highlight">Mobile Legends: Bang Bang</span> players
            who want to stop solo queuing and start winning together. Whether you are
            grinding ranked, looking for a five-man squad, or just want to play casually
            with people who share your schedule, this is where you find them.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-heading">Why we built it</h2>
          <p className="about-section-body">
            Finding reliable teammates in MLBB can feel impossible — random queues are
            unpredictable and Discord servers are noisy. We wanted a focused place where
            players can connect based on rank, role, preferred heroes, and playstyle, so
            every match starts with a squad that is actually on the same page.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-heading">How it works</h2>
          <p className="about-section-body">
            Browse or search for players and teams that match what you are looking for.
            Filter by rank, server, or the roles you need filled. Reach out, link up,
            and get into the game. No friction, no noise — just teammates ready to play.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-heading">Who is it for?</h2>
          <p className="about-section-body">
            Anyone who plays MLBB. From newcomers learning the ropes to Mythical Glory
            veterans looking for a competitive five-stack — if you want better teammates,
            MLBB Teams is for you.
          </p>
        </section>
      </div>
    </main>
  );
}
