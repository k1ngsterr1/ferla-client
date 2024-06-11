import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import styles from "./styles.module.scss";

interface ISolutionTab {
  name: string;
  href: string;
  id: string;
}

export const SolutionTab: React.FC<ISolutionTab> = ({ name, href, id }) => {
  return (
    <div className={`${styles.solution_tab} hoverable`}>
      <FontAwesomeIcon icon={faStar} className={styles.solution_tab__star} />
      <div className={styles.solution_tab__text}>
        <span className={styles.solution_tab__name} id={id}>
          {name}
        </span>
        <span className="flex items-center gap-2">
          <a href={href} className={`${styles.solution_tab__link} hoverable`}>
            Learn More
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
