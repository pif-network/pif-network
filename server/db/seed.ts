/* This file is runned by bun. */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

const prisma = new PrismaClient();

/* @ts-ignore-next-line */
const tablenames = await prisma.$queryRaw<
  Array<{ tablename: string }>
>`SELECT tablename FROM pg_tables WHERE schemaname='public'`;
const tables = tablenames
  .map(({ tablename }) => tablename)
  .filter(name => name !== '_prisma_migrations')
  .map(name => `"public"."${name}"`)
  .join(', ');

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
  /* @ts-ignore-next-line */
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);

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
