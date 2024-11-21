import {Container, GameNames, GameRecord, Header} from "@/components/shared";


export default function Page() {

    return (
            <main className="min-h-screen bg-white rounded-3xl">
                <Header/>

                <Container className="pb-14">
                    <div className="flex gap-[60px]">
                        <div className="w-[250px]">
                            <GameNames/>
                        </div>
                        <div className="flex-1">
                            {/*<div className="flex items-center gap-6 mt-12">*/}
                                <GameRecord/>
                            {/*</div>*/}
                        </div>
                    </div>
                </Container>
            </main>
    );
}
