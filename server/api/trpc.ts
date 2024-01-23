import { initTRPC, TRPCError } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import {
  getAuth,
  type SignedInAuthObject,
  type SignedOutAuthObject,
} from '@clerk/nextjs/server';

import { transformer } from '~/lib/trpc/shared';
import { db } from '~/server/db';
import { NextRequest } from 'next/server';

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createInnerTRPCContext = async (
  opts: CreateInnerContextOptions
) => {
  return {
    db,
    auth: opts.auth,
  };
};

export const createTRPCContext = async (opts: { req: NextRequest }) => {
  const auth = getAuth(opts.req);
  const inner = await createInnerTRPCContext({ auth });

  return {
    ...inner,
    req: opts.req,
  };
};

const t = initTRPC.context<typeof createInnerTRPCContext>().create({
  transformer: transformer,
});

const enforceUserLoggedIn = t.middleware(({ ctx, next }) => {
  if (!ctx.auth) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx,
  });
});

export const createRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserLoggedIn);
