import { FC, FunctionComponent, useState } from 'react'
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { FormManageBoardContext } from '@/pages/manage-boards/model/form-manage-board-context'

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

const WrapperFormManageBoard: FC<{
    triggerElement: React.ReactNode
    children: FunctionComponent<boolean>
    boardId?: string
    onOpenChange?: React.ComponentProps<typeof DrawerPrimitive.Root>['onOpenChange']
}> = (props) => {
    const { children, onOpenChange, triggerElement, boardId } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Drawer
            direction="right"
            onOpenChange={(open) => {
                setIsOpen(open)
                onOpenChange?.(open)
            }}
        >
            <DrawerTrigger asChild>{triggerElement}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Manage board</DrawerTitle>
                </DrawerHeader>
                <FormManageBoardContext.Provider value={boardId ?? ''}>{isOpen && children(isOpen)}</FormManageBoardContext.Provider>
            </DrawerContent>
        </Drawer>
    )
}

export default WrapperFormManageBoard
