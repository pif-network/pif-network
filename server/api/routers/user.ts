import { z } from 'zod';
import { createRouter, publicProcedure } from '../trpc';

export const userRouter = createRouter({
  updateProfile: publicProcedure
    .input(z.any())
    .mutation(async ({ ctx, input }) => {
      // console.log(input);
      console.log(ctx.db);

      try {
        // const t = await ctx.db.user.update({
        //   where: {
        //     clerkId: ctx.auth.userId!,
        //   },
        //   data: {
        //     ...input,
        //     field: {
        //       connect: input.field.map(f => ({ id: f })),
        //     },
        //     offer: {
        //       connect: input.offer.map(o => ({ id: o })),
        //     },
        //   },
        // });
        // console.log(t);
      } catch (error) {
        console.log(error);
      }
    }),
});
