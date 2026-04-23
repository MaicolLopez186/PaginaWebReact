function Footer({ descripcion, redes, fecha, ubicacion }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <h2 style={styles.logo}>🚀 Mi Sitio</h2>

        <div style={styles.grid}>
          {/* DESCRIPCIÓN */}
          <div style={styles.section}>
            <h3 style={styles.title}>Descripción</h3>
            <p style={styles.text}>{descripcion}</p>
          </div>

          {/* REDES */}
          <div style={styles.section}>
            <h3 style={styles.title}>Redes</h3>
            {redes.map((red, index) => (
              <p key={index} style={styles.link}>
                {red}
              </p>
            ))}
          </div>

          {/* UBICACIÓN */}
          <div style={styles.section}>
            <h3 style={styles.title}>Ubicación</h3>
            <p style={styles.text}>{ubicacion}</p>
          </div>

          {/* FECHA */}
          <div style={styles.section}>
            <h3 style={styles.title}>Fecha</h3>
            <p style={styles.text}>{fecha}</p>
          </div>
        </div>

        <div style={styles.bottom}>
          <p>© {new Date().getFullYear()} Mi Sitio | Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}
const styles = {
footer: {
  width: "100%",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  color: "#fff",
  padding: "40px 20px",
  marginTop: "60px",
},

container: {
  width: "100%", 

},

  logo: {
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    textAlign: "left",
  },

  section: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "15px",
    transition: "0.3s",
  },

  title: {
    marginBottom: "10px",
    fontSize: "18px",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#f1f1f1",
  },

  link: {
    fontSize: "14px",
    margin: "5px 0",
    cursor: "pointer",
    transition: "0.3s",
  },

  bottom: {
    marginTop: "30px",
    paddingTop: "15px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    fontSize: "13px",
    color: "#ddd",
  },
};

export default Footer;