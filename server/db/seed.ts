/* This file is runned by bun. */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

try {
  console.log('Seeding database...');
  /* @ts-ignore-next-line */
  const r = await prisma.offer.create({
    data: {
      name: 'CAREER_ORIENTATION',
      description: 'Helping you find your way in the world of work',
    },
  });
  console.log(r);
} catch (e) {
  console.error(e);
} finally {
  /* @ts-ignore-next-line */
  await prisma.$disconnect();
  process.exit(1);
}
