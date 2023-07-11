import { Collapse, HStack, Text, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./TracksChallenges.module.scss";
import track1 from "public/img/tracks/track1.png"

interface TDProps {
  key: any;
  track: string;
  description: string;
}

/* Track and Description */
const TD = (tdp: TDProps) => {

  return (
    <VStack spacing={"0px"} className={styles.td}>
      <Image src={track1} className={styles.track} />
    </VStack>
  );
};

export default TD;
