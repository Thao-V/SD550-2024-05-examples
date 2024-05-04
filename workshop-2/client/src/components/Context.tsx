import { createContext } from "react";
import IBook from "./IBook";
import IAuthor from "./IAuthor";
import IPublisher from "./IPublisher";
interface IContext{
  books: IBook[];
  setBooks: (updatedBooks: IBook[]) => void;
  authors: IAuthor[];
  setAuthors: (authors: IAuthor[]) => void;
  publishers: IPublisher[];
  setPublishers: (publishers: IPublisher[]) => void;
}
const GlobalContext = createContext<IContext>({
  books: [], 
  setBooks: () => {},
  authors: [],
  setAuthors: () => {},
  publishers: [],
  setPublishers: () => {}
});
export default GlobalContext;