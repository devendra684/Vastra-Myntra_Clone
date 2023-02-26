import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // deleteCartData, 
  fetchCartData
} from "../Redux/Cart/Cart.action";
import CartComponent from "./CartComponent";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import PaymentNavbar from "../Components/PaymentNavbar";
import { useNavigate } from "react-router-dom";
import { deleteCartAPI } from "../Redux/Cart/Cart.api";
import { postCheckoutData } from "../Redux/Checkout/Checkout.action";

const Cart = () => {
  const { loading, error } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const goToAddress = useNavigate()
  const [sampleData, setSampleData] = useState([]);

  const fetchCartAPI = async () => {
    let res = await axios.get(`https://vastra.onrender.com/cart`);
    const result = res?.data?.map((item) => {
      return {
        ...item,
        isChecked: false,
        qty: 1,
      };
    });
    setSampleData(result);
  };
  useEffect(() => {
    dispatch(fetchCartData());
    fetchCartAPI();
  }, [dispatch]);

  const handleCheckData = (id, cart) => {
    const resultData = sampleData?.map((item) => {
      return item?.id === id ? { ...item, isChecked: !item?.isChecked } : item;
    });
    setSampleData(resultData);
    dispatch(postCheckoutData(cart));
  };
  let resultcount;
  let resultStriked;
  const handleChangeQty = (value, id) => {
    const resultData = sampleData?.map((item) => {
      return item?.id === id ? { ...item, qty: value } : item;
    });
    setSampleData(resultData);
  };

  const removeFromCart = async (id) => {
    await deleteCartAPI(id)
    fetchCartAPI()
  }

  resultcount = 0;
  sampleData
    ?.filter((item) => item.isChecked === true)
    ?.map((item) => {
      resultcount =
        Number(resultcount) + Number(item.discounted_price) * Number(item.qty);
      return resultcount;
    });
  resultStriked = 0;
  sampleData
    ?.filter((item) => item.isChecked === true)
    ?.map((item) => {
      resultStriked =
        Number(resultStriked) + Number(item.strike_price) * Number(item.qty);
      return resultStriked;
    });
  //console.log("resultStriked", resultStriked);

  const resultTotalItem = sampleData?.filter((item) => (
    item.isChecked === true
  ))
  // console.log("resultTotalItem",resultTotalItem)

  const placeOrderObj = {
    "Total MRP": resultcount,
    "Discount on MRP": resultStriked,
  };
  // console.log(placeOrderObj);

  if (loading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageNotFound />
      </>
    );
  }

  const checkCount = sampleData?.filter((item) => {
    return item?.isChecked === true;
  });

  return (
    <>
      <Box>
        {/* <Navbar/> */}
        <PaymentNavbar />
      </Box>

      <Box m={"auto"} mt={{ base: '4rem', sm: "4rem", md: '6rem', lg: '6rem' }}
        //m={{sm:"8rem 1rem", md: "3rem 1rem", lg: "3rem 5rem" }}
        width={{ base: "90%", sm: "90%", md: "70%", lg: "70%" }}
      >
        <Flex
          // p={{ md: "4rem 5rem", sm: "4rem 0rem", base: "4rem 0.5rem" }}
          alignItems={"flex-start"}
          width={"100%"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          m={"auto"}
          gap={6}
        >
          <Box width={{ base: "100%", sm: "100%", md: "60%", lg: "55%" }} margin={"auto"} mt={0} >
            <Box border={"0px solid #9e998f"}>
              <Flex
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                gap={2}
                textAlign={'left'}
              >
                <Text color={"gray.700"} fontWeight={600} noOfLines={{ base: 1, sm: 1 }} fontSize={"0.9rem"}>
                  Check Delivery time & services
                </Text>
                <Button
                  fontSize={{ base: "0.6rem", sm: '0.7rem', md: "0.8rem", lg: "0.8rem" }}
                  //h={"2.3rem"}
                  borderRadius={0}
                  backgroundColor={"#fff"}
                  border={"1px solid tomato"}
                  outline={"tomato"}
                  color={"tomato"}
                >
                  {" "}
                  ENTER PIN CODE
                </Button>
              </Flex>
            </Box>
            <Box mb={3} border={"0px solid #9e998f"}>
              <Flex
                p={{ sm: "0" }}
                fontSize={"0.9rem"}
                alignItems={"center"}
                gap={"1rem"}
              >
                <Text
                  color={"gray.700"}
                  fontWeight={600}
                  fontSize={"0.8rem"}
                >
                  {`(${checkCount.length}/${sampleData.length}) ITEMS SELECTED`}
                </Text>
              </Flex>
            </Box>
            <Box m={"auto"}  >
              {sampleData?.map((cart, i) => (
                <CartComponent
                  key={i}
                  cart={cart}
                  handleCheckData={handleCheckData}
                  handleChangeQty={handleChangeQty}
                  removeFromCart={removeFromCart}
                />
              ))}
            </Box>
          </Box>
          <Box
            border={"0px solid gray"}
            width={{ base: "100%", sm: "100%", md: "50%", lg: "45%" }}
            //margin={"auto"}
            p={3}
            boxShadow={'md'}
          >
            <Box textAlign={"left"} borderBottom={"1px solid gray"} >
              <Text >PRICE DETAILS ({resultTotalItem.length}{" "}item)</Text>
            </Box>
            <Box p={"1rem 0"} borderBottom={"1px solid gray"}>
              {Object.keys(placeOrderObj).map((item) => {
                return (
                  <Flex key={item} justifyContent={"space-between"}>
                    <Text key={item} >{item}</Text>
                    <Text>{placeOrderObj[item]}</Text>
                  </Flex>
                );
              })}
            </Box>
            <Button _hover={{ backgroundColor: "white", color: "pink.400", outline: "2px solid #e10765" }} w={"100%"} mt={"2rem"} color={"white"} backgroundColor={"pink.400"} onClick={() => {
              goToAddress("/address");
              localStorage.setItem('Total MRP', resultcount);
              localStorage.setItem('DiscountPrice', resultStriked);
            }}>PLACE ORDER</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Cart;
