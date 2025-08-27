"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import Grid2 from "@mui/material/Grid2";
import WHALE_TAIL from "../../../../public/assets/images/WHALE_TAIL.png";
import classes from "./PartnerJourney.module.css";

const generateSerpentineData = (data, columns) => {
  const result = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = data.slice(i, i + columns);
    if ((i / columns) % 2 === 1) {
      row.reverse();
    }
    result.push(...row);
  }
  return result;
};

const PartnerJourney = ({ steps, inverted }) => {
  const corneredIndex = [3, 6, 9];

  // state untuk deteksi desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // function untuk cek window size
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // misalnya breakpoint 1024px
    };

    checkIsDesktop(); // run pertama kali
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const cornerStyles = useMemo(() => {
    if (!isDesktop) return {}; // kalau bukan desktop, skip

    let current = "right"; // mulai dari right di index 2
    return steps.reduce((acc, step, idx) => {
      if (corneredIndex.includes(step.index)) {
        acc[step.index] = current;
        current = current === "right" ? "left" : "right";
      } else {
        acc[step.index] = null;
      }

      if (idx === steps.length - 1) {
        acc[step.index] = null;
      }
      return acc;
    }, {});
  }, [steps, corneredIndex, isDesktop]);

  const serpentedStep = useMemo(() => {
    return isDesktop ? generateSerpentineData(steps, 3) : steps;
  }, [steps, isDesktop]);

  return (
    <Grid2 container className={`${classes["steplist"]} ${inverted && classes["inverted"]}`}>
      {serpentedStep &&
        serpentedStep.map((step, index) => {
          return (
            <Grid2
              size={{ xs: 12, md: 4 }}
              className={`${classes["steplist__item"]} ${
                cornerStyles[step.index] ? classes["corner-" + cornerStyles[step.index]] : ""
              }`}
              key={`${step.title}_${index + 1}`}
              data-aos='fade-down'
              data-aos-delay={index * 100}
            >
              <div className={classes["steplist__index"]}>
                <span className={classes["steplist__index-value"]}>{step.index}</span>
                {serpentedStep.length - 1 === index && (
                  <Image
                    src={WHALE_TAIL}
                    className={classes["whale-tail"]}
                    alt='Whale Tail'
                    unoptimized
                  />
                )}
              </div>
              <div className={classes["steplist__item-content"]}>
                <h2>{step.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: step.description ?? "" }}></p>
              </div>
            </Grid2>
          );
        })}
    </Grid2>
  );
};

export default PartnerJourney;
