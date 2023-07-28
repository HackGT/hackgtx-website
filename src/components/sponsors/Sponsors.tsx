import {
  Center,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center className={styles.container}
      style={{
        width: 1440,
        height: 1024,
        position: "relative",
      }}
    >
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
        Sponsors
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
    </Center>
  );
};

export default Sponsors;
