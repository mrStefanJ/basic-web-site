import "../style.css";

const Mobile = () => {
  return (
    <section className="container">
      <h1 className="container__title">Mobile Development</h1>
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
        Involves creating apps specifically for one platform, either Android or
        iOS. Native apps are written in platform-specific languages and can
        fully utilize the device’s hardware and software features.
      </p>
      <div className="container__technologie">
        <p className="container__technologie-text">Key Technologies:</p>
        <ul>
          <li>
            For Android: Java, Kotlin, and Android SDK (Software Development
            Kit).
          </li>
          <li>For iOS: Swift, Objective-C, and iOS SDK.</li>
        </ul>

        <p className="container__technologie-text">Responsibilites:</p>
        <ul>
          <li>
            Building high-performance apps that are optimized for the target
            platform.
          </li>
          <li>Ensuring apps adhere to platform-specific design guidelines.</li>
          <li>
            Integrating device features like the camera, GPS, notifications, and
            sensors.
          </li>
        </ul>
      </div>
      <p className="container__about">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
    </section>
  );
};

export default Mobile;
