import { type Config } from 'drizzle-kit';

export default {
  out: './server/db/migration',
  schema: './server/db/schema.ts',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  tablesFilter: ['pif_*'],
} satisfies Config;
