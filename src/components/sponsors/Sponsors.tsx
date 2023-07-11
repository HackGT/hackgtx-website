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
    <Center className={styles.container}>
      <NextImage
        src="/img/global/grid-background-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
      <VStack>
        <Text className={styles.title}>Sponsors</Text>
      </VStack>
    </Center>
  );
};

export default Sponsors;
