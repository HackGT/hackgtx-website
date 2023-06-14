/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { HStack, Box, Menu, MenuButton, MenuItem, MenuList, Center, Link } from "@chakra-ui/react";
import { useEffect } from "react";

interface Anchor {
  name: string;
  id: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {

  return (
    <div>
      <Box className={styles.navbarContainer}>.</Box>
      <a
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
        id={styles.mlh}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
        />
      </a>
      <Center>
        <Box className={styles.navbg}>`</Box>
        <Box className={styles.progressBar} id="myBar"></Box>
        <HStack draggable="false" className={styles.container} spacing={"8vw"}>
          {np.anchors.map((anchor) => (
            <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
          ))}
        </HStack>
      </Center>

      <div className={styles.menu}>
        <Menu>
          <MenuButton>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 18.1915H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.5 9H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.5 27.3829H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MenuButton>
          <MenuList>
            <Link href="#home">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link href="#about">
              <MenuItem>About</MenuItem>
            </Link>
            <Link href="#tracks_and_challenges">
              <MenuItem>Tracks</MenuItem>
            </Link>
            <Link href="#faq">
              <MenuItem>FAQ</MenuItem>
            </Link>
            <Link href="#schedule">
              <MenuItem>Schedule</MenuItem>
            </Link>
            <Link href="#sponsors">
              <MenuItem>Sponsors</MenuItem>
            </Link>
            <Link href="#sponsors">
              <MenuItem>Apply</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};


export default Navbar;
