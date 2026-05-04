const express = require('express');
const cors = require('cors');
const { getConnection } = require('./config/db.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ============= CLIENTES =============
app.get('/api/clientes', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM clientes ORDER BY nombre');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM clientes WHERE id = @id');
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/clientes', async (req, res) => {
    try {
        const { id, nombre, email } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('email', email)
            .query('INSERT INTO clientes (id, nombre, email) VALUES (@id, @nombre, @email)');
        res.status(201).json({ id, nombre, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('email', email)
            .query('UPDATE clientes SET nombre = @nombre, email = @email WHERE id = @id');
        res.json({ id, nombre, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query('DELETE FROM clientes WHERE id = @id');
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ============= MASCOTAS =============
app.get('/api/mascotas', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM mascotas ORDER BY nombre');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/mascotas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM mascotas WHERE id = @id');
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/mascotas', async (req, res) => {
    try {
        const { id, nombre, raza, edad, peso, dueñoId } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('raza', raza)
            .input('edad', edad)
            .input('peso', peso)
            .input('dueñoId', dueñoId)
            .query(`INSERT INTO mascotas (id, nombre, raza, edad, peso, dueñoId) 
                    VALUES (@id, @nombre, @raza, @edad, @peso, @dueñoId)`);
        res.status(201).json({ id, nombre, raza, edad, peso, dueñoId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/mascotas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, raza, edad, peso, dueñoId } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('raza', raza)
            .input('edad', edad)
            .input('peso', peso)
            .input('dueñoId', dueñoId)
            .query(`UPDATE mascotas SET nombre = @nombre, raza = @raza, edad = @edad, 
                    peso = @peso, dueñoId = @dueñoId WHERE id = @id`);
        res.json({ id, nombre, raza, edad, peso, dueñoId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/mascotas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query('DELETE FROM mascotas WHERE id = @id');
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ============= PRODUCTOS =============
app.get('/api/productos', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM productos ORDER BY nombre');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos WHERE id = @id');
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/productos', async (req, res) => {
    try {
        const { id, nombre, precio } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('precio', precio)
            .query('INSERT INTO productos (id, nombre, precio) VALUES (@id, @nombre, @precio)');
        res.status(201).json({ id, nombre, precio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio } = req.body;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('nombre', nombre)
            .input('precio', precio)
            .query('UPDATE productos SET nombre = @nombre, precio = @precio WHERE id = @id');
        res.json({ id, nombre, precio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query('DELETE FROM productos WHERE id = @id');
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});