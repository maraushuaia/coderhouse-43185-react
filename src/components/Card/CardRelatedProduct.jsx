// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import {CardActionArea, Box, Divider} from '@mui/material';

// const CardRelatedProduct = ({imgPrincipal, price, extract, oferta}) => {
//   console.log('Imagen Principal recibida CardRelatedProduct =>', imgPrincipal);

//   const truncatedExtract =
//     extract.length > 80 ? extract.substring(0, 80) + '...' : extract;

//   return (
//     <Box sx={{mx: 2, height: '100%'}}>
//       <Card>
//         <CardActionArea>
//           <CardMedia
//             component='img'
//             height='140'
//             image={imgPrincipal}
//             sx={{mt: 2}}
//           />
//           <CardContent sx={{my: 1}}>
//             <Typography gutterBottom variant='h5' component='div'>
//               ${price}
//             </Typography>
//             <Typography variant='body2' color='text.secondary'>
//               {truncatedExtract}
//             </Typography>
//             <Divider sx={{my: 2}} />
//             <Typography
//               sx={{
//                 color: 'success.dark',
//                 display: 'inline',
//                 fontWeight: 'medium',
//                 mx: 0.5,
//               }}
//               variant='body2'
//             >
//               Producto en Oferta
//             </Typography>
//             <Typography
//               sx={{color: 'text.secondary', display: 'inline', fontSize: 12}}
//               variant='body2'
//             >
//               Aprovechá ahora
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </Box>
//   );
// };

// export default CardRelatedProduct;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Box, Divider} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {styled} from '@mui/system';

const GreenCircle = styled('div')({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'green',
  color: 'white',
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  fontWeight: 'bold',
});

const CardRelatedProduct = ({
  imgPrincipal,
  price,
  extract,
  oferta,
  isFavorite,
}) => {
  console.log('Imagen Principal recibida CardRelatedProduct =>', imgPrincipal);

  const truncatedExtract =
    extract.length > 50 ? extract.substring(0, 50) + '...' : extract;

  return (
    <Box sx={{mx: 1.5, mb: 3, height: '100%'}}>
      <Card sx={{height: '350px'}}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={imgPrincipal}
            sx={{mt: 2}}
          />
          {oferta && (
            <GreenCircle>
              <Typography variant='body2'>OFF</Typography>
            </GreenCircle>
          )}
          <CardContent sx={{my: 1}}>
            <Typography gutterBottom variant='h5' component='div'>
              ${price}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {truncatedExtract}
            </Typography>

            {isFavorite && (
              <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
                <FavoriteIcon color='error' />
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardRelatedProduct;
