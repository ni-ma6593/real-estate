import colors from "@/utils/colors";
import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { AiOutlineFilter } from "react-icons/ai";

const types = [
  {
    name: "همه",
    type: "/advertisements",
  },
  {
    name: "آپارتمان",
    type: "/advertisements?type=apartment",
  },
  {
    name: "ویلا",
    type: "/advertisements?type=villa",
  },
  {
    name: "مغازه",
    type: "/advertisements?type=store",
  },
  {
    name: "دفتر کار",
    type: "/advertisements?type=office",
  },
];

const Sidebar = () => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: "100%",
          // height: "80vh",
          bgcolor: `${colors.primary}`,
          color: `${colors["lightColor"]}`,

          p: 3,
        }}
        elevation={12}
      >
        <Typography
          variant="h6"
          component={"h6"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineFilter /> دسته بندی
        </Typography>

        <Box display={"flex"} flexDirection={"column"}>
          {types.map((t, i) => (
            <Button
              sx={{ display: "flex", my: 0.25, justifyContent: "start" }}
              fullWidth
              color="secondary"
              key={i}
              component={Link}
              href={t.type}
            >
              {t.name}
            </Button>
          ))}
        </Box>
      </Paper>
    </>
  );
};
export default Sidebar;
