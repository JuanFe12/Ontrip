export interface IeventRepository{
    get(): Event[]
    getByid(id: number): number
    add(event: Event): number
    edit(id: number, event: Event): Event
    delete(id: number): Event
}