function Main() {
  return (
    <main style={styles.main}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>
          Impulsa tu presencia digital 🚀
        </h1>

        <p style={styles.subtitle}>
          Diseñamos experiencias web modernas, rápidas y atractivas que destacan del resto.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Empezar</button>
          <button style={styles.secondaryBtn}>Ver más</button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>💻 Desarrollo Web</h3>
            <p>Aplicaciones modernas con alto rendimiento.</p>
          </div>

          <div style={styles.card}>
            <h3>🎨 Diseño UI/UX</h3>
            <p>Interfaces elegantes centradas en el usuario.</p>
          </div>

          <div style={styles.card}>
            <h3>⚡ Optimización</h3>
            <p>Velocidad y eficiencia al máximo nivel.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <button style={styles.primaryBtn}>Contáctanos</button>
      </section>

    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff"
  },

  /* HERO */
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "100px 20px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)"
  },
  title: {
    position: "relative",
    fontSize: "3rem",
    marginBottom: "15px",
    zIndex: 1
  },
  subtitle: {
    position: "relative",
    fontSize: "1.3rem",
    marginBottom: "25px",
    zIndex: 1
  },
  buttons: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    zIndex: 1
  },
  primaryBtn: {
    padding: "12px 25px",
    background: "#ff7a18",
    border: "none",
    borderRadius: "30px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  },
  secondaryBtn: {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid #fff",
    borderRadius: "30px",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  },

  /* SECTION */
  section: {
    marginTop: "60px",
    textAlign: "center"
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#111"
  },

  /* CARDS */
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap"
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "25px",
    width: "260px",
    color: "#111",
    backgroundColor: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer"
  },

  /* CTA */
  cta: {
    marginTop: "80px",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ff7a18, #ffb347)",
    color: "#fff"
  }
};

export default Main;