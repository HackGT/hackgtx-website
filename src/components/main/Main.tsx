import {
  Center,
  VStack,
  Text,
  Link,
  HStack,
  Image,
  Box,
  Button,
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
        className="grid-background-image"
        src="/img/global/grid-background-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
      <Image
        className={styles.crumpled_paper}
        style={{
          position: "absolute",
        }}
        src="/svg/home/crumpled_paper.svg"
        alt="crumpled_paper"
      />
      <Image
        className={styles.rectangle}
        style={{
          position: "absolute",
        }}
        src="/svg/home/rectangle.svg"
        alt="rectangle"
      />
      <Image
        className={styles.logo}
        style={{
          position: "absolute",
        }}
        src="/svg/home/hexlabslogo.svg"
        alt="logo"
      />
      <Image
        className={styles.green_star}
        style={{
          position: "absolute",
        }}
        src="/svg/home/green_star.svg"
        alt="logo"
      />
      <Image
        className={styles.pink_star}
        style={{
          position: "absolute",
        }}
        src="/svg/home/pink_star.svg"
        alt="logo"
      />
      <Image
          className={styles.hackgt_text}
          style={{
            position: "absolute",
          }}
          src="/svg/home/hackgt_text.svg"
          alt="hackgt_text"
      />
      <Image
        className={styles.brown_blurb}
        style={{
          position: "absolute",
        }}
        src="/svg/home/brown_blurb.svg"
        alt="brown_blurb"
      />
      <Image
        className={styles.dates_blurb}
        style={{
          position: "absolute",
        }}
        src="/svg/home/dates_blurb.svg"
        alt="dates_blurb"
      />
      <Image
        className={styles.comb1}
        style={{
          position: "absolute",
        }}
        src="/svg/home/comb.svg"
        alt="comb1"
      />
      <Image
        className={styles.comb2}
        style={{
          position: "absolute",
        }}
        src="/svg/home/comb.svg"
        alt="comb2"
      />
      <Image
        className={styles.location_blurb}
        style={{
          position: "absolute",
        }}
        src="/svg/home/location_blurb.svg"
        alt="location_blurb"
      />
      <Image
        className={styles.random_text_blurb}
        style={{
          position: "absolute",
        }}
        src="/svg/home/random_text_blurb.svg"
        alt="random_text_blurb"
      />
      <Link
        href="https://registration.hexlabs.org/"
        isExternal
      >
        <Image
          className={styles.register_now}
          style={{
            position: "absolute",
          }}
          src="/svg/home/register_now.svg"
          alt="register_now"
        />
      </Link>

    </div>
  );
};

export default Main;
