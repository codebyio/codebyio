import Image from "next/image";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";

import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import WHALECALL from "../../../public/assets/images/WHALECALL.png";
import ContactCard from "@/components/ContactCard/ContactCard";

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
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} data-aos='zoom-in'>
            <ContactCard
              title='Message us'
              subtitle='Speak to our friendly team.'
              icon={<MdLocalPhone />}
              link='https://wa.me/+6287810082828'
              linkLabel='+62 878-1008-2828'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} data-aos='zoom-in' data-aos-delay='100'>
            <ContactCard
              title='Drop us a message'
              subtitle='Speak to our friendly team.'
              icon={<MdEmail />}
              link='mailto:hi.codebyio@gmail.com'
              linkLabel='hi.codebyio@gmail.com'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} data-aos='zoom-in' data-aos-delay='200'>
            <ContactCard
              title='Connect with us'
              subtitle='Follow us on our journey.'
              icon={<FaInstagram />}
              link='https://instagram.com/codeby.io'
              linkLabel='@codeby.io'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} data-aos='zoom-in' data-aos-delay='300'>
            <ContactCard
              title='Find Us'
              subtitle='Don’t worry we work remotely'
              icon={<MdLocationPin />}
              link='https://www.google.com/maps/place/BSD+Central+Business+District/@-6.3004279,106.6243017,15z/data=!4m10!1m2!2m1!1sbsd!3m6!1s0x2e69fb4de7e40e41:0xa821ece45c882e06!8m2!3d-6.3004279!4d106.6433561!15sCgNic2SSAQ9idXNpbmVzc19jZW50ZXKqATQQASoHIgNic2QoADIeEAEiGs5vyo1L0fHTmWXNzewTQsEkHZeFZb_0upi6MgcQAiIDYnNk4AEA!16s%2Fg%2F11f3czmt7l?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D'
              linkLabel='View on Google Maps'
            />
          </Grid2>
        </Grid2>
      </Section>
    </>
  );
}
