import {
  Image,
  Box,
  Center,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import {
  getAdminData,
  updateAdminContact,
  updateAdminEmail,
  updateAdminName,
} from "../Redux/Admin/Admin.action";
import EditName from "./EditName";
import EditEmail from "./EditEmail";
import EditContact from "./EditContact";
import EditPassword from "./EditPassword";
import { useNavigate } from "react-router-dom";

const AdminProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password,setPassword] = useState("");
  const { adminData } = useSelector((store) => store.adminManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAdminData());
  }, []);
  
  const handleNameSubmit = () => {
    dispatch(updateAdminName(name)).then(() => dispatch(getAdminData()));
  };

  const handleEmailSubmit = () => {
    dispatch(updateAdminEmail(email)).then(() => dispatch(getAdminData()));
  };

  const handleContactSubmit = () => {
    dispatch(updateAdminContact(contact)).then(() => dispatch(getAdminData()));
  };

  const handlePasswordSubmit = () => {
    dispatch(updateAdminContact(contact)).then(() => dispatch(getAdminData()));
  };
  
  return (
    <Box minH="100vh" bg={"gray.100"} fontFamily={"sans-serif"}>
      <AdminNavbar />
      <Box mt={"80px"} ml={"250px"}>
        <Center>
          <Stack
            bg={"white"}
            justifyContent={"center"}
            width={"600px"}
            spacing={3}
            mt={10}
            padding={5}
            borderRadius={10}
            boxShadow={"base"}
          >
            <Center>
              <Image
                width={"200px"}
                height={"200px"}
                borderRadius={"50%"}
                name="DS "
                src={'/AdminProfile.jpg'}
                alt={adminData.name}
                ring={5}
                ringColor={"#898AAB"}
              />
            </Center>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditName
                handleNameSubmit={handleNameSubmit}
                name={name}
                setName={setName}
              />
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditEmail
                handleEmailSubmit={handleEmailSubmit}
                email={email}
                setEmail={setEmail}
              />
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditContact
                handleContactSubmit={handleContactSubmit}
                contact={contact}
                setContact={setContact}
              />
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditPassword
                handlePasswordSubmit={handlePasswordSubmit}
                password={password}
                setPassword={setPassword}
              />
            </HStack>
            <Button bg={'pink.700'} color='white' _hover={{color:'black',bg:'gray.200'}} 
            onClick={()=>navigate("/")}>
              LOGOUT
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default AdminProfilePage;