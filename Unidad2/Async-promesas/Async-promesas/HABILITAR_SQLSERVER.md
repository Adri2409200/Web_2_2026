# Soluciones Rápidas para Conectar SQL Server

## ❌ Problema
TCP/IP no está habilitado en SQL Server. El puerto 1433 no está escuchando.

## ✅ Solución 1: Habilitar TCP/IP (Recomendado)

### Pasos:
1. **Abre SQL Server Configuration Manager**:
   - Presiona `Win + R`
   - Escribe: `SQLServerManager15.msc` (o `SQLServerManager16.msc` para SQL Server 2019+)
   - Presiona Enter

2. **En SQL Server Configuration Manager**:
   - En el panel izquierdo, selecciona: **SQL Server Network Configuration**
   - Selecciona la instancia (ej: SQLEXPRESS o MSSQLSERVER)
   - En el panel derecho, haz clic derecho en **TCP/IP** → **Enable**

3. **Configura el puerto**:
   - Haz clic derecho en **TCP/IP** → **Properties**
   - En la pestaña "Protocol", cambia:
     - **Listen All**: Yes
     - Desplázate hacia abajo
   - En la sección **IPALL**:
     - **TCP Dynamic Ports**: (déjalo vacío)
     - **TCP Port**: 1433

4. **Reinicia SQL Server**:
   - En SQL Server Configuration Manager
   - Panel izquierdo: **SQL Server Services**
   - Haz clic derecho en tu instancia → **Restart**

5. **Verifica la conexión**:
   - En el backend, ejecuta:
   ```bash
   node server.js
   ```
   - Deberías ver: "Connected to SQL Server" ✅

---

## ✅ Solución 2: Usar XAMPP Temporalmente (Más Rápido)

Si no quieres configurar SQL Server ahora, puedo activar XAMPP (MySQL) en segundos.

```bash
# En la carpeta del proyecto
npm run xampp
```

---

## 📋 Credentials por Defecto en SQL Server
- **Usuario**: sa
- **Contraseña**: (Configúrala durante la instalación)
- **Servidor**: localhost
- **Puerto**: 1433
- **Base de datos**: doguito_db

Si olvidaste la contraseña de 'sa', ve a SQL Server Management Studio y cámbiala:
- Conecta como administrador
- Botón derecho en "sa" → Properties → Security → Cambiar contraseña
