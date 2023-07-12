import {
  Center,
  VStack,
  Text,
  Link,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";
import ImageWrapper from "../image/ImageWrapper";
import styles from "./Main.module.scss";
import NextImage from "next/image";

interface MainProps {
  toJump: string;
}

const Main = (mp: MainProps) => {
  return (
    <div
      className={styles.title_box}
      style={{
        width: 1440,
        height: 1024,
        position: "relative",
      }}
    >
      <NextImage
        src="/img/global/grid-background-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
      <Center>
        {/* <VStack className={styles.title_stack}>
          <Text className={styles.title}>HackGT X</Text>
          <Box>
            <Center className={styles.description}>
              <Text className={styles.motto}>A JOURNAL OF MEMORIES</Text>
            </Center>
          </Box>
          <Text className={styles.description}>October 13th to 15th</Text>
        </VStack> */}
        <VStack>
          <div
          className="OpenRegistration"
          style={{
            left: 450,
            top: 200,
            position: "absolute",
            color: "#000000",
            fontSize: 100,
            fontFamily: "Scrapbook",
            fontWeight: "500",
            wordWrap: "break-word",
          }}>
          HackGT X
        </div>
        <div
          className="OpenRegistration"
          style={{
            left: 350,
            top: 400,
            position: "absolute",
            color: "#000000",
            fontSize: 50,
            fontFamily: "Scrapbook",
            fontWeight: "500",
            wordWrap: "break-word",
          }}>
          A JOURNAL OF MEMORIES
        </div>
        <div
          className="OpenRegistration"
          style={{
            left: 550,
            top: 500,
            position: "absolute",
            color: "#000000",
            fontSize: 30,
            fontFamily: "Scrapbook",
            fontWeight: "500",
            wordWrap: "break-word",
          }}>
          October 13th to 15th
        </div>
        </VStack>
      </Center>
    </div>
  );
};

export default Main;
