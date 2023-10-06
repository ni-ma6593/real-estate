import EditAdPage from "@/components/templates/my-advertising-templates/EditAdPage";
import Advertising from "@/models/Advertising";

const EditAd = async ({ params: { adId } }) => {
  console.log(adId);
  const ad = await Advertising.findById(adId);
  if (!ad) return <h3>مشکلی پیش آمده است لطفا دولاره امتحان کنید</h3>;
  console.log(ad);
  return <EditAdPage ad={JSON.parse(JSON.stringify(ad))} />;
};
export default EditAd;
