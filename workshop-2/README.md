# SD550-2024-05-workshop2
## Requirements: Continue the previous workshop
* Extend the previous ILMS to have the information of publishers and catalog of any books.
* Each publisher includes id, name, phone number, email, and address
* Each catalog contains number of copies, available number
* Example data
```JavaScript
Author {
  "id": 1,
  "firstname": "Thao",
  "lastname": "Vu",
  "phone": "641-123-5678",
  "email": "thaovu@miu.edu",
  "address": "Fairfield, IA, 52556"
}
Publiser {
  "id": 1,
  "name": "MIU Press",
  "phone": "641-123-1234",
  "email": "press@miu.edu",
  "address": "Fairfield, IA, 5256"
}

Book {
  "id": 1,
  "title": "Java Essentials",
  "genre": "Programming",
  "isbn": "978-0141439518",
  "format": "paper",
  "summary": "This book covers all important aspects of Java programming. It is highly recommended by experienced SWE",
  "authors": [1],
  "publisher": 1,
  "catalog": {
    "numberOfCopies": 10,
    "availableCopies": 5
  }
}
```
* Enhance json-server to contain the above database
* Improve the React application by using react-router-dom
* Add the following features for the React application
1. Update a book
2. Delete a book
3. Allow users to borrow a book. Decrease the `availableCopies` by 1 When that book is borrowed successfully, the number of available copies in catalog should decrease by 1. Prevent borrowing if no copies are available (`availableCopies` = 0)
4. Add a new publisher
5. Display all publisher
6. Add a publisher to a book 
