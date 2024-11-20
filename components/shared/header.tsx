import React from 'react';
import Image from 'next/image';
import { Container } from './container';
import { Button } from '../ui/button';
import {ArrowRight, CircleUser, ShoppingCart} from 'lucide-react';
import { SearchInput } from './search-input';
import { cn } from '@/lib/utils';
import { CartDrawer } from './cart-drawer';
import Link from "next/link";
import {Title} from "@/components/shared/title";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">

          <Link href="/">
            <Image src="/logo.png" width={35} height={35} alt="Logo"/>
          </Link>

          <div>
            <Link className="text-2xl uppercase font-black" href="/">
              <Title text="GAME RECORDS" size="sm" />
            </Link>
              <Link className="text-xs text-gray-600 leading-3" href="/">
            <p>рекорды ставки турниры гонки игры</p>
            </Link>
          </div>
        </div>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">

          <Link className="row-start-3 flex gap-6 flex-wrap items-center justify-center" href="/game-records">
          <Button variant="default">
          RECORDS

          </Button>
          </Link>
          <Button variant="outline" className="flex items-center gap-2">
            <CircleUser size={18} />
            Войти
          </Button>

          <CartDrawer>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </CartDrawer>
        </div>
      </Container>
    </header>
  );
};
