import { createRouter, publicProcedure } from '../trpc';
import { GENDER_OPTION, USER_ROLE } from '~/shared/constant';

import { z } from 'zod';
import { Gender } from '@prisma/client';

const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const userSchema = z.object({
  role: z.enum([USER_ROLE.MENTEE, USER_ROLE.MENTOR]),
  name: z.string().min(2).max(50),
  gender: z.enum([
    GENDER_OPTION.MALE.value,
    GENDER_OPTION.FEMALE.value,
    GENDER_OPTION.OTHER.value,
  ]),
  description: z.string().min(2).max(500),
  schoolName: z.string().min(2).max(50),
  major: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
  workplace: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  githubUrl: z.string().min(2).max(50),
  linkedinUrl: z.string().min(2).max(50),
  fields: z.array(z.string()),
  offers: z.array(z.string()),
  bookingUrl: z.string().min(2).max(50),
});

export const userRouter = createRouter({
  updateProfile: publicProcedure
    .input(userSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      const dbCompatGender = capitaliseFirstLetter(input.gender);

      try {
        const t = await ctx.db.user.update({
          where: {
            clerkId: ctx.auth.userId!,
          },
          data: {
            ...input,
            gender: dbCompatGender as Gender,
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
