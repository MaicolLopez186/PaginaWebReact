import "./App.css";
import Header from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header
        logo="Literatura Rusa"
        menu={[
          {
            nombre: "Inicio",
            link: "#inicio",
          },

          {
            nombre: "Libros",
            link: "#libros",
          },

          {
            nombre: "Autores",
            link: "#autores",
          },

          {
            nombre: "Curiosidades",
            link: "#curiosidades",
          },
        ]}
      />
      <Main
        titulo="La Grandeza de la Literatura Rusa"
        subtitulo="Un viaje por las obras más influyentes de Rusia, donde la filosofía, el sufrimiento, la política y el alma humana se mezclan en historias inolvidables."
        frase="El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive."
        autores={[
  {
    nombre: "Fiódor Dostoyevski",

    descripcion:
      "Exploró la psicología humana y los dilemas morales.",

    obra: "Crimen y Castigo",

    detalle:
      "Sus novelas profundizan en la culpa, el sufrimiento y la redención.",

    imagen:
      "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2021/11/08/16363981214401.jpg",
  },

  {
    nombre: "León Tolstói",

    descripcion:
      "Maestro del realismo ruso y autor de grandes epopeyas.",

    obra: "Guerra y Paz",

    detalle:
      "Retrató la sociedad rusa y los conflictos humanos con enorme detalle.",

    imagen:
      "https://www.biografiasyvidas.com/biografia/t/fotos/tolstoi_leon.jpg",
  },

  {
    nombre: "Antón Chéjov",

    descripcion:
      "Renovó el cuento moderno y el teatro psicológico.",

    obra: "La Gaviota",

    detalle:
      "Sus obras muestran emociones humanas simples pero profundas.",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sSCPoociq8U4ZA7Zl38FRREDQv8NPvUyfQ&s",
  },
]}
curiosidades={[
  "La literatura rusa influyó profundamente en la filosofía europea.",

  "Dostoyevski fue condenado a muerte antes de recibir un indulto.",

  "Tolstói abandonó gran parte de su fortuna al final de su vida.",

  "Muchos escritores rusos trabajaron bajo censura política.",

  "Las novelas rusas suelen explorar el sufrimiento humano y la moral.",
]}
        libros={[
          {
            nombre: "Crimen y Castigo",
            autor: "Fiódor Dostoyevski",

            descripcion:
              "Una novela psicológica que explora la culpa y la redención.",

            imagen:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBc5V4pfmt5AjEh0GWrSJKe2OBdObiwuCPQ&s",
          },

          {
            nombre: "Guerra y Paz",
            autor: "León Tolstói",

            descripcion:
              "Una obra maestra sobre la sociedad rusa durante las guerras napoleónicas.",

            imagen: "https://pictures.abebooks.com/inventory/31798938126_2.jpg",
          },

          {
            nombre: "Anna Karénina",
            autor: "León Tolstói",

            descripcion:
              "Una historia intensa sobre amor, tragedia y sociedad.",

            imagen:
              "https://imagessl2.casadellibro.com/a/l/t5/42/9788484288442.jpg",
          },

          {
            nombre: "Los Hermanos Karamázov",
            autor: "Fiódor Dostoyevski",

            descripcion:
              "Una obra filosófica sobre moralidad, fe y naturaleza humana.",

            imagen:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ORmHAyw662oYWOxs35zfM0VYJvM-4zMNNg&s",
          },
        ]}
      />
      <Footer
        descripcion="Un espacio dedicado a explorar las obras, autores y curiosidades más importantes de la literatura rusa clásica."
        autores={[
          "Fiódor Dostoyevski",
          "León Tolstói",
          "Antón Chéjov",
          "Iván Turguénev",
        ]}
        obras={[
          "Crimen y Castigo",
          "Guerra y Paz",
          "Anna Karénina",
          "Los Hermanos Karamázov",
        ]}
        ubicacion="Rusia 🇷🇺"
        fecha="Siglo XIX y XX"
      />
    </>
  );
}

export default App;
