import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../lib/api/client'
import { institutionPath } from '../institution/institution.api'

export type InstitutionRoleOption = {
  id: string
  code: string
  name: string
  isSystem: boolean
  isActive: boolean
}

const staffSystemCodes = new Set([
  'TEACHER', 'ADMINISTRATIVE_STAFF', 'ACCOUNTANT', 'FINANCE_STAFF',
])

export const roleNames: Record<string, [string, string]> = {
  TEACHER: ['مدرّس', 'Teacher'],
  ADMINISTRATIVE_STAFF: ['الموجّه / الموظف الإداري', 'Administrative supervisor'],
  SUPERVISOR: ['مشرف قديم — للقراءة فقط', 'Legacy supervisor — read only'],
  ACCOUNTANT: ['محاسب', 'Accountant'],
  FINANCE_STAFF: ['موظف مالي', 'Finance staff'],
}

export function roleLabel(code: string, isArabic: boolean, options: InstitutionRoleOption[] = []) {
  const systemName = roleNames[code]
  return systemName ? systemName[isArabic ? 0 : 1] : (options.find((role) => role.code === code)?.name ?? code)
}

export function useAssignableStaffRoles(institutionId: string, isDirector: boolean) {
  const query = useQuery({
    queryKey: ['institution', institutionId, 'custom-roles'],
    queryFn: () => apiClient.get<InstitutionRoleOption[]>(
      institutionPath(institutionId, 'access/roles'),
    ).then((response) => response.data),
    enabled: Boolean(institutionId) && isDirector,
  })
  const options = (query.data ?? []).filter((role) =>
    role.isActive && (!role.isSystem || staffSystemCodes.has(role.code)),
  )
  return { ...query, options }
}
