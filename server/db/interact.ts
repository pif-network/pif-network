import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

try {
  const review = await prisma.review.create({
    data: {
      text: 'This is a review',
      revieweeId: 'user_2ZctFGhv0PHviDQXGDtAv9XcHQq',
      reviewerId: 'user_2bISxtQ0Ab29bbYPBgXsLvGKigz',
    },
  });
  console.log(review);
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
  process.exit(1);
}
