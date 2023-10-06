import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { GoTrash } from "react-icons/go";
import { IoMdAddCircleOutline } from "react-icons/io";
const TextList = ({ title, state, setState, type }) => {
  const handleChange = (e, i) => {
    const { value } = e.target;
    const list = [...state[type]];
    list[i] = value;
    setState({ ...state, [type]: list });
  };

  const handleAdding = (e) => {
    setState({ ...state, [type]: [...state[type], ""] });
  };

  const handleDeleting = (e, i) => {
    const list = [...state[type]];
    list.splice(i, 1);
    setState({ ...state, [type]: list });
  };
  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      </FormControl>
      <Box>
        {state[type].map((item, index) => (
          <TextField
            key={index}
            sx={{ mt: 1 }}
            id="standard-adornment-password"
            type={"text"}
            variant="outlined"
            value={item}
            onChange={(e) => handleChange(e, index)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="error"
                    onClick={(event) => handleDeleting(event, index)}
                  >
                    <GoTrash />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
      <Button
        sx={{
          my: 2,
        }}
        variant="contained"
        onClick={handleAdding}
        endIcon={<IoMdAddCircleOutline />}
      >
        افزودن
      </Button>
    </>
  );
};
export default TextList;
