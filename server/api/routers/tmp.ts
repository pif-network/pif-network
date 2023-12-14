import { createRouter, publicProcedure } from '../trpc';

export const tmpRouter = createRouter({
  isActive: publicProcedure.query(() => {
    return {
      isActive: true,
    };
  }),
});
