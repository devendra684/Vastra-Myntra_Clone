import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BiHeart } from "react-icons/bi";
import {
  MdOutlineCardGiftcard,
  MdOutlineContactPhone,
  MdOutlineCreditCard,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMail,
} from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiShutDownLine, RiCouponLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserData,
  getUsersListData,
  updateCurrentUserData,
  updateUsersListData,
} from "../Redux/Admin/Admin.action";

export default function ProfileSection() {
  const dispatch = useDispatch();
  const { usersListData, currentUserData } = useSelector(
    (store) => store.adminManager
  );

  useEffect(() => {
    dispatch(getUsersListData());
    dispatch(getCurrentUserData());
  }, [dispatch]);
  //console.log("CrU",currentUserData);
  
  let booleanValue = Boolean(currentUserData.isAuth);

  const handleLogout = () => {
    for (let i = 0; i < usersListData.length; i++) {
      let el = usersListData[i];
      if (
        el.email === currentUserData.email &&
        el.name === currentUserData.name &&
        currentUserData.password === el.password
      ) {
        dispatch(updateUsersListData(el.id, false)).then(() =>
          dispatch(getUsersListData())
        );
        dispatch(updateCurrentUserData(false)).then(() =>
          dispatch(getCurrentUserData())
        );
      }
      //console.log("b",booleanValue);
      booleanValue = Boolean(currentUserData.isAuth);
    }
  };
  return (
    <Flex justifyContent="center" mt={0}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button
            display={"flex"}
            flexDirection={"column"}
            fontSize={"xs"}
            bg={"none"}
            _hover={{ bg: "white", color: "#BB1679", fontWeight: "bold" }}
          >
            <IconButton
              aria-label="More server options"
              icon={<CgProfile />}
              variant="ghost"
              w="fit-content"
              _hover={{ bg: "white", color: "#BB1679" }}
            />
            <Text>Profile</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "md" }} mt={0}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineDriveFileRenameOutline />}
                justifyContent="space-between"
                fontWeight="semibold"
                fontSize="md"
                colorScheme={"pink"}
              >
                Hello, {booleanValue ? currentUserData.name : "Welcome"}
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineMail />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="pink"
                fontSize="sm"
              >
                {booleanValue
                  ? currentUserData.email
                  : "To access account and orders"}
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<AiOutlineLogin />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
                isDisabled={booleanValue}
              >
                <NavLink to="/Login">LOGIN </NavLink>/{" "}
                <NavLink to="/Register">SIGNUP</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<BiHeart />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Order / <NavLink to="/wishlist"> Wishlist</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineCardGiftcard />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Gift Cards
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineContactPhone />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Contact Us
              </Button>
              <Button
                w="auto"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Vastra Insider
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("pink.500", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineCreditCard />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Vastra Credit
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<RiCouponLine />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Coupons
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<TbAddressBook />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                <NavLink to="/Address">Address</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="red"
                fontSize="sm"
                isDisabled={!booleanValue}
                onClick={handleLogout}
              >
              
                Logout
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
