function Main({
  titulo,
  subtitulo,
  boton1,
  boton2,
  servicios,
  ctaTexto,
  ctaBoton,
}) {
  return (
    <main style={styles.main}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>{titulo}</h1>

        <p style={styles.subtitle}>{subtitulo}</p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>{boton1}</button>
          <button style={styles.secondaryBtn}>{boton2}</button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>

        <div style={styles.cards}>
          {servicios.map((servicio, index) => (
            <div key={index} style={styles.card}>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>{ctaTexto}</h2>
        <button style={styles.primaryBtn}>{ctaBoton}</button>
      </section>
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },

  /* HERO */
hero: {
  position: "relative",
  textAlign: "center",
  padding: "140px 20px", 
  borderRadius: "20px",
  overflow: "hidden",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  display: "flex", 
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
},
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)",
  },
title: {
  position: "relative",
  fontSize: "3rem",
  marginBottom: "25px",
  maxWidth: "700px", 
  color: "#fff", 
  zIndex: 1
},

subtitle: {
  position: "relative",
  fontSize: "1.3rem",
  marginBottom: "40px", 
  maxWidth: "600px",
  lineHeight: "1.6",
  color: "#e0e0e0",
  zIndex: 1
},
  buttons: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    zIndex: 1,
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
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  secondaryBtn: {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid #fff",
    borderRadius: "30px",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  /* SECTION */
  section: {
    marginTop: "60px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#111",
  },

  /* CARDS */
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
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
    cursor: "pointer",
  },

  /* CTA */
  cta: {
    marginTop: "80px",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ff7a18, #ffb347)",
    color: "#fff",
  },
};

export default Main;
