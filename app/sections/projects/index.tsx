import React from "react";
import { projectsData } from "./projectsData";
import ArticleProject from "./components/ArticleProject";
function ProjectsSection() {
  return (
    <div className=" flex flex-col gap-8">
      {projectsData.map(
        ({ title, description, stacksUsed, image, url, id }) => (
          <ArticleProject
            title={title}
            key={id}
            description={description}
            stacksUsed={stacksUsed}
            image={image}
            url={url}
            orientation={id % 2 ? "right" : "left"}
          />
        )
      )}
    </div>
  );
}

export default ProjectsSection;
