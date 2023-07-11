import { Text, Image, Center, VStack } from "@chakra-ui/react";
import styles from "./About.module.scss";
import NextImage from "next/image";
import Head from "next/head";
const About = () => {
  return (
    <div
      className="About"
      style={{
        width: 1440,
        height: 1024,
        position: "relative",
        background: "white",
      }}>
      <NextImage
        src="/img/global/grid-background-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
      <div
        className="MaskGroup"
        style={{
          width: 512,
          height: 512,
          left: -194,
          top: 137,
          position: "absolute",
        }}>
        <div
          className="Ellipse24"
          style={{
            width: 512,
            height: 512,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#6FC5B5",
            borderRadius: 9999,
          }}
        />
        <div
          className="Ellipse23"
          style={{
            width: 512,
            height: 512,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#6FC5B5",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="About"
        style={{
          width: 234,
          height: 171,
          left: 105,
          top: 203,
          position: "absolute",
          color: "black",
          fontSize: 64,
          fontFamily: "Scrapbook",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        about
      </div>
      <img
        className="notepad"
        style={{
          width: 979,
          height: 585,
          left: 339,
          top: 188,
          position: "absolute",
        }}
        src="/img/about/notepad.png"
      />
      <img
        className="UntitledArtwork31"
        style={{
          width: 437,
          height: 302,
          left: 1037,
          top: 87,
          position: "absolute",
        }}
        src="/img/about/banner_mask.svg"
      />
      <div
        className="Description"
        style={{
          width: 675,
          left: 523,
          top: 225,
          position: "absolute",
          color: "white",
          fontSize: 30,
          fontFamily: "Comic Sans MS",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        Innovate, reimagine, and shape the future this year at HackGT X: Journal
        of Memories from October 13th - 15th! The tenth iteration of our
        flagship hackathon is bringing a hack to remember to all our HackGT
        creators. This year's event will be back to an in-person experience, so
        get ready for a weekend packed with action! Buff your hacking stats,
        make incredible team-ups, and build your community among the 1,500+
        passionate hackers we invite each year.
      </div>
      <img
        className="registrationBox"
        style={{
          width: 984,
          height: 243,
          left: 86,
          top: 737,
          position: "absolute",
        }}
        src="/img/about/reg-box.png"
      />
      <div
        className="RegistrationWillOpenOn"
        style={{
          left: 202,
          top: 772,
          position: "absolute",
          color: "#608774",
          fontSize: 50,
          fontFamily: "Scrapbook",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        Registration will open on{" "}
      </div>
      <div
        className="September12023"
        style={{
          left: 299,
          top: 859,
          position: "absolute",
          color: "#466455",
          fontSize: 50,
          fontFamily: "Scrapbook",
          fontWeight: "500",
          wordWrap: "break-word",
        }}>
        September 1, 2023
      </div>
      <img
        className="Laptop"
        style={{
          width: 291,
          height: 238,
          left: 973,
          top: 737,
          position: "absolute",
        }}
        src="/img/about/laptop.png"
      />
    </div>
  );
};

export default About;
