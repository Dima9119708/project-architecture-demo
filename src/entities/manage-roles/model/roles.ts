export const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    MANAGER: 'manager',
    GUEST: 'guest',
    DEVELOPER: 'developer',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]
