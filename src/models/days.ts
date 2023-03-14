export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const

export type Days = typeof days[number]
