import { Box, Button } from "@chakra-ui/react";
import React from "react";
//import { useDispatch } from "react-redux";


const Pagination = ({
  setCurrentPage,
  handlePage,
  currentPage,
  totalPages,
}) => {
  
  totalPages = Math.ceil(+totalPages / 10);

  let buttonArr = [];
  for (let i = 0; i < +totalPages; i++) {
    buttonArr.push(i + 1);
  }

  const handlePageChange = (page) => {
    handlePage(page);
  };

  //console.log(currentPage ,typeof totalPages)
  return (
    <div>
      <Box mt={"2rem"} mb={"1rem"}>
        <Button p={2} fontSize={{sm:"0.7rem",lg:'1rem'}}
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(-1)}
        >
          Previous
        </Button>
        {buttonArr.map((btn, i) => (
          <Button _hover={{backgroundColor:"pink.500",color:"white"}} display={{base:"none",md:"inline-block"}} p={2} fontSize={{sm:"0.7rem" }} onClick={() => setCurrentPage(btn)} m={"0 0.2rem"} key={i} style={currentPage===btn?{backgroundColor:'#ED64A6',color:'white'}:null} >
            {btn}
          </Button>
        ))}
        <Button display={{md:"none",base:"inline-block"}} isDisabled>{currentPage}</Button>
        <Button p={2} fontSize={{sm:"0.7rem",lg:'1rem'}} isDisabled={currentPage === totalPages } onClick={() => handlePageChange(1)}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Pagination;
