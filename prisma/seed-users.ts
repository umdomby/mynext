import { prisma } from './prisma-client';
import {hashSync} from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Pi',
                email: 'umdom2@gmail.com',
                password: hashSync('123123', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
            {
                fullName: 'Yatsyk',
                email: 'umdom555@gmail.com',
                password: hashSync('123123', 10),
                verified: new Date(),
                role: 'USER',
            },
        ],
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

