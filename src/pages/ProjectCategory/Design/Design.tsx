import "../style.css";

const Design = () => {
  return (
    <section className="container">
      <h1 className="container__title">Design</h1>
      <p className="container__about">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <p>
        We are focusing on visual communication through the use of typography,
        imagery, color, and layout. We used to create materials such as logos,
        advertisements, brochures, posters, and digital content.
      </p>
      <div className="container__technologie">
        <p className="container__technologie-text">Key Areas of Design:</p>
        <ul>
          <li>Graphic Design</li>
          <li>Product Design</li>
          <li>Web Design</li>
          <li>User Experience (UX) Design</li>
          <li>User Interface (UI) Design</li>
          <li>Interior Design</li>
        </ul>

        <p className="container__technologie-text">Responsibilites:</p>
        <ul>
          <li>
            Developing visual identities for brands, including logos and color
            schemes.
          </li>
          <li>
            Designing marketing materials, such as social media graphics,
            banners, and infographics.
          </li>
          <li>
            Creating user interfaces for websites and applications, ensuring
            clarity and usability.
          </li>
        </ul>
      </div>
      <div className="container__project"></div>
    </section>
  );
};

export default Design;
