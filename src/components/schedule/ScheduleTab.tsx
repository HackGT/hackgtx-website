import { Center, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image"

import styles from "./Schedule.module.scss";

type Props = {
  virtual: boolean;
};

// note: remove the Center and VStack Component when bring in the schedule

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
      <NextImage
        src="/img/global/grid-background-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
    <VStack>
      <Text className={styles.title}>Schedule</Text>
      <Text className={styles.subtext}>coming soon :D</Text>
    </VStack>
  </div>
);
export default ScheduleTab;
