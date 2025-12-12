import { PageTitle } from "@/components/PageTitle";
import { TextWithSideImage } from "@/components/TextWithSideImage";

export default function Home() {
  return (
    <>
      <PageTitle title="Welcome to this Website!" />

      <TextWithSideImage
        title="Welcome Section"
        content="Welcome to our website! Explore our latest updates."
        imageUrl="/home_frist_paragraph.jpg"
        imagePosition="right"
      />

      <TextWithSideImage
        title="Our Uniqueness"
        content="Discover what makes us unique and innovative."
        imageUrl="/home_second_paragraph.jpg"
        imagePosition="left"
      />

      <TextWithSideImage
        title="Get Started"
        content="Your journey with us starts here—let's make it amazing!"
        imageUrl="/home_third_paragraph.jpg"
        imagePosition="right"
      />

      <TextWithSideImage
        title="Our Solutions"
        content="We create solutions that truly make a difference."
        imageUrl="/home_frist_paragraph.jpg"
        imagePosition="left"
      />
    </>
  );
}
