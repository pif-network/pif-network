/* This file is runned by bun. */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Prisma, PrismaClient } from '@prisma/client';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

const prisma = new PrismaClient();

const tables = Object.values(Prisma.ModelName);

const offerSeed = Object.keys(OFFER_METADATA).map(key => {
  return {
    name: key,
    description: 'PLACEHOLDER',
  };
});
const fieldSeed = Object.keys(FIELD_METADATA).map(key => {
  return {
    name: key,
    description: 'PLACEHOLDER',
  };
});

try {
  for (const table of tables) {
    console.log(`Truncating table ${table}...`);
    /* @ts-ignore-next-line */
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table} CASCADE;`);
  }

  console.log('Seeding database...');

  /* @ts-ignore-next-line */
  await prisma.offer.createMany({
    data: offerSeed,
  });
  /* @ts-ignore-next-line */
  await prisma.field.createMany({
    data: fieldSeed,
  });
} catch (e) {
  console.error(e);
} finally {
  /* @ts-ignore-next-line */
  await prisma.$disconnect();
  process.exit(1);
}
