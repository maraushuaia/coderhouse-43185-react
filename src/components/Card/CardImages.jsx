import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

const CardImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  console.log("Imagenes recibidas (CardImages): ", images);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid
        sx={{
          display: { md: "flex" },
          mb: 2,
          justifyContent: "center",
        }}
        ml={{ xs: 0, sm: 3, md: 3, lg: 3 }}
        flexDirection={{ xs: "row", sm: "colum", md: "colum", lg: "colum" }}
      >
        <Box
          width={{ xs: "100%", sm: "370px", md: "800px", lg: "800px" }}
          height={{ xs: "340px", sm: "400px", md: "620px", lg: "620px" }}
          sx={{
            backgroundImage: `url(${selectedImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderRadius: "4px",
          }}
        />

        <Grid item xs={12} sm={8} md={8} lg={2} xl={2}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: {
                xs: "row",
                md: "column",
                lg: "column",
              },
              alignItems: "center",
            }}
          >
            {images.map(
              (image, index) => (
                console.log(
                  "Imagen seleccionada (CardImages): ",
                  selectedImage
                ),
                (
                  <Box
                    key={index}
                    width={{ xs: "55px", sm: "75px", md: "100px", lg: "160px" }}
                    height={{
                      xs: "55px",
                      sm: "75px",
                      md: "100px",
                      lg: "100px",
                    }}
                    sx={{
                      // backgroundImage: `url(${image.url})`,
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      cursor: "pointer",
                      border:
                        selectedImage === image ? "2px solid black" : "none",
                      borderRadius: "4px",
                      alignItems: "center",
                      m: 1,
                    }}
                    onClick={() => handleImageSelect(image)}
                  />
                )
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardImages;
