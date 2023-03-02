import { Button, Td, Tr, Image } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Tablecard = ({
  id,
  ind,
  images,
  title,
  brand,
  discounted_price,
  strike_price,
  handleDelete,
  handleOpen,
}) => {
  return (
    <Tr key={id}>
      <Td>{ind + 1}</Td>

      <Td>
        <Image
          src={images}
          alt={title}
          borderRadius={10}
          width={"110px"}
          ring={3}
          ringColor={"#72749B"}
        />
      </Td>
      <Td>{title}</Td>
      <Td>{brand}</Td>
      <Td>₹ {discounted_price ? discounted_price : Number(1200)}</Td>
      <Td textDecoration={"line-through"}>₹ {strike_price}</Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleOpen(id)}
        >
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

export default Tablecard;