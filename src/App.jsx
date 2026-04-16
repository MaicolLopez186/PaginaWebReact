import "./App.css";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Head />
      <Main
        titulo="Impulsa tu presencia digital "
        subtitulo="Diseñamos experiencias web modernas, rápidas y atractivas que destacan del resto."
        boton1="Empezar"
        boton2="Ver más"
        servicios={[
          {
            titulo: " Desarrollo Web",
            descripcion: "Aplicaciones modernas con alto rendimiento.",
          },
          {
            titulo: " Diseño UI/UX",
            descripcion: "Interfaces elegantes centradas en el usuario.",
          },
          {
            titulo: " Optimización",
            descripcion: "Velocidad y eficiencia al máximo nivel.",
          },
        ]}
        ctaTexto="¿Listo para llevar tu proyecto al siguiente nivel?"
        ctaBoton="Contáctanos"
      />
      <Footer
        descripcion={"Esta es una excelente empresa de desarrollo"}
        redes={["Facebook", "Twitter", "Instagram"]}
        fecha={2025}
        ubicacion={"Colombia"}
      />
    </>
  );
}

export default App;
