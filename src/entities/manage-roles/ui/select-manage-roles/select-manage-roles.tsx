import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { TManageRole } from '@/entities/manage-roles/model/types.ts'
import { manageRolesQuery } from '@/entities/manage-roles/queries.tsx'

import { Select, SelectBaseProps, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select.tsx'
import { Skeleton } from '@/shared/ui/skeleton.tsx'

interface SelectManageRolesProps extends SelectBaseProps<TManageRole> {
    className?: string
}

const SelectManageRoles = (props: SelectManageRolesProps) => {
    const { className, onChange, value, error } = props
    const [isOpen, setIsOpen] = useState(false)

    const { data, isPending } = useQuery({
        ...manageRolesQuery(),
        enabled: isOpen,
    })

    return (
        <Select
            error={error}
            onOpenChange={setIsOpen}
            onValueChange={(roleId) => {
                const role = data?.find((role) => role.id === roleId)
                if (role) onChange(role)
            }}
        >
            <SelectTrigger
                className={className}
                isError={!!error}
            >
                <SelectValue placeholder={value?.name || 'Role...'} />
            </SelectTrigger>
            <SelectContent>
                {isPending &&
                    Array.from({ length: 5 }, (_, idx) => (
                        <Skeleton
                            key={idx}
                            className="h-[1.5rem] mb-[0.2rem] rounded"
                        />
                    ))}
                {data?.map((role) => (
                    <SelectItem
                        key={role.id}
                        value={role.id}
                        onClick={() => onChange(role)}
                    >
                        {role.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SelectManageRoles
