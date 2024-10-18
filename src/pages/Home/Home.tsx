import {
  faComputer,
  faDatabase,
  faDesktop,
  faLaptop,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { images } from "../../data/data";
import "./style.css";

const targetCounts = [10, 20, 15, 25, 18];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counts, setCounts] = useState(Array(targetCounts.length).fill(0));
  const iconsSectionRef = useRef<HTMLDivElement | null>(null);
  const hasCountStarted = useRef(false);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Start counting when scrolling to the icons section
  useEffect(() => {
    const startCounting = () => {
      const duration = 2000; // Duration for the animation (in milliseconds)
      const increments = targetCounts.map(
        (target) => target / (duration / 100)
      ); // Calculate increments for each target

      const intervals = targetCounts.map((target, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < target) {
              newCounts[index] = Math.ceil(
                newCounts[index] + increments[index]
              );
              return newCounts;
            } else {
              clearInterval(intervals[index]); // Stop counting when target is reached
              return newCounts;
            }
          });
        }, 100); // Update every 100ms
      });
    };

    const currentIconsSection = iconsSectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCountStarted.current) {
          hasCountStarted.current = true; // Ensure counting starts only once
          entry.target.classList.add("show"); // Add the 'show' class
          startCounting(); // Start counting
        }
      });
    });

    if (currentIconsSection) {
      observer.observe(currentIconsSection);
    }

    return () => {
      if (currentIconsSection) {
        observer.unobserve(currentIconsSection); // Cleanup observer
      }
    };
  }, []);

  return (
    <section className="home__container">
      <div className="slider">
        <div
          className="slider__wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              className={`slider__image ${
                currentIndex === index ? "active" : ""
              }`}
              src={src}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="home__technology-specialists">
        <div className="technology-specialists__image">
          <p className="technology-specialists__text">
            Creating new component, feature, layout, responsive and Fixing
          </p>
          <div ref={iconsSectionRef} className="technology-specialists__icons">
            {targetCounts.map((targetCount, index) => (
              <div key={index} className="icon">
                <FontAwesomeIcon
                  icon={
                    [faDesktop, faComputer, faServer, faDatabase, faLaptop][
                      index
                    ]
                  }
                />
                <p className="number__count">{counts[index]} +</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home__technology">
        <p className="home__technology-text">Technology we are using</p>
        <div className="home__technology-list">
          <div className="technology__card">
            <p className="position">Frontend:</p>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>JavaSCript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="technology__card">
            <p className="position">Backend:</p>
            <ul>
              <li>.NET</li>
              <li>SQL / SQLite / MySQL</li>
            </ul>
          </div>
          <div className="technology__card">
            <p className="position">Design:</p>
            <ul>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Sketch</li>
            </ul>
          </div>
          <div className="technology__card">
            <p className="position">Style:</p>
            <ul>
              <li>CSS3 / SCSS / SASS</li>
              <li>Tailwind</li>
              <li>Style Component</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
