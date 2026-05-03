import express from 'express';
import cors from 'cors'; //libreria que nos permite tener la conexión con sql desde el frontend
import dotenv from 'dotenv';
import pool from './conexion';
dotenv.config();
const app = express(); //llamadas a express variable
app.use(cors());//uso con cors
app.use(express.json());//uso de archivos json
//get listar
app.get("/clientes", async (req, res) =>{
    try{
        const result = await pool.query("SELECT * FROM clientes");
        const rows = result.rows || result[0];
        res.json(rows);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

//get por id
app.get("/clientes/:id", async (req, res) =>{
    try{
        const result = await pool.query("SELECT * FROM clientes WHERE id = ?", [req.params.id]);
        const rows = result.rows || result[0];
        //si no encuentra el cliente, devuelve un error 404
        if(rows.length === 0){
            res.status(404).json({error: "Cliente no encontrado"});
        }else{
            res.json(rows[0]);
        }  
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

//post insertar
app.post("/clientes", async (req, res) =>{
    try{
        const {id, nombre, email} = req.body;
        await pool.query("INSERT INTO clientes (id,nombre, email) VALUES (?,?,?)", [id,nombre, email]);
        res.status(201).json({id, nombre, email});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

//put actualizar
app.put("/clientes/:id", async (req, res) =>{
    try{
        const {nombre, email} = req.body;
        await pool.query("UPDATE clientes SET nombre = ?, email = ? WHERE id = ?", [nombre, email, req.params.id]);//params porque es nuestra referencia de datos
        res.json({message:"actualizado"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

//delete eliminar
app.delete("/clientes/:id", async (req, res) =>{
    try{
        await pool.query("DELETE FROM clientes WHERE id = ?", [req.params.id]);
        res.json({message:"eliminaooo"});//es un mensaje para confirmar que se eliminó el cliente
    }catch(err){
        res.status(500).json({error: err.message});//el catch es para manejar cualquier error
    }
});
//app.listen para escuchar y ver que esta corriendo en el puerto 3000
app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en puerto ${process.env.PORT}`);
});