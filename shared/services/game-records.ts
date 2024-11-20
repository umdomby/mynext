import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { GameRecords } from '@prisma/client';

export const getAll = async (): Promise<GameRecords[]> => {
    return (await axiosInstance.get<GameRecords[]>(ApiRoutes.GAMERECORDS)).data;
};
