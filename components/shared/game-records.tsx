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

    const [device, setDevice] = React.useState<GameRecords[]>([]);

    useEffect (()  => {
        try {
            async function fetchData() {
                const response = await Api.gameRecords.getAll()
                setDevice(response);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (

        <div>
            <Table>
                <TableCaption>Need For Speed records</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">GAME</TableHead>
                        <TableHead>Map</TableHead>
                        <TableHead >User</TableHead>
                        <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {device.map((device) => (
                    <TableRow key={device.id}>
                        <TableCell className="font-medium">{device.name}</TableCell>
                        <TableCell>{device.description}</TableCell>
                        {/*<TableCell>{device.username}</TableCell>*/}
                        <TableCell className="text-right">{device.timestate.substring(3)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>

    );
};
