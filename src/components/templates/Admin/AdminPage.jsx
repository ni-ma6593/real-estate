// "use client";
import AdminCard from "@/components/modules/Cards/AdminCard";
import { Grid } from "@mui/material";

const AdminPage = () => {
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <AdminCard
            ad={{
              title: "nmsdfvnfjdfbmdfbdfjoiunhrvuh",
              description: `fdhdnhdhfhdbfdhfhfdfbmbdnhdhfhdb\nmbdnhdhfhdbfdhf\nhfdfbmbdnhdhfhdbfdhfh\nfdfbmbdnhdhfhdbfdhfhf`,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default AdminPage;
