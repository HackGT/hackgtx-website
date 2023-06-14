import { Text, Image, Center, VStack } from "@chakra-ui/react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.container}>
      <Text className={styles.title}> About</Text>
    </div>
  );
};

export default About;
