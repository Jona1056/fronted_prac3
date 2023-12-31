import  { useState } from 'react';
import Swal from 'sweetalert2';
import "./formulario.css";
const Eliminar = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST a tu API Flask con los datos del formulario
      const response = await fetch('http://192.168.49.2:30197//eliminar', {
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
          text: 'Usuario eliminado correctamente',
          icon: 'success',
        });
        ;
        } else {
        // Si la solicitud no fue exitosa, mostrar un mensaje de error
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo eliminar el usuario(No existe)',
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
     
      <br />
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default Eliminar;
