"use client";

import { carouselIconsUriList } from "@/config/carouselIcons";
import { Observable, observable, ObservablePrimitive } from "@legendapp/state";
import Image from "next/image";
import { useEffect } from "react";
import { Product } from "../models/product";
import { observer } from "@legendapp/state/react";

const products: Observable<Product[] | []> = observable([]);

const fetchProducts = async () => {
  try {
    const res = await fetch("http://192.168.56.1:3000/api/products");
    const json = await res.json();
    console.log("Parsed", json);
    products.set(json.payload as Product[]);
    return json.payload.payload;
  } catch (error) {
    console.warn(error);
    return;
  }
};

const Products = observer(() => {
  useEffect(() => {
    (async () => {
      await fetchProducts();
      console.log(products.get());
    })();
  }, []);

  return (
    <>
      {products.get().map((product, index) => {
        return (
          <div key={index}>
            <p>{product?.title}</p>
            <Image
              src={product?.uri}
              width={200}
              height={200}
              alt={`Product number: ${index + 1}`}
            />
          </div>
        );
      })}

      <div className="flex flex-row flex-wrap">
        {carouselIconsUriList.map((uri: string, index: number) => {
          return (
            <div className="w-[20%]" key={index}>
              <Image
                src={uri}
                width={200}
                height={200}
                alt={`Product number: ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Products;
