import StringToColor from "./StringToColor";

export default function StringAvatar(name) {
  return {
    sx: {
      marginBottom: "10px",
      width: 64,
      height: 64,
      bgcolor: StringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
