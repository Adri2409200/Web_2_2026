/*
const API_URL_MASCOTAS = "http://127.0.0.1/doguito_petshop/api/conexion_mascotas.php";
const API_URL_CLIENTES = "http://127.0.0.1/doguito_petshop/api/conexion.php";

const listaMascotas = () => 
    fetch(API_URL_MASCOTAS)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar mascotas:", error);
            return [];
        });

const crearMascota = (nombre, raza, edad, peso, dueñoId) => {
    const id = uuid.v4();
    return fetch(API_URL_MASCOTAS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, raza, edad, peso, dueñoId })
    });
};

const eliminarMascota = (id) => {
    return fetch(`${API_URL_MASCOTAS}?id=${id}`, { method: "DELETE" });
};

const detalleMascota = (id) => 
    fetch(`${API_URL_MASCOTAS}?id=${id}`).then(respuesta => respuesta.json());

const actualizarMascota = (nombre, raza, edad, peso, dueñoId, id) => {
    return fetch(API_URL_MASCOTAS, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, raza, edad, peso, dueñoId })
    });
};

const obtenerDueño = (idDueño) => 
    fetch(`${API_URL_CLIENTES}?id=${idDueño}`).then(respuesta => respuesta.json());

export const petService = {
    listaMascotas,
    crearMascota,
    eliminarMascota,
    detalleMascota,
    actualizarMascota,
    obtenerDueño
};
*/

// Supabase
/*
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const SUPABASE_URL = "https://uqduducofrhycmruurai.supabase.co";
const SUPABASE_KEY = "sb_publishable_8go3I9fTQGMN-A08cEiSgg_dC5rhvgA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const listaMascotas = async () => {
    const { data, error } = await supabase.from('mascotas').select('*').order('nombre', { ascending: true });
    if (error) throw error;
    return data;
};

const crearMascota = async (nombre, raza, edad, peso, dueñoId) => {
    const id = crypto.randomUUID();
    const { data, error } = await supabase.from('mascotas').insert([{ id, nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId }]).select();
    if (error) throw error;
    return data[0];
};

const eliminarMascota = async (id) => {
    const { error } = await supabase.from('mascotas').delete().eq('id', id);
    if (error) throw error;
    return true;
};

const detalleMascota = async (id) => {
    const { data, error } = await supabase.from('mascotas').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
};

const actualizarMascota = async (nombre, raza, edad, peso, dueñoId, id) => {
    const { data, error } = await supabase.from('mascotas').update({ nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId }).eq('id', id).select();
    if (error) throw error;
    return data[0];
};

const obtenerDueño = async (idDueño) => {
    const { data, error } = await supabase.from('clientes').select('*').eq('id', idDueño).single();
    if (error) throw error;
    return data;
};
*/

//-----CON SQL SERVER (API REST)-----//
const API_URL_MASCOTAS = "http://localhost:3000/api/mascotas";
const API_URL_CLIENTES = "http://localhost:3000/api/clientes";

const listaMascotas = () => 
    fetch(API_URL_MASCOTAS)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar mascotas:", error);
            return [];
        });

const crearMascota = (nombre, raza, edad, peso, dueñoId) => {
    const id = crypto.randomUUID();
    return fetch(API_URL_MASCOTAS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId })
    });
};

const eliminarMascota = (id) => {
    return fetch(`${API_URL_MASCOTAS}/${id}`, { method: "DELETE" });
};

const detalleMascota = (id) => 
    fetch(`${API_URL_MASCOTAS}/${id}`).then(respuesta => respuesta.json());

const actualizarMascota = (nombre, raza, edad, peso, dueñoId, id) => {
    return fetch(`${API_URL_MASCOTAS}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId })
    });
};

const obtenerDueño = (idDueño) => 
    fetch(`${API_URL_CLIENTES}/${idDueño}`).then(respuesta => respuesta.json());

export const petService = {
    listaMascotas,
    crearMascota,
    eliminarMascota,
    detalleMascota,
    actualizarMascota,
    obtenerDueño
};