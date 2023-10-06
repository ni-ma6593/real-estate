import AdminCard from "@/components/modules/Cards/AdminCard";
import { Grid } from "@mui/material";

const AwaitingConfirmationPage = ({ ads = [] }) => {
  return (
    <>
      <Grid container>
        {ads.map((ad) => (
          <Grid
            key={ad._id}
            item
            md={12}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
          >
            <AdminCard
              ad={{
                id: ad._id,
                title: ad.title,
                description: ad.description,
                price: ad.price,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default AwaitingConfirmationPage;
