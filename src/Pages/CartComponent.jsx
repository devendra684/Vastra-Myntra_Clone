import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";


const CartComponent = ({ cart, handleCheckData, handleChangeQty, removeFromCart }) => {

  return (
    <Box>
      <Box mb={5} border={'1px solid #B2B3C8'} borderRadius={5} >
        <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} >
          <Stack w={"100%"} ml={2} display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
            spacing={3} margin={"auto"} mb={6} boxShadow={'md'} borderRadius={5} p={3} >          <Box
              pl={"0.5rem"}
              textAlign={"left"}
              width={{ sm: "100%", md: "100%", lg: "100%" }}
            >
              <HStack justifyContent={'space-between'} ><Text fontSize={{ md: "0.8rem" }} fontWeight={"700"}>
                {cart.title}
              </Text> <Box position={"relative"}>
                  <CloseIcon position={"absolute"} top={0} right={3} onClick={() => removeFromCart(cart.id)} />
                </Box></HStack>

              <Text fontSize={{ md: "0.8rem" }} mb={2} >
                <Text display={"inline-block"} color={"gray.400"} mr={2} >
                  Sold by:
                </Text>
                {cart.brand}
              </Text>
              <Box mb={2} >
                <Flex alignItems={"center"} gap={"1rem"}>
                  <Text
                    fontSize={{ sm: "0.8rem", md: "1rem" }}
                    fontWeight={700}
                  >
                    Qty:
                  </Text>
                  <Select
                    fontSize={"0.7rem"}
                    value={cart.qty}
                    w={{ md: "25%", lg: "35%", sm: "25%" }}
                    size={"xs"}
                    onChange={(e) => handleChangeQty(e.target.value, cart.id)}
                  >
                    {[1, 2, 3, 4].map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </Box>

              <Flex>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"baseline"}
                  gap={"0.5rem"}
                  mt={1}
                >
                  <Text fontSize={"0.9rem"} fontWeight={"600"}>
                    Rs.{cart.discounted_price * cart.qty}
                  </Text>
                  <Text
                    fontSize={"0.7rem"}
                    alignItems={"baseline"}
                    textDecoration={"line-through"}
                  >
                    Rs.{cart.strike_price * cart.qty}
                  </Text>
                  <Text fontSize={"0.7rem"} color="pink.300">
                    {cart.discount}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Stack>
          <Box
            width={{ sm: "50%", md: "30%", lg: "33%" }}
            position={"relative "}
            margin={"auto"}
          >
            <Image src={cart.images} width={'100%'} ></Image>
            <Checkbox
              top={1}
              left={1}
              isChecked={cart.isChecked}
              backgroundColor={"blackAlpha.300"}
              position={"absolute"}
              onChange={() => handleCheckData(cart.id, cart)}
            ></Checkbox>
          </Box>
          <Stack w={"100%"} ml={2} spacing={3} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}  >
            <Box
              pl={"0.5rem"}
              textAlign={"left"}
              width={{ sm: "100%", md: "100%", lg: "100%" }}
            >
              <HStack justifyContent={'space-between'} ><Text fontSize={{ md: "0.8rem" }} fontWeight={"700"}>
                {cart.title}
              </Text> <Box position={"relative"}>
                  <CloseIcon position={"absolute"} top={0} right={3} onClick={() => removeFromCart(cart.id)} />
                </Box></HStack>

              <Text fontSize={{ md: "0.8rem" }} mb={1} >
                <Text display={"inline-block"} color={"gray.400"}>
                  Sold by:
                </Text>
                {cart.brand}
              </Text>
              <Box >
                <Flex alignItems={"center"} gap={"1rem"}>
                  <Text
                    fontSize={{ sm: "0.8rem", md: "1rem" }}
                    fontWeight={700}
                  >
                    Qty:
                  </Text>
                  <Select
                    fontSize={"0.7rem"}
                    value={cart.qty}
                    w={{ md: "25%", lg: "35%", sm: "25%" }}
                    size={"xs"}
                    onChange={(e) => handleChangeQty(e.target.value, cart.id)}
                  >
                    {[1, 2, 3, 4].map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </Box>

              <Flex>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"baseline"}
                  gap={"0.5rem"}
                  mt={1}
                >
                  <Text fontSize={"0.9rem"} fontWeight={"600"}>
                    Rs.{cart.discounted_price * cart.qty}
                  </Text>
                  <Text
                    fontSize={"0.7rem"}
                    alignItems={"baseline"}
                    textDecoration={"line-through"}
                  >
                    Rs.{cart.strike_price * cart.qty}
                  </Text>
                  <Text fontSize={"0.7rem"} color="pink.300">
                    {cart.discount}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Box>

    </Box>
  );
};

export default CartComponent;
