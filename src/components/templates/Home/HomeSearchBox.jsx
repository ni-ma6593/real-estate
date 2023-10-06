"use client";
import { Icon, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
const HomeSearchbox = ({ result }) => {
  const [inputValue, setInputValue] = useState("");
  // const [searchedResult, setSearchedResult] = useState([]);
  // useEffect(() => {
  //   console.log(result);
  //   console.log(inputValue);

  // }, [inputValue]);

  const [filteredList, setFilteredList] = new useState(result);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    setInputValue(query);
    // Create copy of item list
    var updatedList = [...result];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  console.log(filteredList);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        my: 8,
        borderRadius: "50px",
        boxShadow: "none",
        border: "1px solid #e1e1e1",
      }}
    >
      <InputBase
        sx={{ ml: 1.25, flex: 1, my: 1.24, color: "#8e8e8e" }}
        placeholder="جست و جوی خونه ..."
        value={inputValue}
        onChange={filterBySearch}
        inputProps={{
          "aria-label": "جست و جوی خونه ...",
          style: {
            color: "#8e8e8e",
            letterSpacing: "0.16rem",
          },
        }}
      />
      <Icon
        sx={{
          marginRight: "10px",
        }}
      >
        <FaSearch />
      </Icon>
    </Paper>
  );
};
export default HomeSearchbox;
