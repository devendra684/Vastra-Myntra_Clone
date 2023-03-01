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

export default function EditEmail({
  handleEmailSubmit,
  email,
  setEmail,
}) {
  const {adminData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  const [hideEmail, setHideEmail] = useState(false);
  /* Here's a custom control */
  useEffect(()=>{
    dispatch(getAdminData());
  },[dispatch])
  const handleAddAdmin = () => {
    handleEmailSubmit();
    setHideEmail(false);
    setEmail("");
  };

  function EditableControls() {
    return hideEmail ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button onClick={handleAddAdmin}>
          <CheckIcon />
        </Button>
        <Button onClick={() => setHideEmail(false)}>
          <CloseIcon />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="end">
        <Button
          size="sm"
          onClick={() => {
            setHideEmail(true);
            // console.log("singh");
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
      defaultValue={adminData.email}
      fontSize="xl"
      width={"full"}
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the Custom input */}
      <HStack>
        <Input
          style={hideEmail ? { display: "block" } : { display: "none" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EditableControls />
      </HStack>
    </Editable>
  );
}