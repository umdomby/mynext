import { Categories } from '@/components/shared/categories';
import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';

import { Header } from '@/components/shared/header';
// import { ProductsGroupList } from '@/components/shared/products-group-list';
import { SortPopup } from '@/components/shared/sort-popup';
import { Title } from '@/components/shared/title';
import {prisma} from "@/prisma/prisma-client";
import {ProductsGroupList} from "@/components/shared/products-group-list";
import {Suspense} from "react";

export default async function Home() {

    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    items: true,
                }
            },
        }
    });

    // const categories = await prisma.category.findMany({});
    // console.log(categories);


    return (
        <main className="min-h-screen bg-white rounded-3xl">
            {/*<Header />*/}

            <Container className="mt-5">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
                <Container className="flex items-center justify-between ">
                    {/*<Categories />*/}
                    <SortPopup />
                </Container>
            </div>

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters />
                        </Suspense>
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map((category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            categoryId={category.id}
                                            items={category.products}
                                        />
                                    ),
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
