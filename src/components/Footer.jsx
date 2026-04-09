function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <h2 style={styles.logo}>Mi Sitio</h2>

        <p style={styles.text}>
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>

        <div style={styles.links}>
          <a href="#" style={styles.link}>Inicio</a>
          <a href="#" style={styles.link}>Servicios</a>
          <a href="#" style={styles.link}>Contacto</a>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#7e7fd5",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "40px"
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  logo: {
    margin: "0 0 10px"
  },
  text: {
    fontSize: "14px",
    marginBottom: "10px"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px"
  }
};

export default Footer;