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
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from "../Redux/Admin/Admin.action";

export default function EditName({handleNameSubmit, name, setName }) {
  const {adminData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  const [hideName, setHideName] = useState(false);
  /* Here's a custom control */

  useEffect(()=>{
    dispatch(getAdminData());
  },[])
  const handleAddAdmin = () => {
    handleNameSubmit();
    setHideName(false);
    dispatch(getAdminData());
    setName("");
    
  };

  function EditableControls() {
    return hideName ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button onClick={handleAddAdmin}>
          <CheckIcon />
        </Button>
        <Button onClick={() => setHideName(false)}>
          <CloseIcon />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="end">
        <Button
          size="sm"
          onClick={() => {
            setHideName(true);
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
      defaultValue={adminData.name}
      fontSize="xl"
      width={"full"}
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the Custom input */}
      <HStack>
        <Input
          style={hideName ? { display: "block" } : { display: "none" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <EditableControls />
      </HStack>
    </Editable>
  );
}