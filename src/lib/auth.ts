import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prisma } from "./db"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "postgres"
  }),
  emailAndPassword: {
    enabled: true,
  },
  // Add GitHub provider if needed in future, currently focusing on email/pass
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "guest"
      },
      company: {
        type: "string",
        required: false,
      },
      timeZone: {
        type: "string",
        defaultValue: "UTC"
      }
    }
  }
})
