import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/shared";

export default function Home() {
  return (
      <div>

          <main className="min-h-screen bg-white rounded-3xl">
              <Header/>
              <Link className="row-start-3 flex gap-6 flex-wrap items-center justify-center" href="/">
                  <Button variant="default">
                      HOME
                  </Button>
              </Link>
          </main>

      </div>
);
}
