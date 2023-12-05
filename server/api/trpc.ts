import { initTRPC } from '@trpc/server';

import { transformer } from '~/lib/trpc/shared';

const t = initTRPC.create({
  transformer: transformer,
});

export const createRouter = t.router;
export const publicProcedure = t.procedure;
