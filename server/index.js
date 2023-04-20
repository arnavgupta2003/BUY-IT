import express from "express";
import mysql2 from "mysql2"
import cors from "cors"
const main  =  express();
main.use(express.json())
main.use(cors())
// Product page

// database connection

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Uzumakinaruto@12",
    database:"dbms_project"
})

main.get("/customers",(req,res)=>{
    const query = "SELECT * FROM customer"
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
    
})

main.get("/",(req,res)=>{
    res.json("backend pr hu bc")
})

main.get('/products/sortAsc',(req,res)=>{
    const query = "SELECT * FROM products ORDER BY p_price ASC"
    db.query(query,(err,data)=>{
        if (err) return res.json(err)
        else return res.json(data)
    })
})


// to post on cart
main.post("/cart",(req,res)=>{
    const query =  "INSERT INTO cart (cart_id, cust_id, product_id) VALUES (?, ?, ?)"
    const { cart_id, cust_id, p_id } = req.body
    // console.log(cust_id)
   
    db.query (query,[cart_id,cust_id,p_id],(err,data)=>{
        if(err) {
            console.log(err)
            return res.json(err)};
        return res.json(data)
    })
    
})

main.get("/cartShow",(req,res)=>{
    const { customerId } = req.query;
// console.log(customerId);
const query = "SELECT c.*, p.p_desc,p.p_quantiity,p.p_price FROM cart c JOIN products p ON c.product_id = p.p_id WHERE c.cust_id = ?";
db.query(query, [customerId], (err, data) => {
        if(err){
            console.log(err)
            return res.json(err)
            
        }else{
            return res.json(data)
        }
    })
})

main.get("/productShow",(req,res)=>{
    const { productId } = req.query;
// console.log(customerId);
const query = "SELECT c.*, p.p_desc FROM cart c JOIN product p ON c.product_id = p.p_id WHERE c.cust_id = ?";
db.query(query, [productId], (err, data) => {
        if(err){
            console.log(err)
            return res.json(err)
            
        }else{
            return res.json(data)
        }
    })
})

// fetching products for localhost/products
main.get("/products",(req,res)=>{
    const query = "SELECT * FROM products"
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
            console.log(err)
        }else{
            return res.json(data)
        }
    })
})


main.listen(3001,()=>{
    console.log("abhi bhi sunraha hu1")
})

/*
for adding to cart 

*/ 