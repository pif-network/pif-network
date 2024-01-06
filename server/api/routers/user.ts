import { createRouter, publicProcedure } from '../trpc';
import { userSchema } from '~/lib/types/user';

import { z } from 'zod';
import { Gender } from '@prisma/client';

const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const userRouter = createRouter({
  updateProfile: publicProcedure
    .input(userSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      const dbCompatGender = capitaliseFirstLetter(input.gender) as Gender;

      try {
        const t = await ctx.db.user.update({
          where: {
            clerkId: ctx.auth.userId!,
          },
          data: {
            ...input,
            gender: dbCompatGender,
            fields: {
              connect: input.fields.map(f => ({ name: f.toUpperCase() })),
            },
            offers: {
              connect: input.offers.map(o => ({ name: o.toUpperCase() })),
            },
          },
        });
        console.log(t);
      } catch (error) {
        console.log(error);
      }
    }),
  single_mentor: publicProcedure
    .input(z.object({ clerkId: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          clerkId: input.clerkId,
        },
        include: {
          fields: true,
          offers: true,
        },
      });
      return user;
    }),
});
