import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Editable,
  EditablePreview,
  Flex,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from "../Redux/Admin/Admin.action";

export default function EditPassword({
  handlePasswordSubmit,
  password,
  setPassword,
}) {
  const {adminData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  const [hidePassword, setHidePassword] = useState(false);
  /* Here's a custom control */
  useEffect(()=>{
    dispatch(getAdminData());
  },[dispatch])
  const handleAddAdmin = () => {
    handlePasswordSubmit();
    //console.log("singh");
    setHidePassword(false);
    setPassword("");
  };

  function EditableControls() {
    return hidePassword ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button onClick={handleAddAdmin}>
          <CheckIcon />
        </Button>
        <Button onClick={() => setHidePassword(false)}>
          <CloseIcon />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="end">
        <Button
          size="sm"
          onClick={() => {
            setHidePassword(true);
            console.log("singh");
          }}
        >
          <EditIcon />
        </Button>
      </Flex>
    );
  }
 
  return (
    <Editable
      textAlign="left"
      defaultValue={adminData.password}
      fontSize="xl"
      width={"full"}
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the Custom input */}
      <HStack>
        <Input
          
          style={hidePassword ? { display: "block" } : { display: "none" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <EditableControls />
      </HStack>
    </Editable>
  );
}