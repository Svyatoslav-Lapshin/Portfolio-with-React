import slavaPhoto from "../assets/slava-photo.jpeg";

function StartPage() {
  return (
    <div className="container">
      <main className="hero home-page">
        <figure className="hero-image">
          <img
            src={slavaPhoto}
            alt="Svyatoslav's photo"
            className="hero-images"
          />
        </figure>

        <section className="hero-section">
          <h1 className="title-rubric">Hello, I’m Svyatoslav!</h1>
          <p>
            Aspiring Full-Stack Developer driven by curiosity and continuous
            growth. I focus on building clean, well-structured, and
            user-centered digital solutions, turning ideas into practical and
            meaningful applications. Previously, I gained experience in game
            development with Unity and C#, which strengthened my problem-solving
            skills and understanding of interactive systems.
          </p>
        </section>
      </main>
    </div>
  );
}

export default StartPage;
