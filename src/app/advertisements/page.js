import AdvertisementsPage from "@/components/modules/pages/AdvertisementsPage";
import Advertising from "@/models/Advertising";
import connectDB from "@/utils/connectDB";
import { Box, Container } from "@mui/material";

const Advertisements = async ({ searchParams: { type } }) => {
  await connectDB();

  const ads = await Advertising.find(
    type ? { published: true, category: type } : { published: true }
  ).sort({ createdAt: -1 });

  // console.log(ads);

  return (
    <Container>
      <AdvertisementsPage ads={JSON.parse(JSON.stringify(ads))} />
    </Container>
  );
};
export default Advertisements;
