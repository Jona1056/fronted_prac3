import { useState } from 'react';
import Swal from 'sweetalert2';
import "./formulario.css";
const Modificar = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [usuario2, setUsuario2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST a tu API Flask con los datos del formulario
            const response = await fetch('http://192.168.1.41:5000/modificar_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario2 }),
            });
            const datos = await response.json();
            console.log(datos)
            if (datos.message === "success") {
                // Si la solicitud fue exitosa, redirigir al usuario a la página de inicio

                //poner en el input el usuario y contraseña
                document.getElementById("usuario").value = datos.usuario;
                document.getElementById("contrasena").value = datos.contrasena;
                ;
            } else {
                // Si la solicitud no fue exitosa, mostrar un mensaje de error
                Swal.fire({
                    title: 'Error!',
                    text: 'Usuario no encontrado',
                    icon: 'error',
                });
            }

        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error al enviar datos:', error);
        }
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST a tu API Flask con los datos del formulario
            const response = await fetch('http://192.168.49.2:30197//modificar_get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario, contrasena, usuario2}),
            });
            const datos = await response.json();
            console.log(datos)
            if (datos.message === "success") {
                // Si la solicitud fue exitosa, redirigir al usuario a la página de inicio

                //poner en el input el usuario y contraseña
                Swal.fire({
                    title: 'Exito!',
                    text: 'Usuario modificado correctamente',
                    icon: 'success',
                });
                ;
            } else {
                // Si la solicitud no fue exitosa, mostrar un mensaje de error
                Swal.fire({
                    title: 'Error!',
                    text: 'Usuario no modificado',
                    icon: 'error',
                });
            }

        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error al enviar datos:', error);
        }
    };


    return (

        <form onSubmit={handleSubmit}>
            <label>
                Usuario a modificar:
                <input
                    type="text"
                    value={usuario2}
                    onChange={(e) => setUsuario2(e.target.value)}
                />
            </label>
            <button type="submit">Buscar</button>
            <label>
                Usuario:
                <input
                    id = "usuario"
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </label>
            <br />
            <label>
                Contraseña:
                <input
                    id = "contrasena"
                    type="text"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleSubmit2}  type="submit">Modificar</button>
        </form>
    );
};

export default Modificar;
