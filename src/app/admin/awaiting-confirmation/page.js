import Advertising from "@/models/Advertising";
import connectDB from "@/utils/connectDB";
import AwaitingConfirmationPage from "@/templates/Admin/AwaitingConfirmationPage";

const AwaitingConfirmation = async () => {
  await connectDB();
  const unPublishedAds = await Advertising.find({ published: false });
  if (!unPublishedAds.length) return <h3>آگهی در انتظار تایید وجود ندارد</h3>;
  return (
    <AwaitingConfirmationPage
      ads={JSON.parse(JSON.stringify(unPublishedAds))}
    />
  );
};
export default AwaitingConfirmation;
