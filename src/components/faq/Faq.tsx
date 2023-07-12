import { Center, Image, Text, VStack } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";
import NextImage from "next/image"

import qas from "./FAQ.json";
import HardwareQ from "./HardwareQ";
import AdmissionQ from "./AdmissionQ";

const Faq = () => {
  return (
    <div
    className={styles.container}
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
    <VStack>
      <div
        style={{
          left: 650,
          top: 100,
          position: "absolute",
          color: "#000000",
          fontSize: 50,
          fontFamily: "Scrapbook",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        FAQ
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
};

export default Faq;
