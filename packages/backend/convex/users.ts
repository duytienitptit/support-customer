import { mutation, query } from './_generated/server'

export const getMany = query(async ({ db }) => {
  return await db.query('users').collect()
})

export const add = mutation({
  args: {},
  handler: async ctx => {
    const identity = await ctx.auth.getUserIdentity()

    if (identity === null) {
      throw new Error('Not authenticated')
    }

    const userId = await ctx.db.insert('users', { name: 'Duy Tien' })
    return userId
  }
})
