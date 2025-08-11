import Image from "next/image";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";

import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import WHALECALL from "../../../public/assets/images/WHALECALL.png";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroBanner
        title='Contact Us'
        subtitle='Got an idea, a problem, or just not sure where to start?'
        alt='Hero Banner'
        subtitleType='short'
      />
      <Section position='center'>
        <h3 className='text-center'>
          Let’s talk it through. We’re here to listen, think with you, and help you figure out the
          best way forward — even if it starts with a simple question. Whether you're ready to build
          or just testing the waters, we’re the kind of team that loves diving in.
        </h3>
      </Section>
      <Section>
        <Grid2 container className={classes["contact-info"]}>
          <Grid2 size={{ xs: 12, sm: 5, md: 6 }}>
            <ul className={classes["contact-list"]}>
              <li>
                <a href='https://wa.me/+6287810082828' target='_blank' rel='nofollow'>
                  <span className={classes["contact-list__icon"]}>
                    <MdLocalPhone />
                  </span>
                  +62 878-1008-2828
                </a>
              </li>
              <li>
                <a href='mailto:hi.codebyio@gmail.com' target='_blank' rel='nofollow'>
                  <span className={classes["contact-list__icon"]}>
                    <MdEmail />
                  </span>
                  hi.codebyio@gmail.com
                </a>
              </li>
              <li>
                <a href='https://instagram.com/codeby.io' target='_blank' rel='nofollow'>
                  <span className={classes["contact-list__icon"]}>
                    <FaInstagram />
                  </span>
                  @codeby.io
                </a>
              </li>
              <li>
                <span className={classes["contact-list__icon"]}>
                  <MdLocationPin />
                </span>
                Jakarta, Indonesia
              </li>
            </ul>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7, md: 6 }}>
            <Image
              src={WHALECALL}
              className={classes["contact-img"]}
              alt='Whale Customer Service'
              unoptimized
            />
          </Grid2>
        </Grid2>
      </Section>
    </>
  );
}
