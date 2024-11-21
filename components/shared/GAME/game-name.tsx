'use client';

import {GameName} from '@prisma/client';
import React, {useEffect} from 'react';
import {Api} from "@/shared/services/api-client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const GameNames: React.FC = () => {

    const [gameName, setGameRecords] = React.useState<GameName[]>([]);

    useEffect (()  => {
        try {
            async function fetchData() {
                const response = await Api.gameName.getAll()
                setGameRecords(response);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (

        <div>
            <Table>
                {/*<TableCaption>GAME</TableCaption>*/}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">GAME</TableHead>
                        {/*<TableHead>Map</TableHead>*/}
                        {/*<TableHead >User</TableHead>*/}
                        {/*<TableHead className="text-right">Time</TableHead>*/}
                    </TableRow>
                </TableHeader>
                <TableBody>

                {gameName.map((gameName) => (
                    <TableRow key={gameName.id}>
                        <TableCell className="font-medium">{gameName.name}</TableCell>
                        {/*<TableCell>{gameName.description}</TableCell>*/}
                        {/*<TableCell>{gameName.userId}</TableCell>*/}
                        {/*<TableCell className="text-right">{gameName.timestate.substring(3)}</TableCell>*/}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>

    );
};
