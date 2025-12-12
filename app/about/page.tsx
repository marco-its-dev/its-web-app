import { PageTitle } from "@/components/PageTitle";
import { ReactElement } from "react";

const About = (): ReactElement => {
  return (
    <div>
      <PageTitle title="About Page!" />
      <video className="py-[2vw]" src="/about_video.mp4" controls loop></video>

      <div className="flex row pb-[2vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44608.53659588235!2d12.193881894658894!3d45.67022704570683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477937d3c10cde51%3A0x42f69b005c22748d!2s31100%20Treviso%20TV!5e0!3m2!1sit!2sit!4v1764951611290!5m2!1sit!2sit"
          width="50%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <iframe
          width="50%"
          height="450"
          src="https://www.youtube.com/embed/SqHrqKedtco?si=zQQd8TfHWVb4UluP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
