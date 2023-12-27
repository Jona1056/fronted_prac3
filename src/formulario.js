import  { useState } from 'react';
import Swal from 'sweetalert2';
import "./formulario.css";
const Formulario = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST a tu API Flask con los datos del formulario
      const response = await fetch('https://express-backend-sopes.azurewebsites.net/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
      });
      const datos = await response.json();
      console.log(datos)
      if (datos[0].credcorrectas === 0) {
        // Si la solicitud fue exitosa, redirigir al usuario a la página de inicio
        Swal.fire({
          title: 'Error!',
          text: 'Usuario o Contraseña incorrecta',
          icon: 'error',
        });
        } else {
        // Si la solicitud no fue exitosa, mostrar un mensaje de error
        Swal.fire({
          title: 'Exito!',
          text: 'Te has logeado correctamente',
          icon: 'success',
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
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
