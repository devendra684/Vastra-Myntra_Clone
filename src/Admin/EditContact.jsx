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

export default function EditContact({
  handleContactSubmit,
  contact,
  setContact,
}) {
  const {adminData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  const [hideContact, setHideContact] = useState(false);
  /* Here's a custom control */
  useEffect(()=>{
    dispatch(getAdminData());
  },[dispatch])
  const handleAddAdmin = () => {
    handleContactSubmit();
    //console.log("dev");
    setHideContact(false);
    setContact("");
  };

  function EditableControls() {
    return hideContact ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button onClick={handleAddAdmin}>
          <CheckIcon />
        </Button>
        <Button onClick={() => setHideContact(false)}>
          <CloseIcon />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="end">
        <Button
          size="sm"
          onClick={() => {
            setHideContact(true);
            //console.log("singh");
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
      defaultValue={adminData.contact}
      fontSize="xl"
      width={"full"}
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the Custom input */}
      <HStack>
        <Input
          style={hideContact ? { display: "block" } : { display: "none" }}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <EditableControls />
      </HStack>
    </Editable>
  );
}