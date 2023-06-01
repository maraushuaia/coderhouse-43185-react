import React, {useState} from 'react';
import {
  Box,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const faqs = [
    {
      question: '¿Cómo puedo crear una cuenta?',
      answer:
        'Para crear una cuenta, ve a la página de registro y completa el formulario con tus datos personales. Luego, haz clic en el botón "Crear cuenta".',
    },
    {
      question: '¿Puedo cambiar mi contraseña?',
      answer:
        'Sí, puedes cambiar tu contraseña iniciando sesión en tu cuenta y yendo a la sección "Configuración de la cuenta". Allí encontrarás la opción para cambiar tu contraseña.',
    },
    {
      question: '¿Cómo puedo contactar al servicio de atención al cliente?',
      answer:
        'Puedes contactar a nuestro servicio de atención al cliente llamando al número de teléfono XXX-XXXX o enviando un correo electrónico a support@example.com.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={3} minHeight={'80vh'}>
      <Typography variant='h4' gutterBottom>
        Preguntas Frecuentes
      </Typography>

      <TextField
        label='Buscar'
        variant='outlined'
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin='normal'
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />

      {filteredFaqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default HelpPage;
