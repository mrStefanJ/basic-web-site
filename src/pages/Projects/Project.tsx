import { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../data/data";
import "./style.css";

const Project = () => {
  const categories = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Design",
  ];

  const categoryMap: { [key: string]: string } = {
    "Web Development": "web",
    "Mobile Development": "mobile",
    "Data Science": "data-science",
    Design: "design",
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (categor: any) => {
    setActiveCategory(categor);
  };

  const filteredProjects = data.filter(
    (project) => project.category === categoryMap[activeCategory]
  );

  return (
    <section className="project__container">
      <div className="project__category">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category__button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <div className="category__list">
          {filteredProjects.map((project: any) => (
            <div className="project__card" key={project.id}>
              <p className="project__name">{project.title}</p>
              <p className="project__description">{project.description}</p>
              <NavLink to={`${project.id}`} className="project__link">
                Read More
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Project;
