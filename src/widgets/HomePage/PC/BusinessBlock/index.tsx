"use client";
import React from "react";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SolutionTab } from "@entities/SolutionTab";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";
import { ArrowLeft } from "@shared/ui/ArrowLeft";
import Button from "@shared/ui/Button";

import styles from "./styles.module.scss";

export const BusinessBlock = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.business_block} id="perfect">
      <div className="flex flex-col items-start w-full">
        <div className={styles.business_block__upper}>
          <h2
            className={styles.business_block__upper__heading}
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_5"
          >
            {/* Perfect{" "}
            <strong
              className="text-red"
              id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_6"
            >
              for Any Business
            </strong> */}
            {content && content["5"] ? content["5"].value : "Content not found"}
          </h2>
          <MiniText
            text={
              content && content["6"] ? content["6"].value : "Content not found"
            }
            id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_7"
          />
        </div>
        <div className={styles.business_block__perfect}>
          <div
            className={`flex flex-col items-start ${styles.business_block__perfect__content}`}
          >
            <div className="flex items-start gap-12">
              <ArrowLeft />
              <div className="flex flex-col items-start">
                <p
                  className={styles.business_block__perfect__paragraph}
                  id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_8"
                >
                  {content && content["7"]
                    ? content["7"].value
                    : "Content not found"}
                </p>
                <Button
                  id="form"
                  text="Get Started"
                  buttonType="transparent"
                  margin="mt-4"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className={`flex justify-center items-center gap-4 ${styles.business_block__perfect__upper_tab}`}
            >
              <SolutionTab
                name={
                  content && content["8"]
                    ? content["8"].value
                    : "Content not found"
                }
                href="AAA"
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_9"
              />
              <SolutionTab
                name={
                  content && content["9"]
                    ? content["9"].value
                    : "Content not found"
                }
                href="AAA"
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_10"
              />
            </div>
            <div
              className={`flex justify-center items-center gap-4 mt-4 ${styles.business_block__perfect__lower_tab}`}
            >
              <SolutionTab
                name={
                  content && content["10"]
                    ? content["10"].value
                    : "Content not found"
                }
                href="AAA"
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_11"
              />
              <SolutionTab
                name={
                  content && content["11"]
                    ? content["11"].value
                    : "Content not found"
                }
                href="AAA"
                id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
