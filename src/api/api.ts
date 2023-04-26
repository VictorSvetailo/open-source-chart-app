import axios from 'axios'

const settings = {
    baseURL: 'https://644525c8b80f57f581b27efc.mockapi.io/'
}
const instance = axios.create(settings)

export const api = {
    getBankData() {
        return instance.get<BankDataType[]>('statistics')
    }
}

export interface BankDataType {
    id: number,
    month: string,
    bank: BankDataEntityType
}

export interface BankDataEntityType {
    sberBank: number
    gazPromBank: number
    pochtaBank: number
    alfaBank: number
    sovkomBank: number
    tinkoffBank: number
    rosBank: number
    rayffayzenBank: number
    moskovskiyKreditnyyBank: number
    rosselkhozBank: number
}

