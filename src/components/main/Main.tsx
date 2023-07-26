import {
  Link,
  Image,
} from "@chakra-ui/react";
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
        className={styles.logo_and_stars}
        style={{
          position: "absolute",
        }}
        src="/svg/home/logo_and_stars.svg"
        alt="logo_and_stars"
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
