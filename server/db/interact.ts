import { eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from './';
import { fields, fieldsToUsers, users } from './schema';

try {
  // const review = await prisma.review.create({
  //   data: {
  //     text: 'This is a review',
  //     revieweeId: 'user_2ZctFGhv0PHviDQXGDtAv9XcHQq',
  //     reviewerId: 'user_2bISxtQ0Ab29bbYPBgXsLvGKigz',
  //   },
  // });

  // const r = await db.query.users.findFirst({
  //   with: { fields: { extras: ['name'] } },
  // });
  // console.log(r);

  // await db.transaction(async tx => {
  //   const f = await tx
  //     .insert(fields)
  //     .values({
  //       name: 'marketing',
  //     })
  //     .returning({ id: fields.id });
  //   const u = await tx.query.users.findFirst({
  //     where: eq(users.name, 'Lily'),
  //     columns: {
  //       clerkId: true,
  //     },
  //   });
  //   await tx.insert(fieldsToUsers).values({
  //     fieldId: f[0]?.id.toString(),
  //     userId: u?.clerkId,
  //   });
  // });

  // const u = await db.query.users.findFirst({
  //   with: {
  //     fields: {
  //       columns: {
  //         fieldId: false,
  //         userId: false,
  //       },
  //       with: {
  //         field: {
  //           columns: {
  //             name: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  // console.log(JSON.stringify(u));

  // const u = await db
  //   .select()
  //   .from(fieldsToUsers)
  //   .leftJoin(fields, eq(fieldsToUsers.fieldId, fields.id))
  //   .leftJoin(users, eq(fieldsToUsers.userId, users.clerkId))
  //   .all();

  const userCols = getTableColumns(users);
  const fieldsCols = getTableColumns(fields);
  const usersWithFields = await db
    .select({
      ...userCols,
      fields: { ...fieldsCols },
      // ...fieldsCols,
    })
    .from(users)
    .innerJoin(fieldsToUsers, eq(users.clerkId, fieldsToUsers.userId))
    .innerJoin(fields, eq(fieldsToUsers.fieldId, fields.id))
    // .groupBy(users.clerkId, users.name)
    .all();
  console.log(JSON.stringify(usersWithFields));
} catch (e) {
  console.error(e);
} finally {
  // await prisma.$disconnect();
  process.exit(0);
}