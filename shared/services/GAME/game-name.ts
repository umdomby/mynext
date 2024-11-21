import { axiosInstance } from '../instance';
import { ApiRoutes } from '../constants';
import { GameName } from '@prisma/client';

export const getAll = async (): Promise<GameName[]> => {
    return (await axiosInstance.get<GameName[]>(ApiRoutes.GAMENAME)).data;
};
