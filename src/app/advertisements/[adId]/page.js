import Advertising from "@/models/Advertising";
import connectDB from "@/utils/connectDB";

const AdDetails = async ({ params: { adId } }) => {
  await connectDB();
  const adDetails = await Advertising.findById(adId);
  console.log(adDetails);
  return (
    <>
      <h1>{adId}</h1>
      <h1>{adDetails.title}</h1>
      <h1>{adDetails.location}</h1>
      <h1>{adDetails.price}</h1>
      <p>{adDetails.description}</p>
    </>
  );
};
export default AdDetails;

export const generateMetadata = async ({ params: { adId } }) => {
  await connectDB();
  const adDetails = await Advertising.findById(adId);

  return {
    title: adDetails.title,
    description: adDetails.description,
    authors: {
      name: adDetails.realState ? adDetails.realState : "Nima",
    },
    // keywords: keywordsdf,
    other: {
      mytag: "custom meta tag",
    },
  };
};
