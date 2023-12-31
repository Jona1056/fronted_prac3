import { useState } from 'react';
import Swal from 'sweetalert2';
import "./formulario.css";
const Buscar = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [usuario2, setUsuario2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST a tu API Flask con los datos del formulario
            const response = await fetch('http://192.168.49.2:30197//buscar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario2}),
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

    return (

        <form onSubmit={handleSubmit}>
            <label>
                Usuario a buscar:
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
                    id="usuario"
                    type="text"
                    value={usuario}
                    
                />
            </label>
            <br />
            <label>
                Contraseña:
                <input
                    id="contrasena"
                    type="text"
                    value={contrasena}
                 
                />
            </label>
            <br />
      
        </form>
    );
};

export default Buscar;
