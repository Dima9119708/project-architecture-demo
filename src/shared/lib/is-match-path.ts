import { matchPath } from 'react-router-dom'

export const isMatchPath = (pathname: string, route: string) => {
    return matchPath(pathname, route) !== null
}
