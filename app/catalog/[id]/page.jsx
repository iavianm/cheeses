"use client";
import { useRouter } from "next/navigation";
import { productionContent } from "@/content/productionContent.json";
import Card from "@/components/Card/Card";

const ProductPage = ({ params }) => {
  const id = params["id"];
  const router = useRouter();

  const product = productionContent.find((item) => item.id == id);

  if (!product) {
    router.push("/404");
  }

  if (!product) {
    return null;
  }

  return <Card content={product} />;
};

export default ProductPage;
