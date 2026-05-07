import { useState } from "react";

function Main({ titulo, subtitulo, autores, curiosidades, frase, libros }) {
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);
  const [mostrarCuriosidades, setMostrarCuriosidades] = useState(false);
  const [mostrarLectura, setMostrarLectura] = useState(false);

  return (
    <main style={styles.main}>
      {/* HERO */}
      <section id="inicio" style={styles.hero}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>{titulo}</h1>

        <p style={styles.subtitle}>{subtitulo}</p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onClick={() => setMostrarCuriosidades(!mostrarCuriosidades)}
          >
            Explorar Literatura
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() =>
              window.scrollTo({
                top: 900,
                behavior: "smooth",
              })
            }
          >
            Ver Libros
          </button>
        </div>

        {mostrarCuriosidades && (
          <div style={styles.extraInfo}>
            <p>
              La literatura rusa es reconocida por sus historias profundas,
              críticas sociales y personajes llenos de emociones humanas.
            </p>
          </div>
        )}
      </section>

      {/* FRASE */}
      <section style={styles.quoteSection}>
        <p style={styles.quote}>“{frase}”</p>
      </section>

      {/* GALERÍA */}
      <section id="libros" style={styles.gallerySection}>
        <h2 style={styles.sectionTitle}>Biblioteca Rusa</h2>

        <div style={styles.gallery}>
          {libros.map((libro, index) => (
            <div
              key={index}
              style={styles.bookCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(251,191,36,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
              }}
            >
              <img
                src={libro.imagen}
                alt={libro.nombre}
                style={styles.bookImage}
              />

              <div style={styles.bookContent}>
                <h3 style={styles.bookTitle}>{libro.nombre}</h3>

                <p style={styles.bookAuthor}>{libro.autor}</p>

                <p style={styles.bookDescription}>{libro.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTORES */}
      <section id="autores" style={styles.section}>
        <h2 style={styles.sectionTitle}>Grandes Autores Rusos</h2>

       <div style={styles.cards}>
  {autores.map((autor, index) => (
    <div
      key={index}
      style={styles.card}

      onClick={() => setAutorSeleccionado(autor)}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(251,191,36,0.4)";
        e.currentTarget.style.backgroundColor = "#273549";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.3)";
        e.currentTarget.style.backgroundColor = "#1e293b";
      }}
    >
              <h3 style={styles.cardTitle}>{autor.nombre}</h3>

              <p style={styles.cardText}>{autor.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h2>150+</h2>
          <p>Años de Historia</p>
        </div>

        <div style={styles.statCard}>
          <h2>50+</h2>
          <p>Autores Icónicos</p>
        </div>

        <div style={styles.statCard}>
          <h2>1000+</h2>
          <p>Obras Publicadas</p>
        </div>
      </section>

      {/* CURIOSIDADES */}
      <section id="curiosidades" style={styles.timeline}>
        <h2 style={styles.sectionTitle}>Curiosidades</h2>

        {curiosidades.map((dato, index) => (
          <div key={index} style={styles.timelineItem}>
            <span style={styles.timelineDot}></span>
            <p>{dato}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Descubre el alma de Rusia a través de sus libros
        </h2>

        <p style={styles.ctaText}>
          Desde las calles frías de San Petersburgo hasta los dilemas
          filosóficos más profundos, cada novela rusa es un universo.
        </p>

        <button
          style={styles.primaryBtn}
          onClick={() => setMostrarLectura(true)}
        >
          Comenzar Lectura
        </button>
      </section>

      {/* MODAL */}
      {autorSeleccionado && (
        <div
          style={styles.modalOverlay}
          onClick={() => setAutorSeleccionado(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeBtn}
              onClick={() => setAutorSeleccionado(null)}
            >
              ×
            </button>

            <h2 style={styles.modalTitle}>{autorSeleccionado.nombre}</h2>
            <img
              src={autorSeleccionado.imagen}
              alt={autorSeleccionado.nombre}
              style={styles.modalImage}
            />

            <p style={styles.modalText}>{autorSeleccionado.descripcion}</p>

            <p style={styles.modalText}>
              <strong>Obra destacada:</strong> {autorSeleccionado.obra}
            </p>

            <p style={styles.modalText}>{autorSeleccionado.detalle}</p>
          </div>
        </div>
      )}
      {/* MODAL LECTURA */}
      {mostrarLectura && (
        <div
          style={styles.modalOverlay}
          onClick={() => setMostrarLectura(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeBtn}
              onClick={() => setMostrarLectura(false)}
            >
              ×
            </button>

            <h2 style={styles.modalTitle}>Fragmento de Literatura Rusa</h2>

            <p style={styles.modalText}>
              “La nieve caía lentamente sobre las calles silenciosas de San
              Petersburgo. En medio de la oscuridad y el frío, el hombre
              caminaba cargando no solo el peso del invierno, sino también el de
              sus pensamientos. Porque en Rusia, incluso el alma parece cubrirse
              de nieve.”
            </p>

            <p style={styles.modalText}>
              La literatura rusa se caracteriza por explorar la culpa, el
              sufrimiento, la filosofía y la profundidad humana.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Georgia, serif",
    backgroundColor: "#0d1117",
    color: "#fff",
  },

  hero: {
    position: "relative",
    padding: "180px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #1e293b, #0f172a, #312e81)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))",
  },

  title: {
    position: "relative",
    fontSize: "4.5rem",
    zIndex: 2,
    marginBottom: "20px",
    color: "#f0ebeb",
  },

  subtitle: {
    position: "relative",
    zIndex: 2,
    maxWidth: "850px",
    margin: "auto",
    lineHeight: "1.8",
    color: "#d1d5db",
    fontSize: "1.2rem",
  },

  buttons: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "40px",
    background: "linear-gradient(135deg, #f59e0b, #d97706)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },

  secondaryBtn: {
    padding: "14px 30px",
    borderRadius: "40px",
    border: "2px solid #fff",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
  },

  extraInfo: {
    position: "relative",
    zIndex: 2,
    marginTop: "40px",
    maxWidth: "700px",
    marginInline: "auto",
    color: "#e5e7eb",
  },

  quoteSection: {
    padding: "80px 20px",
    backgroundColor: "#111827",
    textAlign: "center",
  },

  quote: {
    fontSize: "2rem",
    fontStyle: "italic",
    color: "#f3f4f6",
    maxWidth: "850px",
    margin: "auto",
  },

  gallerySection: {
    padding: "100px 20px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "50px",
    color: "#ffffff",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },

  bookCard: {
    backgroundColor: "#1e293b",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s",
    transform: "scale(1)",
transition: "all 0.4s ease",
  },

  bookImage: {
    width: "100%",
    height: "380px",
    objectFit: "cover",
  },

  bookContent: {
    padding: "25px",
  },

  bookTitle: {
    color: "#fbbf24",
    marginBottom: "10px",
    fontSize: "1.5rem",
  },

  bookAuthor: {
    color: "#9ca3af",
    marginBottom: "15px",
  },

  bookDescription: {
    color: "#d1d5db",
    lineHeight: "1.7",
  },

  section: {
    padding: "100px 20px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

card: {
  width: "300px",
  backgroundColor: "#1e293b",
  borderRadius: "20px",
  padding: "30px",
  cursor: "pointer",
  transition: "all 0.4s ease",
  transform: "translateY(0)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
},

  cardTitle: {
    color: "#fbbf24",
    marginBottom: "15px",
  },

  cardText: {
    color: "#d1d5db",
    lineHeight: "1.7",
  },

  statsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    padding: "80px 20px",
    backgroundColor: "#111827",
  },

  statCard: {
    backgroundColor: "#1f2937",
    padding: "40px",
    borderRadius: "20px",
    width: "250px",
    textAlign: "center",
  },

  timeline: {
    padding: "100px 20px",
  },

  timelineItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#1f2937",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    maxWidth: "800px",
    marginInline: "auto",
  },

  timelineDot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#f59e0b",
  },

  cta: {
    padding: "120px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #ffffff, #1e293b)",
  },

  ctaTitle: {
    fontSize: "3rem",
    marginBottom: "20px",
  },

  ctaText: {
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.8",
    color: "#d1d5db",
    marginBottom: "30px",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "600px",
    width: "90%",
    position: "relative",
  },

  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
  },

  modalTitle: {
    marginBottom: "20px",
  },

  modalText: {
    lineHeight: "1.8",
    marginBottom: "15px",
  },
  modalImage: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "20px",
  },
};

export default Main;
