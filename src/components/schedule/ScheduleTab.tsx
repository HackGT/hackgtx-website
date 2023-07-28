import { Center, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

import styles from "./Schedule.module.scss";

type Props = {
  virtual: boolean;
};

// note: remove the Center and VStack Component when bring in the schedule

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div
    className={styles.container}
    style={{
      width: 1440,
      height: 1024,
      position: "relative",
    }}>
    <VStack>
      <div
        style={{
          left: 600,
          top: 100,
          position: "absolute",
          color: "#000000",
          fontSize: 50,
          fontFamily: "Scrapbook",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        Schedule
      </div>
      <div
        style={{
          left: 640,
          top: 200,
          position: "absolute",
          color: "#000000",
          fontSize: 20,
          fontFamily: "Scrapbook",
          fontWeight: "20",
          wordWrap: "break-word",
        }}>
        coming soon :D
      </div>
    </VStack>
  </div>
);
export default ScheduleTab;
