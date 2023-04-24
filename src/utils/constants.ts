export const RouterPath = {
   home: '/',
   bankData: '/bank-data'
}

export const routes: RoutesType[] = [
   {path: RouterPath.home, mode: 'home'},
   {path: RouterPath.bankData, mode: 'bankData'},
   {path: '*', mode: 'error'}
]

export interface RoutesType {
    path: string
    mode: string
}