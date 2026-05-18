import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js"
dotenv.config();
const app=express();// llamadas a express en variable 
app.use(cors());// uso con cors
app.use(express.json());// uso de archivos json 
//get listar
app.get("/clientes", async(req, res)=>{
    try{
        const [rows]=await pool.query("SELECT * FROM clientes");
        res.json(rows);
    }catch (err){
        res.status(500).json({error: err.message});
    }
})

// get por id

app.get("/clientes/:id",async(req,res)=>{
    try{
        const [rows]= await pool.query(
            "SELECT * FROM clientes WHERE id=?",[req.params.id]);
        if(rows.length === 0){
            return res.status(404).json({error: "Cliente no encontrado"});
        }
        res.json(rows[0]);
    }catch(err){res.status(500).json({error:err.message})}
});

// POST  crear cliente 

app.post("/clientes", async (req,res)=>{
    try{
        const {id,nombre,email}=req.body;
        await pool.query("INSERT INTO clientes (id,nombre,email) VALUES (?,?,?)",
            [id,nombre,email]  
        );
        res.status(201).json({id,nombre,email})
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

// put 
app.put("/clientes/:id", async (req,res)=>{
    try{
        const {nombre, email}=req.body;
        await pool.query("UPDATE clientes SET nombre=?, email=? WHERE id=?",
            [nombre,email,req.params.id]
        );
        res.json({mensaje:"actualizado"})
    }catch (err){
        res.status(500).json({error:err.message});
    }
});
// delete
app.delete("/clientes/:id",async(req,res)=>{
    try{
        await pool.query("DELETE FROM clientes WHERE id=?",[req.params.id]);
        res.json({mensaje:"eliminaoooo"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
});
// ---- PRODUCTOS ----

// GET listar todos
app.get("/productos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM productos");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET por id
app.get("/productos/:id", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM productos WHERE id=?", [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST crear producto
app.post("/productos", async (req, res) => {
    try {
        const { id, nombre, precio } = req.body;
        await pool.query(
            "INSERT INTO productos (id, nombre, precio) VALUES (?,?,?)",
            [id, nombre, precio]
        );
        res.status(201).json({ id, nombre, precio });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT actualizar producto
app.put("/productos/:id", async (req, res) => {
    try {
        const { nombre, precio } = req.body;
        await pool.query(
            "UPDATE productos SET nombre=?, precio=? WHERE id=?",
            [nombre, precio, req.params.id]
        );
        res.json({ mensaje: "producto actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE eliminar producto
app.delete("/productos/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM productos WHERE id=?", [req.params.id]);
        res.json({ mensaje: "producto eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ---- MASCOTAS ----

// GET listar todas
app.get("/mascotas", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mascotas");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET por id
app.get("/mascotas/:id", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM mascotas WHERE id=?", [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: "Mascota no encontrada" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST crear mascota
app.post("/mascotas", async (req, res) => {
    try {
        const { id, nombre, raza, edad, peso, dueñoId } = req.body;
        await pool.query(
            "INSERT INTO mascotas (id, nombre, raza, edad, peso, dueñold) VALUES (?,?,?,?,?,?)",
            [id, nombre, raza, edad, peso, dueñoId]
        );
        res.status(201).json({ id, nombre, raza, edad, peso, dueñoId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT actualizar mascota
app.put("/mascotas/:id", async (req, res) => {
    try {
        const { nombre, raza, edad, peso, dueñoId } = req.body;
        await pool.query(
            "UPDATE mascotas SET nombre=?, raza=?, edad=?, peso=?, dueñold=? WHERE id=?",
            [nombre, raza, edad, peso, dueñoId, req.params.id]
        );
        res.json({ mensaje: "mascota actualizada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE eliminar mascota
app.delete("/mascotas/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM mascotas WHERE id=?", [req.params.id]);
        res.json({ mensaje: "mascota eliminada" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`Server corriendo en puerto ${process.env.PORT}`);
});
