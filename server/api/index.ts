import { createRouter } from './trpc';
import { tmpRouter } from './routers/tmp';
import { userRouter } from './routers/user';

export const appRouter = createRouter({
  tmp: tmpRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
