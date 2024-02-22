import { relations, sql } from 'drizzle-orm';
import {
  index,
  int,
  primaryKey,
  sqliteTableCreator,
  text,
} from 'drizzle-orm/sqlite-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(name => `pif_${name}`);

// export const posts = createTable(
//   'post',
//   {
//     id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
//     name: text('name', { length: 256 }),
//     createdById: text('createdById', { length: 255 })
//       .notNull()
//       .references(() => users.id),
//     createdAt: int('created_at', { mode: 'timestamp' })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: int('updatedAt', { mode: 'timestamp' }),
//   },
//   example => ({
//     createdByIdIdx: index('createdById_idx').on(example.createdById),
//     nameIndex: index('name_idx').on(example.name),
//   })
// );

export const fields = createTable('fields', {
  id: int('id').notNull().primaryKey({ autoIncrement: true }),
  name: text('name'),
  description: text('description'),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updatedAt', { mode: 'timestamp' }),
});

export const fieldsRelations = relations(fields, ({ many }) => ({
  fieldsToUsers: many(fieldsToUsers),
}));

export const offers = createTable('offers', {
  id: int('id').notNull().primaryKey({ autoIncrement: true }),
  name: text('name'),
  description: text('description'),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updatedAt', { mode: 'timestamp' }),
});

export const offersRelations = relations(offers, ({ many }) => ({
  offersToUsers: many(offersToUsers),
}));

export const users = createTable('users', {
  clerkId: text('clerk_id').notNull().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  gender: text('gender', { enum: ['male', 'female'] }),
  role: text('role', { enum: ['mentor', 'mentee'] }),
  description: text('description'),
  major: text('major'),
  schoolName: text('school_name'),
  title: text('title'),
  workplace: text('workplace'),
  location: text('location'),
  githubUrl: text('github_url'),
  linkedinUrl: text('linkedin_url'),
  bookingUrl: text('booking_url'),
});

export const usersRelations = relations(users, ({ many }) => ({
  // accounts: many(accounts),
  fields: many(fieldsToUsers),
  offers: many(offersToUsers),
}));

export const fieldsToUsers = createTable(
  'fields_to_users',
  {
    fieldId: text('field_id').references(() => fields.id),
    userId: text('user_id').references(() => users.clerkId),
  },
  t => ({
    pk: primaryKey({ columns: [t.userId, t.fieldId] }),
  })
);

export const fieldsToUsersRelations = relations(fieldsToUsers, ({ one }) => ({
  field: one(fields, {
    fields: [fieldsToUsers.fieldId],
    references: [fields.id],
  }),
  user: one(users, {
    fields: [fieldsToUsers.userId],
    references: [users.clerkId],
  }),
}));

export const offersToUsers = createTable(
  'offers_to_users',
  {
    offerId: text('offer_id').references(() => offers.id),
    userId: text('user_id').references(() => users.clerkId),
  },
  t => ({
    pk: primaryKey({ columns: [t.userId, t.offerId] }),
  })
);

export const offersToUsersRelations = relations(offersToUsers, ({ one }) => ({
  offer: one(offers, {
    fields: [offersToUsers.userId],
    references: [offers.id],
  }),
  user: one(users, {
    fields: [offersToUsers.userId],
    references: [users.clerkId],
  }),
}));

// export const accounts = createTable(
//   'account',
//   {
//     userId: text('userId', { length: 255 })
//       .notNull()
//       .references(() => users.id),
//     type: text('type', { length: 255 })
//       .$type<AdapterAccount['type']>()
//       .notNull(),
//     provider: text('provider', { length: 255 }).notNull(),
//     providerAccountId: text('providerAccountId', { length: 255 }).notNull(),
//     refresh_token: text('refresh_token'),
//     access_token: text('access_token'),
//     expires_at: int('expires_at'),
//     token_type: text('token_type', { length: 255 }),
//     scope: text('scope', { length: 255 }),
//     id_token: text('id_token'),
//     session_state: text('session_state', { length: 255 }),
//   },
//   account => ({
//     compoundKey: primaryKey({
//       columns: [account.provider, account.providerAccountId],
//     }),
//     userIdIdx: index('account_userId_idx').on(account.userId),
//   })
// );

// export const accountsRelations = relations(accounts, ({ one }) => ({
//   user: one(users, { fields: [accounts.userId], references: [users.id] }),
// }));

// export const sessions = createTable(
//   'session',
//   {
//     sessionToken: text('sessionToken', { length: 255 }).notNull().primaryKey(),
//     userId: text('userId', { length: 255 })
//       .notNull()
//       .references(() => users.id),
//     expires: int('expires', { mode: 'timestamp' }).notNull(),
//   },
//   session => ({
//     userIdIdx: index('session_userId_idx').on(session.userId),
//   })
// );

// export const sessionsRelations = relations(sessions, ({ one }) => ({
//   user: one(users, { fields: [sessions.userId], references: [users.id] }),
// }));

// export const verificationTokens = createTable(
//   'verificationToken',
//   {
//     identifier: text('identifier', { length: 255 }).notNull(),
//     token: text('token', { length: 255 }).notNull(),
//     expires: int('expires', { mode: 'timestamp' }).notNull(),
//   },
//   vt => ({
//     compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
//   })
// );
