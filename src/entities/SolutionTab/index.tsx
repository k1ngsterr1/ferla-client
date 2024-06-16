import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import styles from "./styles.module.scss";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

interface ISolutionTab {
  name: string;
  href: string;
  id: string;
}

export const SolutionTab: React.FC<ISolutionTab> = ({ name, href, id }) => {
  const { content } = useFetchContent();

  return (
    <div className={`${styles.solution_tab} hoverable`}>
      <FontAwesomeIcon icon={faStar} className={styles.solution_tab__star} />
      <div className={styles.solution_tab__text}>
        <span className={styles.solution_tab__name} id={id}>
          {name}
        </span>
        <span className="flex items-center gap-2">
          <a
            href={href}
            className={`${styles.solution_tab__link} hoverable`}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_14"
          >
            {content && content["13"]
              ? content["13"].value
              : "Content Not Found"}
          </a>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.solution_tab__icon}
          />
        </span>
      </div>
    </div>
  );
};
