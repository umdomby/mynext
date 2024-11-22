'use client';

import {GameName} from '@prisma/client';
import React, {useEffect} from 'react';
import {Api} from "@/shared/services/api-client";

import {
    Table,
    TableBody,
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
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">GAME</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {gameName.map((gameName) => (
                    <TableRow key={gameName.id}>
                        <TableCell className="font-medium">{gameName.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>

    );
};
