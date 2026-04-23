import { useState } from "react";

function Main({
  titulo,
  subtitulo,
  boton1,
  boton2,
  servicios,
  ctaTexto,
  ctaBoton,
}) {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const toggleInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };


  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/573001234567?text=Hola,%20vi%20tu%20página%20y%20quiero%20más%20información";
  };

  return (
    <main style={styles.main}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>{titulo}</h1>
        <p style={styles.subtitle}>{subtitulo}</p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn} onClick={toggleInfo}>
            Ver más
          </button>

          <button 
            style={styles.secondaryBtn}
            onClick={handleWhatsApp}
          >
            Contáctanos
          </button>
        </div>

        {mostrarInfo && (
          <div style={styles.extraInfo}>
            <p>
              “Creamos soluciones digitales modernas: desarrollamos aplicaciones y sitios web rápidos, seguros y atractivos que impulsan ideas y negocios al siguiente nivel.”
            </p>
          </div>
        )}
      </section>

      {/* SERVICIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>

        <div style={styles.cards}>
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              style={styles.card}
              onClick={() => setServicioSeleccionado(servicio)} 
            >
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>{ctaTexto}</h2>
       
      </section>

  
      {servicioSeleccionado && (
        <div style={styles.modalOverlay} onClick={() => setServicioSeleccionado(null)}>
          
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            
            <button style={styles.closeBtn} onClick={() => setServicioSeleccionado(null)}>
              X
            </button>

            <h2 style={styles.modalTitle}>{servicioSeleccionado.titulo}</h2>
            <p style={styles.modalText}>{servicioSeleccionado.descripcion}</p>
            
            <p style={styles.modalText}>
             no dudes en adquirirlo, son los mejores servicios del mercado{servicioSeleccionado.titulo}.
            </p>

            <button 
              style={{ ...styles.primaryBtn, marginTop: "20px" }} 
              onClick={handleWhatsApp}
            >
              ¡Lo quiero!
            </button>

          </div>
        </div>
      )}

 
    </main>
  );
}


const styles = {

  main: {
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },
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
    pointerEvents: "none",
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
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  secondaryBtn: {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid #fff",
    borderRadius: "30px",
    color: "#fff",
    cursor: "pointer",
  },
  section: {
    marginTop: "60px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#111",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    borderRadius: "20px",
    padding: "25px",
    width: "260px",
    color: "#111",
    backgroundColor: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    cursor: "pointer", 
  },
  cta: {
    marginTop: "80px",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #ff7a18, #ffb347)",
    color: "#fff",
  },
  extraInfo: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 50,
  },


  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "500px",
    width: "90%",
    position: "relative",
    color: "#111",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#666",
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#333",
  },
  modalText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "10px",
  },
  floatingBtn: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 9999,
    textDecoration: "none",
  }
};

export default Main;