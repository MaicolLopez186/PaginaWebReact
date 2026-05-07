function Footer({
  descripcion,
  autores,
  fecha,
  ubicacion,
  obras,
}) {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* LOGO */}
        <h2 style={styles.logo}>
          📚 Literatura Rusa
        </h2>

        {/* GRID */}
        <div style={styles.grid}>

          {/* DESCRIPCIÓN */}
          <div style={styles.section}>
            <h3 style={styles.title}>Sobre la Página</h3>

            <p style={styles.text}>
              {descripcion}
            </p>
          </div>

          {/* AUTORES */}
          <div style={styles.section}>
            <h3 style={styles.title}>Autores Destacados</h3>

            {autores.map((autor, index) => (
              <p key={index} style={styles.link}>
                ✦ {autor}
              </p>
            ))}
          </div>

          {/* OBRAS */}
          <div style={styles.section}>
            <h3 style={styles.title}>Obras Icónicas</h3>

            {obras.map((obra, index) => (
              <p key={index} style={styles.link}>
                📖 {obra}
              </p>
            ))}
          </div>

          {/* UBICACIÓN */}
          <div style={styles.section}>
            <h3 style={styles.title}>Origen</h3>

            <p style={styles.text}>
              {ubicacion}
            </p>

            <p style={styles.date}>
              {fecha}
            </p>
          </div>
        </div>

        {/* FRASE */}
        <div style={styles.quoteBox}>
          <p style={styles.quote}>
            “La literatura rusa no solo cuenta historias,
            explora el alma humana.”
          </p>
        </div>

        {/* COPYRIGHT */}
        <div style={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Biblioteca Rusa |
            Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
    color: "#fff",
    padding: "70px 30px 30px",
    marginTop: "80px",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "auto",
  },

  logo: {
    fontSize: "2.5rem",
    marginBottom: "50px",
    textAlign: "center",
    letterSpacing: "2px",
    color: "#fbbf24",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  section: {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.3s",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "1.3rem",
    marginBottom: "18px",
    color: "#fbbf24",
  },

  text: {
    lineHeight: "1.8",
    color: "#d1d5db",
    fontSize: "0.95rem",
  },

  link: {
    marginBottom: "10px",
    color: "#e5e7eb",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "0.95rem",
  },

  date: {
    marginTop: "15px",
    color: "#9ca3af",
    fontStyle: "italic",
  },

  quoteBox: {
    marginTop: "60px",
    textAlign: "center",
    padding: "30px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  quote: {
    fontSize: "1.4rem",
    fontStyle: "italic",
    color: "#f3f4f6",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8",
  },

  bottom: {
    marginTop: "30px",
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
};

export default Footer;