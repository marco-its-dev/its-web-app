import Image from "next/image";
import { title } from "process";
import { FC, ReactElement } from "react";

type SideImageProps = {
  url: string;
};

const SideImage: FC<SideImageProps> = ({ url }) => {
  return (
    <div className="w-[50%]">
      <Image
        className="w-full max-h-[50vh]"
        width={100}
        height={100}
        src={url}
        alt="feature-image"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

type TextWithSideImageProps = {
  title: string;
  content: string;
  imageUrl: string;
  imagePosition: "left" | "right";
};

export const TextWithSideImage: FC<TextWithSideImageProps> = ({
  title,
  content,
  imageUrl,
  imagePosition,
}): ReactElement => {
  const isLeft: boolean = imagePosition === "left";

  return (
    <section style={{ paddingBottom: "2vh" }}>
      <div className="w-full flex row">
        {isLeft && <SideImage url={imageUrl} />}

        <div className={`w-[50%] ${isLeft && "pl-[2vw]"}`}>
          <h2 className="text-cyan-200 font-extrabold">{title}</h2>
          <p>{content}</p>
        </div>

        {!isLeft && <SideImage url={imageUrl} />}
      </div>
    </section>
  );
};
