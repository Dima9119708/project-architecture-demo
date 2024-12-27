import { matchPath } from 'react-router-dom'

import { ItemConfig } from './configure.ts'

export function isPathInTreeWithMatch(tree: ItemConfig[], currentPath: string): boolean {
    for (const node of tree) {
        if (matchPath(node.path, currentPath)) {
            return true
        }
        if (node.children && isPathInTreeWithMatch(node.children, currentPath)) {
            return true
        }
    }
    return false
}
