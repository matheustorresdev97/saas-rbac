

import { Role } from '@repo/auth/src/roles'
import { api } from './api-client'

interface UpdateMemberRequest {
  org: string
  memberId: string
  role: Role
}

export async function updateMember({
  org,
  memberId,
  role,
}: UpdateMemberRequest) {
  await api.put(`organizations/${org}/members/${memberId}`, {
    json: { role },
  })
}