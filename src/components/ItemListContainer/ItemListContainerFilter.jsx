import { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";

const ItemListContainerFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Container maxWidth="xs">
      <FormControl fullWidth sx={{ mt: 3 }} alignItems="center">
        <Typography variant="h6" noWrap component="div">
          Filtrar por categoría
        </Typography>
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <MenuItem key={`${category}-${index}`} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default ItemListContainerFilter;
