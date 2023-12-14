import { tmpRouter } from './routers/tmp';
import { createRouter } from './trpc';

export const appRouter = createRouter({
  tmp: tmpRouter,
});
export type AppRouter = typeof appRouter;
