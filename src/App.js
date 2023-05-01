import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Box, Container} from '@mui/material';
import BarMobile from './components/Navbar/BarMobile';
import NavbarRender from './components/Navbar/Navbar';
import Contador from './components/CartCounter/CartCounter';
import ProductList from './components/Product/ProductList';
import ProductCarousel from './components/Carrusel/CarruselView';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail';
import SearchProduct from './components/Search/SearchContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const product = {
    id: 1,
    name: 'Laptop',
    description: 'Powerful laptop with 16GB RAM and 512GB SSD',
    descriptionGeneral:
      'Powerful laptop with 16GB RAM and 512GB SSD es un producto recién lanzado al mercado de Asia',
    price: 1200,
    img: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1682974657/react43185/monitor1_dvgvxw.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1682974657/react43185/monitor2_qpz8q5.webp',
      },
      {
        id: 3,
        url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1682974656/react43185/monitor3_uznzo6.webp',
      },
      {
        id: 4,
        url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1682974656/react43185/monitor4_lv7elg.webp',
      },
    ],
    stock: 10,
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Monitor',
      description: '27-inch monitor with 4K resolution',
      price: 500,
      img: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678668052/CoderHoseReact/Transito2_l2wtge.png',
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678664190/CoderHoseReact/causa2_ezhbot.png',
        },
        {
          id: 4,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
      ],
      stock: 5,
    },
    {
      id: 3,
      name: 'Keyboard',
      description: 'Mechanical keyboard with RGB lighting',
      price: 80,
      img: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678668052/CoderHoseReact/Transito2_l2wtge.png',
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678664190/CoderHoseReact/causa2_ezhbot.png',
        },
        {
          id: 4,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
      ],
      stock: 15,
    },
    {
      id: 4,
      name: 'Mouse',
      description: 'Wireless mouse with ergonomic design',
      price: 50,
      img: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678668052/CoderHoseReact/Transito2_l2wtge.png',
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678664190/CoderHoseReact/causa2_ezhbot.png',
        },
        {
          id: 4,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
      ],
      stock: 20,
    },
    {
      id: 5,
      name: 'Headphones',
      description: 'Noise-cancelling headphones with Bluetooth connectivity',
      price: 150,
      img: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678668052/CoderHoseReact/Transito2_l2wtge.png',
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678664190/CoderHoseReact/causa2_ezhbot.png',
        },
        {
          id: 4,
          url: 'https://res.cloudinary.com/dtvrg3by2/image/upload/v1678667685/CoderHoseReact/zoonosis2_zslxvj.png',
        },
      ],
      stock: 8,
    },
  ];

  return (
    <Box sx={{mb: 8}}>
      <NavbarRender />
      <Container maxWidth='xl' sx={{display: {display: 'grid'}}}>
        <SearchProduct />
        {/* <ItemListContainer /> */}

        {/* <ProductList></ProductList> */}
        {/* <ProductCarousel></ProductCarousel> */}
        {/* <ProductDetail /> */}
        {/* <Contador stock={8}></Contador> */}

        <ItemDetailContainer
          productDetails={product}
          relatedProducts={relatedProducts}
        />
      </Container>
      <Footer />
      <BarMobile />
    </Box>
  );
}

export default App;
