import Link from "next/link";
import {Button} from "@/shared/components/ui/button";

export default function Home() {
  return (
    <div>
        <Link className="row-start-3 flex gap-6 flex-wrap items-center justify-center" href="/">
            <Button variant="default">
                HOME
            </Button>
        </Link>
    </div>
  );
}
