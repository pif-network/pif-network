import { z } from 'zod';
import { createRouter, publicProcedure } from '../trpc';

export const userRouter = createRouter({
  new: publicProcedure.input(z.any()).mutation(opts => {
    console.log(opts.input);
    return { id: 1, name: 'test' };
  }),
});
