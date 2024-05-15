import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
const SECRECT_STRING = "SD550-2024-05-14";

const app: Application = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const DATA = [
  {
    email: "thaovu@miu.edu"
  }
];
app.post("/users/login", (req: Request, res: Response) => {
  const found = DATA.find(x => x.email === req.body.email);
  if (found) {
    const token = jwt.sign({ email: req.body.email }, SECRECT_STRING);
    res.send({ success: true, data: token });
  } else {
    res.send({ success: false, data: "Email Not Found" });
  }
});
const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null) {
    return res.sendStatus(401); // if there's no token, return 401 Unauthorized
  }

  jwt.verify(token, SECRECT_STRING, (err, user) => {
    if (err) {
      return res.sendStatus(403); // if the token is invalid, return 403 Forbidden
    }
    next();
  });
};
//middleware
app.use(auth);
//get products
app.get("/products", (req: Request, res: Response) => {
  const products = [
    { id: "P001", name: "iPhone XR", price: 500 },
    { id: "P002", name: "iPhone 15", price: 800 },
    { id: "P003", name: "Macbook Pro 13", price: 2000 }
  ];
  res.send({ success: true, data: products });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
