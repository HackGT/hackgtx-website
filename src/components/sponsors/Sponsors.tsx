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

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.title}>Sponsors</Text>
      </VStack>
    </Center>
  );
};

export default Sponsors;
