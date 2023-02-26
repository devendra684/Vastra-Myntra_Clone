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
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../Components/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAdminData,
  getCurrentUserData,
  getUsersListData,
  postCurrentUserData,
  postUsersListData,
  updateCurrentUserData,
  updateUsersListData,
} from "../Redux/Admin/Admin.action";
import FinalNavbar from "../Components/FinalNavbar";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [googleValue, setGoogleValue] = useState("");

  const { adminData, usersListData, currentUserData } = useSelector(
    (store) => store.adminManager
  );
  const gotoAdmin = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  useEffect(() => {
    dispatch(getAdminData());
    dispatch(getUsersListData());
    dispatch(getCurrentUserData());
  }, []);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [submitbutton, setSubmitbutton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      adminData.email === value.email &&
      adminData.password === value.password
    ) {
      return gotoAdmin("/admin-dashboard");
    } else if (!value.email || !value.password) {
      toast.error(`please fill all the field `, {
        position: "top-center",
      });
      return;
    }
    //console.log(value);
    else if (
      value.email === currentUserData.email &&
      value.password === currentUserData.password
    ) {
      for (let i = 0; i < usersListData.length; i++) {
        let el = usersListData[i];
        if (
          el.email === currentUserData.email &&
          el.name === currentUserData.name &&
          currentUserData.password === el.password
        ) {
          dispatch(updateUsersListData(el.id, true)).then(() =>
            dispatch(getUsersListData())
          );
          dispatch(updateCurrentUserData(true)).then(() =>
            dispatch(getCurrentUserData())
          );
        }
      }
    } else if (
      value.email !== currentUserData.email &&
      currentUserData.password !== value.password
    ) {
      for (let j = 0; j < usersListData.length; j++) {
        let ele = usersListData[j];
        if (ele.email === value.email && ele.password === value.password) {
          dispatch(postCurrentUserData(ele)).then(() =>
            dispatch(getCurrentUserData())
          );
          dispatch(updateUsersListData(ele.id, true)).then(() =>
            dispatch(getUsersListData())
          );
          dispatch(updateCurrentUserData(true)).then(() =>
            dispatch(getCurrentUserData())
          );
        }
      }
    }

    setSubmitbutton(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setSubmitbutton(false);
        navigate(comingFrom, { replace: true });
      })
      .catch((err) => {
        setSubmitbutton(false);
        toast.error(`${err.message}`, {
          position: "top-center",
        });
        console.log("error-", err.message);
      });
  };

  const GoodleSignin = async () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogleValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      const { metadata } = data.user;
      const {lastSignInTime,createdAt,creationTime,lastLoginAt}=metadata
      console.log("Metadata",metadata);
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
         ( el.email === user.email &&
          el.password === user.password) &&
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
          //console.log("user count if not match user or current user matches",userCount);
        }
       
      }
      if(userCount===usersListData.length){
        dispatch(postUsersListData(user)).then(()=>dispatch(getUsersListData()));
        dispatch(postCurrentUserData(user)).then(()=>dispatch(getCurrentUserData(user)));
      }
      navigate("/");
      //navigate(comingFrom,{replace:true});
      //console.log("userCount", userCount);
      //console.log("currentUser",currentUserData);
      //console.log("user",user);
    });
  };

  return (
    <Box>
      <FinalNavbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        mt={55}
        bg={useColorModeValue("rgb(248, 230, 233)")}
      >
        <Stack spacing={0} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Login
            </Heading>

            <Image
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg"
              w="100%"
            />
          </Stack>
          <Box
            // rounded={'lg'}
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
                  login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text color={"gray.600"} align={"center"}>
                  Have trouble logging in?{" "}
                  <Link style={{ color: "red" }} to="/register">
                    Register
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
