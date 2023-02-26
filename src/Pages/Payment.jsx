import {
  Box,
  Flex,
  FormLabel,
  HStack,
  Stack,
  Text,
  Image,
  Heading,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar/Navbar";
import PaymentNavbar from "../Components/PaymentNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, fetchCartData } from "../Redux/Cart/Cart.action";
import { deleteCheckoutData, getCheckoutData } from "../Redux/Checkout/Checkout.action";

function Payment() {
  const [toggle, setToggle] = useState(true);
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState({
    cardno: "",
    cardName: "",
    month: "",
    cvv: "",
  });
  const { cartData } = useSelector((store) => store.cart);
  const { checkoutData } = useSelector((store) => store.checkout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
    dispatch(getCheckoutData());
  }, [])
  console.log("Cr", cartData);
  console.log("C", checkoutData);
  const TotalMRP = localStorage.getItem("Total MRP");
  const DiscountPrice = localStorage.getItem("DiscountPrice");

  const captcha = 3535;
  const { cardno, cardName, month, cvv } = value;

  const activeStyle = {
    fontSize: "14px",
    fontWeight: "700",
    borderLeft: "5px solid #ff3f6c",
    cursor: "pointer",
    marginTop: "none",
    color: "#ff3f6c",
    backgroundColor: "#fff",
  };

  const defaultStyle = {
    backgroundColor: "lightgray",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "none",
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleSubmit = () => {
    for (let i = 0; i < cartData.length; i++) {
      for (let j = 0; j < checkoutData.length; j++) {
        if (cartData[i].id === checkoutData[j].id) {
          dispatch(deleteCartData(cartData[i].id)).then(() => dispatch(fetchCartData()));
          dispatch(deleteCheckoutData(checkoutData[j].id)).then(() => dispatch(getCheckoutData()));
          console.log("CD", cartData);
        }
      }
    }

    if (code !== captcha || code === "") {
      toast.error("Please fill the capture first", {
        position: "top-center",
      });

      return;
    }
    navigate("/success");
  };
  const handleSubmitCard = () => {
    for (let i = 0; i < cartData.length; i++) {
      for (let j = 0; j < checkoutData.length; j++) {
        if (cartData[i].id === checkoutData[j].id) {
          dispatch(deleteCartData(cartData[i].id)).then(() => dispatch(fetchCartData()));
          dispatch(deleteCheckoutData(checkoutData[j].id)).then(() => dispatch(getCheckoutData()));
          console.log("CD", cartData);
        }
      }
    }
    if (!cardName || !cardno || !month || !cvv) {
      toast.error("Please fill the field first", {
        position: "top-center",
      });
      return;
    }
    navigate("/success");
  };
  return (
    <>
      {/* <Navbar /> */}
      <PaymentNavbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        lineHeight={"18.5714px"}
        border={"0px solid gray"}
      >
        <HStack
          mt={9}
          spacing={[0, 0, 8]}
          mx={"auto"}
          py={12}
          px={6}
          border={"0px solid gray"}
          alignItems={"flex-start"}
          display={["grid", "grid", "flex"]}
          w={["full", "full", "70%"]}
        >
          <Box borderRight={"1px solid lightgray"} p={6} mb={4}>
            <Stack>
              <Box border={"1px solid lightgray"} p={2}>
                <HStack>
                  <Image
                    src="https://w7.pngwing.com/pngs/679/616/png-transparent-sales-discounts-and-allowances-computer-icons-dicount-miscellaneous-angle-text.png"
                    w="30px"
                  />
                  <Text fontWeight={700} fontSize="14px">
                    Bank Offer
                  </Text>
                </HStack>
                <Text
                  margin={"10px 0px"}
                  textAlign={"left"}
                  paddingLeft="40px"
                  color="gray"
                  fontSize={"13px"}
                >
                  • 10% Instant Discount on Credit and Debit Card on a min Spend
                  of Rs 3,000. TCA{" "}
                </Text>
                <Text
                  textAlign={"left"}
                  paddingLeft="40px"
                  fontWeight={700}
                  fontSize="14px"
                  color={"#ff3f6c"}
                >
                  Show More
                </Text>
              </Box>

              <Box w="full">
                <Heading textAlign={"left"} fontSize="16px" p={"10px 0"}>
                  Choose Payment Mode
                </Heading>
                <HStack
                  border={"1px solid lightgray"}
                  justifyContent={"space-between"}
                  p={5}
                >
                  {toggle ? (
                    <Box
                      marginTop={[0, 0, 0]}
                      w="40%"
                    >
                      <Box onClick={handleToggle} style={activeStyle} p={2}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={2}
                        onClick={handleToggle}
                        style={defaultStyle}
                        p={2}
                      >
                        Credit/Debit Card
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        PhonePe/Google
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        Net Banking
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  ) : (
                    <Box marginTop={[0, 0, 0]} w="40%">
                      <Box onClick={handleToggle} style={defaultStyle} p={2}>
                        Cash On Delivery
                      </Box>
                      <Box
                        mt={2}
                        onClick={handleToggle}
                        style={activeStyle}
                        p={2}
                      >
                        Credit/Debit Card
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        PhonePe/Google
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        Pay-tm/Wallets
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        Net Banking
                      </Box>
                      <Box mt={2} style={defaultStyle} p={2}>
                        EMI/Pay Later
                      </Box>
                    </Box>
                  )}
                  {toggle ? (
                    <Box pl={4}>
                      <Stack border={"0px solid"} textAlign="left" spacing={4}>
                        <FormControl>
                          <Stack spacing={4}>
                            <Text marginBottom={"30px"} fontWeight={"700"}>
                              Pay On Delivery (Cash/UPI)
                            </Text>
                            <Box
                              w={"30%"}
                              textAlign="center"
                              p={2}
                              border={"1px solid"}
                              borderRadius="5px"
                            >
                              {captcha}
                            </Box>

                            <Input
                              w="60%"
                              type={"text"}
                              value={code}
                              fontSize={"15px"}
                              placeholder="Enter code Show in above image*"
                              isRequired
                              onChange={(e) => setCode(Number(e.target.value))}
                            />
                            <Text fontSize={"12px"} color={"gray"}>
                              You can pay via Cash or UPI enabled app at the
                              time on delivery. Ask executive for these options
                            </Text>
                            <Button
                              background={"#ff3f6c"}
                              color="#fff"
                              _hover={{
                                backgroundColor: "#fff36c",
                              }}
                              onClick={handleSubmit}
                            >
                              Place Order
                            </Button>
                          </Stack>
                        </FormControl>
                      </Stack>
                    </Box>
                  ) : (
                    <Box textAlign={"left"} pl={4}>
                      <FormControl>
                        <Text m={"10px 0px"} fontSize="14px" fontWeight={"700"}>
                          CREDIT/DEBIT CARD
                        </Text>
                        <Text fontSize={"14px"} color="darkgray">
                          please ensure your card can be used or online
                          transaction .<Text color="#ff3f6c">know More</Text>
                        </Text>
                        <Stack mt={4} spacing={6}>
                          <Input
                            fontSize={"13px"}
                            type="number"
                            placeholder="Card Number"
                            isRequired
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                cardno: e.target.value,
                              }))
                            }
                          />
                          <Input
                            fontSize={"13px"}
                            type="text"
                            marginTop={4}
                            marginBottom={4}
                            placeholder="Name on card"
                            isRequired
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                cardName: e.target.value,
                              }))
                            }
                          />
                          <HStack>
                            <Input
                              fontSize={"13px"}
                              type="month"
                              placeholder="Valid Thru(MM/YY)"
                              isRequired
                              onChange={(e) =>
                                setValue((prev) => ({
                                  ...prev,
                                  month: e.target.value,
                                }))
                              }
                            />
                            <Input
                              fontSize={"13px"}
                              type="number"
                              placeholder="CVV"
                              isRequired
                              onChange={(e) =>
                                setValue((prev) => ({
                                  ...prev,
                                  cvv: e.target.value,
                                }))
                              }
                            />
                          </HStack>
                          <Button
                            mt={4}
                            background={"#ff3f6c"}
                            color="#fff"
                            w="full"
                            _hover={{
                              backgroundColor: "#fff36c",
                            }}
                            onClick={handleSubmitCard}
                          >
                            Pay Now
                          </Button>
                        </Stack>
                      </FormControl>
                    </Box>
                  )}
                </HStack>
              </Box>

              <Flex marginTop="30px" flexFlow={"wrap"}>
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                  alt="card"
                />
                <Image
                  w="70px"
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                  alt="card"
                />
              </Flex>
            </Stack>
          </Box>
          <Box
            border={"px solid gray"}
            w={["full", "full", "45%"]}
            marginTop={[8, 8, 0]}
          >
            <Stack p={4}>
              <FormLabel fontSize={"12px"} fontFamily={"1000"}>
                PRICE DETAILS (items)
              </FormLabel>
              <HStack justifyContent={"space-between"}>
                <Text fontSize={"14px"}>Total MRP</Text>
                <Text>₹ {TotalMRP}</Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <Text fontSize={"14px"}>Discount on MRP</Text>
                <Text color={"green"}>
                  ₹ {Number(DiscountPrice) - Number(TotalMRP)}
                </Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <HStack>
                  <Text fontSize={"14px"}>Convenience Fee </Text>
                  <Text color={"#ff3f6c"} fontSize={"13px"} fontWeight={"500"}>
                    Know More
                  </Text>{" "}
                </HStack>
                <HStack>
                  <Text fontSize={"14px"} textDecoration={"line-through"}>
                    ₹99{" "}
                  </Text>
                  <Text color={"green"} fontSize={"13px"} fontWeight={"500"}>
                    FREE
                  </Text>{" "}
                </HStack>
              </HStack>
              <hr />
              <HStack justifyContent={"space-between"}>
                <Text fontSize={"14px"} fontWeight={"500"}>
                  Total Amount
                </Text>
                <Text fontSize={"14px"} fontWeight={"500"}>
                  ₹ {TotalMRP}
                </Text>
              </HStack>
            </Stack>
          </Box>
        </HStack>
        <ToastContainer />
      </Flex>
    </>
  );
}

export default Payment;
