export interface IPagination<T> {
    count: number
    next: string
    previous: string
    results: T[]
}