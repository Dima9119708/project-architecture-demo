import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { TUser } from '@/entities/users/model/types.ts'
import { usersQuery } from '@/entities/users/queries.tsx'

import {
    Select,
    SelectBaseProps,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select.tsx'
import { Skeleton } from '@/shared/ui/skeleton.tsx'

interface SelectUsersProps extends SelectBaseProps<TUser> {
    className?: string
}

const SelectUsers = (props: SelectUsersProps) => {
    const { className, onChange, value } = props
    const [isOpen, setIsOpen] = useState(false)

    const { data, isLoading } = useQuery({
        ...usersQuery(),
        enabled: isOpen,
    })

    return (
        <Select
            error={props.error}
            onOpenChange={setIsOpen}
            onValueChange={(userId) => {
                const user = data?.find((user) => user.id === userId)

                if (user) onChange(user)
            }}
        >
            <SelectTrigger
                isError={!!props.error}
                className={className}
            >
                <SelectValue placeholder={value?.name || 'User...'} />
            </SelectTrigger>
            <SelectContent>
                {isLoading &&
                    Array.from({ length: 5 }, (_, idx) => (
                        <Skeleton
                            key={idx}
                            className="h-[1.5rem] mb-[0.2rem] rounded"
                        />
                    ))}

                {!isLoading && (
                    <>
                        <SelectGroup>
                            <SelectLabel>Administrators</SelectLabel>
                            {data
                                ?.filter((user) => user.role === 'admin')
                                .map((user) => <SelectItem value={user.id}>{user.name}</SelectItem>)}
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Users</SelectLabel>
                            {data
                                ?.filter((user) => user.role === 'user')
                                .map((user) => <SelectItem value={user.id}>{user.name}</SelectItem>)}
                        </SelectGroup>
                    </>
                )}
            </SelectContent>
        </Select>
    )
}

export default SelectUsers
