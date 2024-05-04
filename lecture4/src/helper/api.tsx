import httpClient from "./axios";
export async function addBook(){
  return httpClient.post("/books", {id: "test", title: "hello"});
}