import { useState } from "react";

function Header({ logo, menu }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header style={styles.header}>
      
      {/* LOGO */}
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>
          📚 {logo}
        </h1>
      </div>

      {/* MENÚ DESKTOP */}
      <nav style={styles.nav}>
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={styles.link}
          >
            {item.nombre}
          </a>
        ))}
      </nav>

      {/* BOTÓN MOBILE */}
      <button
        style={styles.menuBtn}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      {/* MENÚ MOBILE */}
      {menuAbierto && (
        <div style={styles.mobileMenu}>
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              style={styles.mobileLink}
              onClick={() => setMenuAbierto(false)}
            >
              {item.nombre}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxSizing: "border-box",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    color: "#fbbf24",
    fontSize: "1.8rem",
    letterSpacing: "1px",
    margin: 0,
    cursor: "pointer",
  },

  nav: {
    display: "flex",
    gap: "30px",
  },

  link: {
    color: "#f8fafc",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "0.3s",
    position: "relative",
  },

  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "absolute",
    top: "90px",
    right: "20px",
    backgroundColor: "#111827",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  },

  mobileLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Header;
