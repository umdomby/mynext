import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { Device } from '@prisma/client';

export const getAll = async (): Promise<Device[]> => {
    return (await axiosInstance.get<Device[]>(ApiRoutes.DEVICE)).data;
};
