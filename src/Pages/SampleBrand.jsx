import { Box, Checkbox, Select, } from "@chakra-ui/react";
import React from "react";

const SampleBrand = ({ brands, handleCheck }) => {
  return (
    
    <Box>
      <Select
        placeholder="All Brands"
        variant="solid"
        p={2}
        bg={"gray.200"}
        onChange={(e) => handleCheck(e)}
      >
        {brands.map((el, i) => (
          <option key={i} value={el}>
            <Checkbox
              textAlign={"left"}
              fontSize={"0.7rem"}
              pl={"1rem"}
              value={el}
              // isChecked
            >
              {el}
            </Checkbox>
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SampleBrand;
