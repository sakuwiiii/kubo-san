import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "**",
  })
);

app.use(express.json());

//yo change
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "eta name ",
  password: "password",
  database: "eta db ko name",
});

app.get("/addToDb", (req, res) => {
  const { productName, categoryId, supplierId, quantity, price } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("error getting connection from pool:", err);
      res.status(500).send("error connecting to the database.");
      return;
    }

    const query = ""; //esma query hal  yo nishit ko      `INSERT INTO products (product_name, category_id, supplier_id, quantity, price, created_at) VALUES (?, ?, ?, ?, ?, NOW())`;
    connection.query(query, (err, results) => {
      connection.release();

      if (err) {
        console.error("error executing query:", err);
        res.status(500).send("error posting data in the database.");
        return;
      }

      res.send("product added");
    });
  });
});

app.listen(port);
