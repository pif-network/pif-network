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
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${table} CASCADE;`);
  }

  console.log('Seeding database...');

  await prisma.offer.createMany({
    data: offerSeed,
  });
  await prisma.field.createMany({
    data: fieldSeed,
  });
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
  process.exit(1);
}
