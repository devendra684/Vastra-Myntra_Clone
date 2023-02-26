import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../Components/firebase";
import FinalNavbar from "../Components/FinalNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserData,
  getUsersListData,
  postCurrentUserData,
  postUsersListData,
  updateCurrentUserData,
  updateUsersListData,
} from "../Redux/Admin/Admin.action";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { usersListData,currentUserData } = useSelector((store) => store.adminManager);

  useEffect(() => {
    dispatch(getUsersListData());
    dispatch(getCurrentUserData());
  }, [dispatch]);

  const [value, setValue] = useState({
    email: "",
    name: "",
    password: "",
    logindetails: {
      createdAt: "",
      creationTime: "",
      lastLoginAt: "",
      lastSignInTime: "",
    },
    image: "",
    token: "",
    contact: null,
    isAuth: true,
  });
  const [googleValue, setGoogleValue] = useState("");
  const [submitbutton, setSubmitbutton] = useState(false);
  const navigate = useNavigate();
  

  const submitPost = async () => {
    dispatch(postCurrentUserData(value));
    fetch("https://classic-world.onrender.com/UsersList", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("USER", JSON.stringify(res));
        console.log("V", value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (!value.name || !value.email || !value.password) {
      toast.error(`please fill all the field `, {
        position: "top-center",
      });
      return;
    }

    setSubmitbutton(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setSubmitbutton(false);
        submitPost();
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        setValue((prev)=>({...prev, email: "",
        name: "",
        password: "",contact:null}))
        navigate("/login");
      })
      .catch((err) => {
        setSubmitbutton(false);
        toast.error(`${err.message}`, {
          position: "top-center",
          
        });
       
      });
  };
 
  const GoodleSignin = async () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogleValue(data.user.email);
     // console.log(data.user);
      localStorage.setItem("email", data.user.email);
      const { metadata } = data.user;
      const {lastSignInTime,createdAt,creationTime,lastLoginAt}=metadata
      console.log("Metadata",lastSignInTime,createdAt,creationTime,lastLoginAt);
      const user = {
        email: data.user.email,
        name: data.user.displayName,
        password: data.user.email,
        logindetails:{
          lastSignInTime:lastSignInTime,
          createdAt:createdAt,
          creationTime:creationTime,
          lastLoginAt:lastLoginAt
        },
        image: data.user.photoURL,
        contact: data.user.phoneNumber,
        isAuth: true,
      };
      let userCount = 0;
      for (let i = 0; i < usersListData.length; i++) {
        let el = usersListData[i];
        if (
         ( 
          el.password === user.password &&
          el.email === user.email) &&
         ( user.email === currentUserData.email &&
          user.password === currentUserData.password)
        ) {
          dispatch(updateUsersListData(el.id, true)).then(()=>dispatch(getUsersListData()));
          dispatch(updateCurrentUserData(true)).then(()=>dispatch(getCurrentUserData()));

         }  
        if (
          el.email === user.email &&
          el.password === user.password &&
          user.email !== currentUserData.email &&
          user.password !== currentUserData.password
        ) {
          dispatch(updateUsersListData(el.id, true)).then(()=>dispatch(getUsersListData()));
          dispatch(postCurrentUserData(user)).then(()=>dispatch(getCurrentUserData()));
        }
         if (
         ( el.email !== user.email &&
          el.password !== user.password &&
          user.email === currentUserData.email &&
          user.password === currentUserData.password) || (
          el.email !== user.email &&
          el.password !== user.password &&
          user.email !== currentUserData.email &&
          user.password !== currentUserData.password
          ) 
        ) {
          userCount=userCount+1;
        }
       
      }
      if(userCount===usersListData.length){
        dispatch(postUsersListData(user)).then(()=>dispatch(getUsersListData()));
        dispatch(postCurrentUserData(user)).then(()=>dispatch(getCurrentUserData(user)));
      }
      navigate("/");
      //navigate(comingFrom,{replace:true});
      //console.log("userCount", userCount);
      
      //console.log("user",user);
    });
  };

  useEffect(() => {
    setGoogleValue(localStorage.getItem("email"));
  }, []);

  return (
    <Box>
      <FinalNavbar />
      <Flex
        mt={10}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("rgb(248, 230, 233)")}
      >
        <Stack
          spacing={0}
          mx={"auto"}
          width={["100%", "80%", "60%", "45%"]}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Sign up with Classic World
            </Heading>

            <Text fontSize={"lg"} color={"gray.600"}>
              Welcome to Family ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <VStack>
                <Text fontWeight={"500"}>Easly using</Text>
                <GoogleButton onClick={GoodleSignin} />
                <Text fontWeight={"500"}>-Or using E-mail-</Text>
              </VStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setValue((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </FormControl>
              </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="contact" isRequired>
                <FormLabel>Contact no.</FormLabel>
                <Input
                  type="number"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, contact: e.target.value }))
                  }
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  disabled={submitbutton}
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#ff3f6c"}
                  color={"white"}
                  _hover={{
                    bg: "#ff3f6a",
                    color: "black",
                  }}
                >
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text color={"gray.600"} align={"center"}>
                  Already a user?{" "}
                  <Link style={{ color: "red" }} to="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ToastContainer />
    </Box>
  );
}
