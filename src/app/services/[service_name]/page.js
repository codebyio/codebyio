import { notFound } from "next/navigation";

import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";
import CtaSection from "@/components/shared/CtaSection/CtaSection";

import { services } from "../servicesData";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import FaqList from "@/components/shared/FaqList/FaqList";

import DISCUSSION from "../../../../public/assets/images/DISCUSSION.png";
import ServiceHeroBanner from "@/components/ServiceHeroBanner/ServiceHeroBanner";
import Image from "next/image";
import StepList from "@/components/shared/StepList/StepList";
import KeyPoint from "@/components/KeyPoint/KeyPoint";
import CoreValue from "@/components/shared/CoreValue/CoreValue";

export async function generateMetadata({ params }) {
  const { service_name } = params;
  const serviceData = services.find((service) => service.id === service_name);

  if (!serviceData) {
    return {
      title: "Service Not Found",
      description: "Sorry, this service does not exist.",
    };
  }

  return {
    title: `CodeByIO | ${serviceData.name}`,
    description: serviceData.heroBannerDescription,
  };
}

export default async function serviceDetail({ params }) {
  const { service_name } = params;
  const serviceData = services.find((service) => service.id === service_name);
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <ServiceHeroBanner
        title={serviceData.heroBannerTitle}
        description={serviceData.heroBannerDescription}
        image={serviceData.image}
        alt='Discussion'
      />
      <Section fillBg>
        <h3 className='text-center'>{serviceData.description}</h3>
      </Section>
      <Section>
        <SectionTitle title={serviceData.keyTitle} subtitle={serviceData.keyDescription} />
        <Grid2
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          flexWrap={{ xs: "nowrap", md: "wrap" }}
          sx={{ overflowX: { xs: "auto", md: "hidden" } }}
          width='100%'
        >
          {serviceData?.keyPoints?.map((keyPoint, index) => {
            return (
              <Grid2
                size={{
                  xs: 12,
                  sm: 6,
                  md: serviceData?.keyGridCount ?? 4,
                  lg: serviceData?.keyGridCount ?? 4,
                }}
                minWidth={{ xs: 300, md: "auto" }}
                key={`${index}_${keyPoint.title}`}
              >
                <CoreValue
                  title={keyPoint.title}
                  description={keyPoint.description}
                  descriptionLinks={keyPoint.links}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Section>
      <Section fillBg>
        <SectionTitle title='Partner Journey' horizontalStyle inverted />
        <StepList steps={serviceData.journey} inverted />
      </Section>
      <Section position='center'>
        <SectionTitle title={serviceData.faqTitle} />
        <FaqList faqList={serviceData.faqList} />
      </Section>
      <CtaSection />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { service_name: "website-development" },
    { service_name: "website-mockup" },
    { service_name: "tech-consultancy" },
    { service_name: "onestop-solution" },
  ];
}
