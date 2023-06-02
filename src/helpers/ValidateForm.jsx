const ValidateForm = (formData, requiredFields) => {
  for (const fieldName of requiredFields) {
    if (!formData.hasOwnProperty(fieldName)) {
      return false;
    }

    const fieldValue = formData[fieldName];

    // Verifica si el campo es obligatorio y está vacío o contiene solo espacios en blanco
    if (!fieldValue || fieldValue.trim().length === 0) {
      return false;
    }
  }

  return true;
};

export default ValidateForm;
