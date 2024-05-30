import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hey this is the backend")
})

app.get("/products", (req,res)=>{
    const sql = "SELECT * FROM category"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8080, ()=>{
    console.log("connected to backend")
})