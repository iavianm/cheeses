import { notFound } from "next/navigation";
import productionData from "@/content/productionContent.json";
import Card from "@/components/Card/Card";

const ProductPage = ({ params }) => {
  const id = params["id"];

  const product = productionData.productionContent.find(
    (item) => item.id.toString() === id,
  );

  if (!product) notFound();

  if (!product) {
    return null;
  }

  return <Card content={product} />;
};

export default ProductPage;
