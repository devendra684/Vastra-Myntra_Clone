import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
const LoadingPage = () => {
  return <div>
    
    <Navbar />
    <Box position={"fixed" } top={"50%"}  left={"50%"} transform={"translate(-50% , -50%)"}>
          <Image w={"200px"} m={"auto"} align={"center"} src='https://media.tenor.com/guhB4PpjrmUAAAAC/loading-loading-gif.gif' alt="loading" />
    </Box>
  </div>;
};

export default LoadingPage;
