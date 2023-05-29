// ProviderCategories.jsx
import React, {createContext, useState} from 'react';

export const CategoriesContext = createContext();

const ContextCategories = ({children}) => {
  const [categories, setCategories] = useState([]);

  return (
    <CategoriesContext.Provider value={[categories, setCategories]}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default ContextCategories;
