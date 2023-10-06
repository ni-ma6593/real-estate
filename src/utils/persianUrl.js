export default function persianUrl(title = "") {
  return title.replace(/\s+/g, "-");
  // return title.split(" ").join("-");
  // return title.replaceAll(' ', '-');
}
