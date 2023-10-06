export class Movie {
  constructor(
    public id: string,
    public title: string,
    public year: number,
    public duration: number
  ) {}
}
export enum State {
  Waiting,
  Read,
  Edit,
}
