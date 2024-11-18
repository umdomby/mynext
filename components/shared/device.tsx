'use client';

import {Device} from '@prisma/client';
import React, {useEffect} from 'react';
import {Api} from "@/shared/services/api-client";

export const Devices: React.FC = () => {

    const [device, setDevice] = React.useState<Device[]>([]);

    useEffect (()  => {
        try {
            async function fetchData() {
                const response = await Api.device.getAll()
                setDevice(response);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (

        <div>
            {device.map((device) => (
                <div
                    key={device.id}
                    className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
                    <span>{device.name}</span>
                </div>
            ))}
        </div>

    );
};
