import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <main className="min-h-screen bg-white rounded-3xl">
                <Link className="row-start-3 flex gap-6 flex-wrap items-center justify-center" href="/public">
                    <Button variant="default">
                        HOME
                    </Button>
                </Link>
            </main>
        </div>
    );
}
