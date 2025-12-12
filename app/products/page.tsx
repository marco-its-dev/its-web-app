import { carouselIconsUriList } from "@/config/carouselIcons";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {carouselIconsUriList.map((uri, index) => {
          return (
            <Image
              src={uri}
              width={200}
              height={200}
              alt={`Product number: ${index + 1}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
