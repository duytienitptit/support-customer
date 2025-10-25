import { mutation, query } from './_generated/server'

export const getMany = query(async ({ db }) => {
  return await db.query('users').collect()
})

export const add = mutation(async ({ db }, user: { name: string }) => {
  return await db.insert('users', user)
})
