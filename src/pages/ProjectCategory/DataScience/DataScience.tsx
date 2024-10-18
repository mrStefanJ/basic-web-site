import "../style.css";

const DataScience = () => {
  return (
    <section className="container">
      <h1 className="container__title">Data Science</h1>
      <p className="container__about">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance.
      </p>
      <p>
        We are building and maintaining websites and applications that are
        accessible, responsive, fast, and secure.
      </p>
      <div className="container__technologie">
        <p className="container__technologie-text">
          Key Components of Data Science:
        </p>
        <ul>
          <li>Data Collection</li>
          <li>Data Cleaning and Preprocessing</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Data Analysis and Interpretation</li>
          <li>Machine Learning and Predictive Modeling</li>
          <li>Data Visualization and Reporting</li>
          <li>Data-Driven Decision Making</li>
        </ul>

        <p className="container__technologie-text">Responsibilites:</p>
        <ul>
          <li>
            Collecting raw data from diverse sources, such as APIs, databases,
            or web scraping.
          </li>
          <li>
            Ensuring the quality and reliability of data by filtering out
            incomplete, irrelevant, or inconsistent information.
          </li>
          <li>
            Handling large-scale data (often called "Big Data") using
            specialized tools like Hadoop or Spark.
          </li>
        </ul>
      </div>
      <div className="container__project"></div>
    </section>
  );
};

export default DataScience;
