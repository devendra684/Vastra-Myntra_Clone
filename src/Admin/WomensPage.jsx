import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import { deleteWomensData, getWomensData, updateWomensData } from "../Redux/Admin/Admin.action";
import Tablecard from "./Tablecard";
const WomensPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState('');
  const [StrikePrice, setStrikePrice] = useState('');
  const [discount, setDiscount]=useState('');
  const [id,setId]=useState('');
  const WomensData = useSelector((store) => store.adminManager.womensData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomensData());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteWomensData(id)).then(()=>dispatch(getWomensData()));
  };

  const handleUpdate=()=> {
    dispatch(updateWomensData(id, price, discount, StrikePrice)).then(()=>{
       dispatch(getWomensData());
      onClose();
    })
     
 };
const handleOpen=(id)=>{
  setId(id);
  onOpen();
}

  //console.log("Womens",WomensData);
  return (
    <Box bg={"gray.100"} width={"100%"}>
      <AdminNavbar />
      <Box style={{ width: "83%", marginLeft: "250px", marginTop: "80px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead bg={"#990578"}>
              <Tr>
                <Th color={"white"}>Sr No.</Th>
                <Th color={"white"}>Image</Th>
                <Th color={"white"}>Title</Th>
                <Th color={"white"}>Brand</Th>
                <Th color={"white"}>Price</Th>
                <Th color={"white"}>Strike Price</Th>
                <Th color={"white"}>Edit</Th>
                <Th color={"white"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {WomensData.length !== 0 &&
                WomensData?.map((el, i) => (
                  <Tablecard
                    key={i}
                    {...el}
                    ind={i}
                    handleDelete={handleDelete}
                    handleOpen={handleOpen}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type={"number"}
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Discount Price </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"number"}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Strike Amount </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"number"}
                  value={StrikePrice}
                  onChange={(e) => setStrikePrice(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
      </ModalContent>
   </Modal>
      </Box>
    </Box>
  );
};

export default WomensPage;
