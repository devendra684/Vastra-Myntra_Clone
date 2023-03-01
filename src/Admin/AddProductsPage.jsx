import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText
} from '@chakra-ui/react';
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from '@chakra-ui/react';
import AdminNavbar from './AdminNavbar';
import {useDispatch} from 'react-redux';
import { postKidsData, postMensData, postWomensData } from '../Redux/Admin/Admin.action';


const Form1 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Product Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="title" fontWeight={500}>
            Title
          </FormLabel>
          <Input id="first-name" placeholder="Enter Product Name" value={productDetails.title} onChange={(e)=>setProductDetails({...productDetails,title:e.target.value})} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="brand" fontWeight={500}>
            Brand
          </FormLabel>
          <Input id="last-name" placeholder="Enter Brand Name" value={productDetails.brand} onChange={(e)=>setProductDetails({...productDetails,brand:e.target.value})}  />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="category"  fontWeight={500}>
          Category
        </FormLabel>
        <Select
          id="category"
          autoComplete="category"
          placeholder="Select Category"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          value={productDetails.category} onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})} 
          rounded="md">
          <option value={"Mens"} >Mens</option>
          <option value={"Womens"} >Womens</option>
          <option value={"Kids"} >Kids</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="price"  fontWeight={500}>
          Price
        </FormLabel>
        <Input id="price" type="text" placeholder='Enter Price' value={productDetails.discounted_price} onChange={(e)=>setProductDetails({...productDetails,discounted_price:+e.target.value})}  />
      </FormControl>

    </>
  );
};

const Form2 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Discount Rate
        </FormLabel>
        <Input
          type="text"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          placeholder='Enter Discount Amount'
          rounded="md"
          value={productDetails.discount} 
          onChange={(e)=>setProductDetails({...productDetails,discount:+e.target.value})}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Strike Amount
        </FormLabel>
        <Input
          type="text"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          placeholder='Enter Strike Amount'
          rounded="md"
          value={productDetails.strike} 
          onChange={(e)=>setProductDetails({...productDetails,strike_price:+e.target.value})}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Size
        </FormLabel>
          <Select
          id="size"
          autoComplete="size"
          placeholder="Select size"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          value={productDetails.size} 
          onChange={(e)=>setProductDetails({...productDetails,size:e.target.value})}
          rounded="md">
          <option value={"XS"} >XS --(Extra Small) </option>
          <option value={"S"} >S --(Small)</option>
          <option value={"M"} >M --(Medium)</option>
          <option value={"L"} >L --(Large)</option>
          <option value={"XL"} >XL --(Extra Large)</option>
          <option value={"XXL"} >XXL --(Double Extra Large)</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
            >
            Image
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="url"
              placeholder="Enter Image URL"
              focusBorderColor="brand.400"
              rounded="md"
              value={productDetails.images}
              onChange={(e)=>setProductDetails({...productDetails,images:[e.target.value]})}
            />
          </InputGroup>
        </FormControl>

    </>
  );
};

const Form3 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Optional Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>

        <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          autoComplete="country"
          placeholder="Select Country"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          value={productDetails.country}
          onChange={(e)=>setProductDetails({...productDetails,country:e.target.value})}
          rounded="md">
          <option value={"India"} >India</option>
          <option value={"United States"} >United States</option>
          <option value={"Canada"} >Canada</option>
          <option value={"Mexico"} >Mexico</option>
        </Select>
      </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Product Description
          </FormLabel>
          <Textarea
            placeholder="Enter Product Description"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            value={productDetails.description}
            onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}
          />
          <FormHelperText>
            Brief description about product.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
  
const initialProduct={category:"",
brand:"",
title:"",
discounted_price:"",
strike_price:"",
discount:"",
images:[],
size:"",
country:"",
description:"",}

export default function AddProductsPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [loading,setLoading]=useState(false)
  const [progress, setProgress] = useState(33.33);
  const [productDetails,setProductDetails]=useState(initialProduct);

  //const loading = useSelector((store)=>store.adminManager.loading);
  const dispatch = useDispatch();
  //console.log(loading);
  const handleSubmit=()=>{
    if(productDetails.category==="Mens"){
      dispatch(postMensData(productDetails))
    }else if(productDetails.category==="Womens"){
      dispatch(postWomensData(productDetails))
    }else if(productDetails.category==="Kids"){
      dispatch(postKidsData(productDetails))
    }
    setTimeout(()=>{
      toast({
        title: 'Successfully Added.',
        description: "You have added product successfully.",
        status: 'success',
        duration:1500,
        isClosable: true,
      });
      setLoading(false);
      setStep(1);
      setProgress(33.33);
    },2000)
    setLoading(true); 
  
    setProductDetails(initialProduct)
    }
    console.log("Image",productDetails.images);
  return (
    <Box minH="100vh" bg={'gray.100'} >
      <AdminNavbar/>
      <Box
        bg={'white'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        // mt={'150px'}
        pos={"absolute"}
        top={150}
        left={'33%'}
        right={'18%'}
        as="form"
        >
        <Progress
          hasStripe
          colorScheme='pink'
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 productDetails={productDetails} setProductDetails={setProductDetails} /> : step === 2 ? <Form2  productDetails={productDetails} setProductDetails={setProductDetails} /> : <Form3  productDetails={productDetails} setProductDetails={setProductDetails}  />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="pink"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="pink"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                colorScheme="blue"
                variant="solid"
                isLoading={loading}
                loadingText='Submitting'
                spinner={<BeatLoader size={10} color='white' />}
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
}