import  { useState } from 'react';
import Swal from 'sweetalert2';
import "./formulario.css";
const Crear = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST a tu API Flask con los datos del formulario
      const response = await fetch('http://192.168.49.2:30197//crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
      });
      const datos = await response.json();
      console.log(datos)
      if (datos.message === "success") {
        // Si la solicitud fue exitosa, redirigir al usuario a la página de inicio
       
        Swal.fire({
          title: 'Exito!',
          text: 'Usuario creado correctamente',
          icon: 'success',
        });
        ;
        } else {
        // Si la solicitud no fue exitosa, mostrar un mensaje de error
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo crear el usuario',
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
        Usuario:
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Crear</button>
    </form>
  );
};

export default Crear;
