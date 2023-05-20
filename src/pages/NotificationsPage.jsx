import React, {useEffect, useState} from 'react';
import ErrorInfo from '../components/Error/ErrorInfo';

const NotificationsPage = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lógica para obtener los mensajes del backend
    const fetchMessages = () => {
      fetch('/api/messages') // Reemplaza '/api/messages' con la ruta correcta hacia tu backend
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              `Error al obtener los mensajes: ${response.status}`
            );
          }
        })
        .then((data) => {
          setMessages(data); // Asigna los mensajes obtenidos al estado
        })
        .catch((error) => {
          setError(error); // Establece el error en la variable de estado
          console.error('Error al obtener los mensajes:', error);
        });
    };

    fetchMessages();
  }, []);

  if (error) {
    return <ErrorInfo />;
  }

  return (
    <div>
      <h3>Mis Notificaciones</h3>
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>{message.title}</h3>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPage;
