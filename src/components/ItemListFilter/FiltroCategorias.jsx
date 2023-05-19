import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useSearchCategories from "../hooks/useSearchCategories";

const FiltroCategorias = () => {
  const categories = useSearchCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">Select a category</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FiltroCategorias;
