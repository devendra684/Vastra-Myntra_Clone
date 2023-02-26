import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Image,
  Button,
  Text,
  HStack,
  Heading,
  ButtonGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import PaymentNavbar from '../Components/PaymentNavbar';
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Address() {
  const [toggle, setToggle] = useState(true)
  // const[error, setError]=useState("")
  const [value, setValue] = useState({
    name: "",
    mobileno: "",
    pinCode: "",
    address: "",
    town: "",
    city: "",
    state: "",
  })


  const { name, mobileno, pinCode, address, town, city, state } = value

  const handleSubmit = () => {
    if (!name || !mobileno || !pinCode || !address || !town || !city || !state) {
      toast.error(`Please fill the field first`, {
        position: "top-center",
      });
      return
    }
    console.log(value)
    setToggle(!toggle)
  }

  const handleTogge = () => {
    setToggle(!toggle)
  }

  const TotalMRP = localStorage.getItem('Total MRP');
  const DiscountPrice = localStorage.getItem('DiscountPrice');

  return (
    <Box>
      <PaymentNavbar />
      <Flex

        minH={'100vh'}
        align={'center'}
        justify={'center'}
        lineHeight={"18.5714px"}
        border={"0px solid gray"}
      >
        <HStack mt={9} zIndex="9" spacing={[0, 0, 8]} mx={'auto'} py={12} px={6} border={"0px solid gray"} alignItems={"flex-start"}
          display={["grid", "grid", "flex"]}
          w={["full", "full", "70%"]}
        // mt={[4 , 4 , 0]}
        >
          {
            toggle ?
              <Box padding={8} borderRight={"1px solid lightgray"}>
                <Box
                  border={"1px solid lightgray"}
                  p={6}
                  mb={4}
                // w={"lg"}
                >
                  <Stack spacing={4}  >
                    <FormControl>
                      <FormLabel fontSize={"11px"} fontFamily={"1000"}>CONTACT DETAILS</FormLabel>
                      <Input type="text" placeholder='Name*' isRequired fontSize={"13px"} marginBottom={4}
                        onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))}
                      />
                      <Input type="number" placeholder='Mobile No*' isRequired fontSize={"13px"} marginBottom={4}
                        onChange={(e) => setValue((prev) => ({ ...prev, mobileno: e.target.value }))}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={"11px"} fontFamily={"1000"} >ADDRESS</FormLabel>
                      <Input type="number" placeholder="Pin Code*" isRequired fontSize={"13px"} marginBottom={4}
                        onChange={(e) => setValue((prev) => ({ ...prev, pinCode: e.target.value }))}
                      />
                      <Input type="text" placeholder='Address (House No, Building, Street, Area)*' isRequired fontSize={"13px"} marginBottom={4}
                        onChange={(e) => setValue((prev) => ({ ...prev, address: e.target.value }))}
                      />
                      <Input type="text" placeholder='Locality / Town*' isRequired fontSize={"13px"} marginBottom={4}
                        onChange={(e) => setValue((prev) => ({ ...prev, town: e.target.value }))}
                      />
                    </FormControl>
                    <HStack justifyContent={"space-between"} >
                      <Box>
                        <FormControl isRequired>

                          <Input type="text"
                            placeholder='City/District*'
                            fontSize={"13px"} marginBottom={4}
                            onChange={(e) => setValue((prev) => ({ ...prev, city: e.target.value }))}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl isRequired>

                          <Input type="text" placeholder='State*'
                            fontSize={"13px"} marginBottom={4}
                            onChange={(e) => setValue((prev) => ({ ...prev, state: e.target.value }))}
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Make this my default address</Checkbox>
                      </Stack>
                      {/* <Text  color={"red"} >{error}</Text> */}
                      <Button
                        fontSize={"14px"}
                        bg={'#ff3f6c'}
                        color={'white'}
                        onClick={handleSubmit}
                        _hover={{
                          bg: '#ff3f6c',
                        }}>
                        ADD ADDRESS
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
              :
              <Box border={"0px solid lightgray"}
                p={6}
                mb={4}
                w={"full"}
                textAlign={"left"}
              >
                <HStack
                  justifyContent={"space-between"}
                >
                  <Heading
                    fontSize={"18px"}
                    textAlign={"left"} >Select Delivery Address</Heading>
                  <Text fontSize={"11px"} fontWeight={"500"} p={1} borderRadius={"4px"} border={"1px solid black"} color={"gray"} >ADD NEW ADDRESS</Text>
                </HStack>


                <HStack mt={6}>
                  <Heading textAlign={"left"} fontSize={"12px"} color={"gray"} >DEFAULT ADDRESS</Heading>
                </HStack>
                <Stack mt={6} fontSize={"12px"}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  p={4}
                  borderRadius="4px"
                >
                  <HStack>
                    <Text fontSize={"14px"} fontWeight="700" >{value.name}</Text>
                    <Box fontSize={"10px"} color="green" border={"1px solid green"} borderRadius="8px" padding="0px 9px" fontWeight={"700"} >HOME</Box>
                  </HStack>
                  <Text color={"gray"} >{value.address}, {town}</Text>
                  <Text color={"gray"} >{value.city}, {value.state}-{value.pinCode} </Text>

                  <Text pt={2} pb={2} color={"gray"} >Mobile: <b fontWeight={"500"} >{value.mobileno}</b></Text>

                  <Text>• pay on Delivery available</Text>

                  <ButtonGroup>
                    <HStack>
                      <Button fontSize={"12px"} bg="#fff" border={"1px solid"}
                        onClick={handleTogge}
                        _hover={{
                          bg: '#ff3f6c',
                          border: "none",
                          color: "#fff"
                        }}
                      >REMOVE</Button>

                    </HStack>
                  </ButtonGroup>

                </Stack>

                <Flex marginTop="30px" flexFlow={"wrap"}  >
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="card" />
                  <Image w="70px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="card" />
                </Flex>

              </Box>
          }
          {
            toggle ?
              <Box border={"px solid gray"} w={["full", "full", "45%"]} marginTop={[8, 8, 0]}  >
                <Stack p={4} >
                  <FormLabel fontSize={"12px"} fontFamily={"1000"} >PRICE DETAILS (items)</FormLabel>
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} >Total MRP</Text>
                    <Text>₹ {TotalMRP}</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} >Discount on MRP</Text>
                    <Text color={"green"} >₹ {Number(DiscountPrice) - Number(TotalMRP)}</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"} >
                    <HStack><Text fontSize={"14px"}>Convenience Fee </Text><Text color={"#ff3f6c"} fontSize={"13px"} fontWeight={"500"} >Know More</Text> </HStack>
                    <HStack><Text fontSize={"14px"} textDecoration={'line-through'} >₹99 </Text><Text color={"green"} fontSize={"13px"} fontWeight={"500"} >FREE</Text> </HStack>
                  </HStack>
                  <hr />
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} fontWeight={"500"} >Total Amount</Text>
                    <Text fontSize={"14px"} fontWeight={"500"} >₹ {TotalMRP}</Text>
                  </HStack>

                </Stack>
              </Box>
              :
              <Box border={"px solid gray"} w={["full", "full", "45%"]} marginTop={[8, 8, 0]}  >
                <Stack p={4} >
                  <FormLabel fontSize={"12px"} fontFamily={"1000"} >PRICE DETAILS (items)</FormLabel>
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} >Total MRP</Text>
                    <Text>₹ {TotalMRP}</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} >Discount on MRP</Text>
                    <Text color={"green"} >₹ {Number(DiscountPrice) - Number(TotalMRP)}</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"} >
                    <HStack><Text fontSize={"14px"}>Convenience Fee </Text><Text color={"#ff3f6c"} fontSize={"13px"} fontWeight={"500"} >Know More</Text> </HStack>
                    <HStack><Text fontSize={"14px"} textDecoration={'line-through'}>₹99 </Text><Text color={"green"} fontSize={"13px"} fontWeight={"500"} >FREE</Text> </HStack>
                  </HStack>
                  <hr />
                  <HStack justifyContent={"space-between"} >
                    <Text fontSize={"14px"} fontWeight={"500"} >Total Amount</Text>
                    <Text fontSize={"14px"} fontWeight={"500"} >₹ {TotalMRP}</Text>
                  </HStack>
                  <Link to="/payment" >
                    <Button bg={"#ff3f6c"} color={"#fff"}
                      _hover={{
                        bg: '#ff3f6c',
                      }}
                      w="full"
                    >
                      Checkout
                    </Button>
                  </Link>
                </Stack>
              </Box>
          }
        </HStack>
      </Flex>
      <ToastContainer />
    </Box>
  );
}