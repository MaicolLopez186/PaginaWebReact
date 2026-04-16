function Footer({ descripcion, redes, fecha, ubicacion }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.logo}>Mi Sitio</h2>

        <div style={styles.grid}>
          <div style={styles.section}>
            <h3>Descripción</h3>
            <p style={styles.text}>{descripcion}</p>
          </div>

          <div style={styles.section}>
            <h3>Redes</h3>
            {redes.map((red) => (
              <p style={{fontWeight:"bold"}}>{red}</p>
            ))}
          </div>

          <div style={styles.section}>
            <h3>Ubicación</h3>
            <p style={styles.text}>{ubicacion}</p>
          </div>

          <div style={styles.section}>
            <h3>Fecha</h3>
            <p style={styles.text}>{fecha}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#7e7fd5",
    color: "#fff",
    padding: "30px 20px",
    marginTop: "40px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  logo: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    textAlign: "left",
  },
  section: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "15px",
    borderRadius: "10px",
    color: "#000000",
  },
  text: {
    fontFamily: "Segoe UI, sans-serif",
    color: "#000000",
    fontSize: "14px",
    marginTop: "5px",
    fontWeight:"bold"
  },
};

export default Footer;
