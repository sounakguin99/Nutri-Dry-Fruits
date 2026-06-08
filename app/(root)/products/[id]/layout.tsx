import { Metadata } from 'next';
import { products } from "../../../../components/data/products/products";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.shortdescription || product.longdescription?.substring(0, 160),
    openGraph: {
      images: [product.src],
    },
  };
}

export default function ProductLayout({ children }: Props) {
  return <>{children}</>;
}
