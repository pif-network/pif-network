import { createRouter, protectedProcedure, publicProcedure } from '../trpc';
import { userSchema } from '~/lib/types/user';

import { z } from 'zod';
import { $Enums, Gender } from '@prisma/client';

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
  new_review: protectedProcedure
    .input(z.object({ text: z.string(), revieweeId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { clerkId: ctx.auth.userId! },
      });

      if (user?.role !== $Enums.Role.Mentee) {
        throw new Error('Only mentees can leave a review');
      }
      const review = await ctx.db.review.create({
        data: {
          text: input.text,
          revieweeId: input.revieweeId,
          reviewerId: ctx.auth.userId!,
        },
      });
      return review;
    }),
});
