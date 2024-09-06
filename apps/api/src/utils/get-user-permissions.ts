import { defineAbilityFor, userSchema } from "@repo/auth";
import { type Role } from "@repo/auth/src/roles";

export function getUserPermissions(userId: string, role: Role) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  });

  const ability = defineAbilityFor(authUser);

  return ability;
}
