import { FormProvider } from 'react-hook-form'

import { FormFieldArrayProvider } from '@/shared/lib/form-field-array-provider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRoot, TableRow } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/button'
import { DrawerClose, DrawerFooter, DrawerMain } from '@/shared/ui/drawer'
import { Skeleton } from '@/shared/ui/skeleton'
import { Spinner } from '@/shared/ui/spinner.tsx'

import { useFormManageBoardContext } from '../model/form-manage-board-context.ts'
import { useFormManageBoard } from '../model/use-form-manage-board.ts'
import FormItemAddColumn from './form-items/form-item-add-column'
import FormItemAddRole from './form-items/form-item-add-role'
import FormItemBoardAccess from './form-items/form-item-board-access'
import FormItemInputColumn from './form-items/form-item-input-column'
import FormItemInputDescription from './form-items/form-item-input-description'
import FormItemInputName from './form-items/form-item-input-title.tsx'
import FormItemRemoveColumn from './form-items/form-item-remove-column'
import FormItemRemoveRole from './form-items/form-item-remove-role'
import FormItemSelectRole from './form-items/form-item-select-role'
import FormItemSelectUser from './form-items/form-item-select-user'

const FormManageBoard = () => {
    const boardId = useFormManageBoardContext()

    const isBoardId = !!boardId

    const { methodsForm, isPending, onSubmit, isMutating, closeButtonRef } = useFormManageBoard()

    return (
        <FormProvider {...methodsForm}>
            <DrawerMain className="grid gap-6">
                {isBoardId &&
                    isPending &&
                    Array.from({ length: 8 }, (_, k) => (
                        <Skeleton
                            key={k}
                            className="h-[3.5rem] w-full"
                        />
                    ))}

                {(isBoardId ? !isPending : true) && (
                    <>
                        <FormItemInputName />
                        <FormItemInputDescription />
                        <FormItemBoardAccess />
                        <FormFieldArrayProvider name="project_access">
                            {({ fields }) => (
                                <div>
                                    <TableRoot className="mb-2 h-auto p-0 shadow-[none]">
                                        <Table>
                                            <TableHeader>
                                                <TableHead className="w-[50%]">Name</TableHead>
                                                <TableHead className="w-[50%]">Role</TableHead>
                                                <TableHead className="min-w-[5rem]" />
                                            </TableHeader>
                                            <TableBody>
                                                {fields.map((field, idx) => {
                                                    const pathUserName = `project_access.${idx}.user`
                                                    const pathRoleName = `project_access.${idx}.role`
                                                    const isSingle = fields.length === 1

                                                    return (
                                                        <TableRow
                                                            key={field.id}
                                                            id={field.id}
                                                        >
                                                            <TableCell>
                                                                <FormItemSelectUser name={pathUserName} />
                                                            </TableCell>
                                                            <TableCell>
                                                                <FormItemSelectRole
                                                                    name={pathRoleName}
                                                                    formUserName={pathUserName}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <FormItemRemoveRole
                                                                    index={idx}
                                                                    isSingle={isSingle}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableRoot>

                                    <FormItemAddRole lastIndex={fields.length - 1} />
                                </div>
                            )}
                        </FormFieldArrayProvider>

                        <FormFieldArrayProvider name="columns">
                            {({ fields }) => (
                                <div>
                                    <div className="text font-bold">Columns</div>
                                    <TableRoot className="mb-2 h-auto p-0 shadow-[none]">
                                        <Table>
                                            <TableHeader>
                                                <TableHead className="w-full">Column name</TableHead>
                                                <TableHead className="min-w-[5rem]" />
                                            </TableHeader>
                                            <TableBody>
                                                {fields.map((field, idx) => {
                                                    const pathColumn = `columns.${idx}.title`
                                                    const isSingle = fields.length === 1

                                                    return (
                                                        <TableRow
                                                            key={field.id}
                                                            id={field.id}
                                                        >
                                                            <TableCell>
                                                                <FormItemInputColumn name={pathColumn} />
                                                            </TableCell>
                                                            <TableCell>
                                                                <FormItemRemoveColumn
                                                                    index={idx}
                                                                    isSingle={isSingle}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableRoot>

                                    <FormItemAddColumn lastIndex={fields.length - 1} />
                                </div>
                            )}
                        </FormFieldArrayProvider>
                    </>
                )}
            </DrawerMain>
            <DrawerFooter>
                <Button
                    disabled={isMutating}
                    onClick={methodsForm.handleSubmit(onSubmit)}
                >
                    {isMutating && <Spinner className="stroke-white" />}
                    {isBoardId ? 'Update' : 'Create'}
                </Button>
                <DrawerClose
                    asChild
                    ref={closeButtonRef}
                >
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </FormProvider>
    )
}

export default FormManageBoard
