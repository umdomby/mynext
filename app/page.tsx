import { Button } from "@/shared/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div>
        <Link className="row-start-3 flex gap-6 flex-wrap items-center justify-center" href="/page">
            <Button variant="default">
                PAGE
            </Button>
        </Link>

    <main className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Main
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
    </footer>
    </div>
  );
}