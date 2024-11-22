import {Container, Header} from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import {PizzaImage} from "@/components/shared/pizza-image";

export default async function ProductPage({ params: { name } }: { params: { name: string } }) {
  const product = await prisma.product.findFirst({where: {name: decodeURI(name)}});

  if (!product) {
    return notFound();
  }

  return (
      <main className="min-h-screen bg-white rounded-3xl">
        {/*<Header/>*/}
        <Container className="flex flex-col my-10">
          <PizzaImage imageUrl={product.imageUrl} size={40}/>
        </Container>
      </main>
    );
  }
