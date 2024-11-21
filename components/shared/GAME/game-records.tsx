'use client';

import {GameRecords} from '@prisma/client';
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

export const GameRecord: React.FC = () => {

    const [gameRecords, setGameRecords] = React.useState<GameRecords[]>([]);

    useEffect (()  => {
        try {
            async function fetchData() {
                const response = await Api.gameRecords.getAll()
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
                <TableCaption>Need For Speed Records</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">GAME</TableHead>
                        <TableHead>Map</TableHead>
                        <TableHead >User</TableHead>
                        <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {gameRecords.map((gameRecords) => (
                    <TableRow key={gameRecords.id}>
                        <TableCell className="font-medium">{gameRecords.name}</TableCell>
                        <TableCell>{gameRecords.description}</TableCell>
                        <TableCell>{gameRecords.userId}</TableCell>
                        <TableCell className="text-right">{gameRecords.timestate.substring(3)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>

    );
};
