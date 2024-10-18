import "../style.css";

const Web = () => {
  return (
    <section className="container">
      <h1 className="container__title">Web Development</h1>
      <p className="container__about">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
      <p>
        We are building and maintaining websites and applications that are
        accessible, responsive, fast, and secure.
      </p>
      <div className="container__technologie">
        <p className="container__technologie-text">Key Technologies:</p>
        <ul>
          <li>
            HTML (Hypertext Markup Language): Defines the structure of the
            webpage.
          </li>
          <li>
            CSS (Cascading Style Sheets): Controls the appearance and style of
            the website (colors, fonts, layout).
          </li>
          <li>
            JavaScript: Adds interactivity and dynamic features, such as form
            validation, animations, or content updates without page reloads.
          </li>
        </ul>

        <p className="container__technologie-text">Responsibilites:</p>
        <ul>
          <li>
            Creating responsive designs that adapt to various screen sizes
          </li>
          <li>Ensuring websites are accessible and user-friendly.</li>
          <li>Optimizing websites for speed and performance.</li>
        </ul>
      </div>
      <div className="container__project"></div>
    </section>
  );
};

export default Web;
