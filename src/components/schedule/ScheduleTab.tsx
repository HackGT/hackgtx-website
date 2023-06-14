import { Center, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";

import styles from "./Schedule.module.scss";

type Props = {
  virtual: boolean;
};

// note: remove the Center and VStack Component when bring in the schedule

const ScheduleTab: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <VStack>
      <Text className={styles.title}>Schedule</Text>
      <Text className={styles.subtext}>coming soon :D</Text>
    </VStack>
  </div>
);
export default ScheduleTab;
