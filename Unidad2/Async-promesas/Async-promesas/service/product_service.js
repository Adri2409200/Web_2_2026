/*
//-----CON XAMPP -----//
const API_URL = "http://127.0.0.1/doguito_petshop/api/conexion_productos.php";

const listaProductos = () => 
    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar productos:", error);
            return [];
        });

const crearProducto = (nombre, precio) => {
    const id = uuid.v4();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio })
    });
};

const eliminarProducto = (id) => {
    return fetch(`${API_URL}?id=${id}`, { method: "DELETE" });
};

const detalleProducto = (id) => 
    fetch(`${API_URL}?id=${id}`).then(respuesta => respuesta.json());

const actualizarProducto = (nombre, precio, id) => {
    return fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio })
    });
};

export const productoService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};
*/

// Supabase
/*
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const SUPABASE_URL = "https://uqduducofrhycmruurai.supabase.co";
const SUPABASE_KEY = "sb_publishable_8go3I9fTQGMN-A08cEiSgg_dC5rhvgA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const listaProductos = async () => {
    const { data, error } = await supabase.from('productos').select('*').order('nombre', { ascending: true });
    if (error) throw error;
    return data;
};

const crearProducto = async (nombre, precio) => {
    const id = crypto.randomUUID();
    const { data, error } = await supabase.from('productos').insert([{ id, nombre, precio: Number(precio) }]).select();
    if (error) throw error;
    return data[0];
};

const eliminarProducto = async (id) => {
    const { error } = await supabase.from('productos').delete().eq('id', id);
    if (error) throw error;
    return true;
};

const detalleProducto = async (id) => {
    const { data, error } = await supabase.from('productos').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
};

const actualizarProducto = async (nombre, precio, id) => {
    const { data, error } = await supabase.from('productos').update({ nombre, precio: Number(precio) }).eq('id', id).select();
    if (error) throw error;
    return data[0];
};
*/

//-----CON SQL SERVER -----//
const API_URL = "http://localhost:3000/api/productos";

const listaProductos = () => 
    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar productos:", error);
            return [];
        });

const crearProducto = (nombre, precio) => {
    const id = crypto.randomUUID();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio: Number(precio) })
    });
};

const eliminarProducto = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

const detalleProducto = (id) => 
    fetch(`${API_URL}/${id}`).then(respuesta => respuesta.json());

const actualizarProducto = (nombre, precio, id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio: Number(precio) })
    });
};

export const productoService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};