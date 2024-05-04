export default interface IBook{
  id: string;
  title: string;
  isbn: string;
  genre: string;
  format: string;
  summary: string;
  authors?: string[],
  pubisher?: number,
  catalog?: {
    numOfCopies: number,
    availableCopies: number
  }
}