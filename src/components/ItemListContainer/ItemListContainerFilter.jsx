import React, {useState} from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from '@mui/material';

const ItemListContainerFilter = ({categories, onCategoryChange}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Container maxWidth='xs'>
      <FormControl fullWidth sx={{mt: 3}}>
        <InputLabel id='category-label'>Select a category</InputLabel>
        <Select
          labelId='category-label'
          id='category'
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

// import React, {useState} from 'react';
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Container,
// } from '@mui/material';

// const ItemListContainerFilter = ({categories, onCategoryChange}) => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     onCategoryChange(category);
//   };

//   return (
//     <Container maxWidth='xs'>
//       <FormControl fullWidth sx={{mt: 3}}>
//         <InputLabel id='category-label'>Select a category</InputLabel>
//         <Select
//           labelId='category-label'
//           id='category'
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           {categories.map((category) => (
//             <MenuItem key={category.id} value={category.id}>
//               {category.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Container>
//   );
// };

// export default ItemListContainerFilter;
