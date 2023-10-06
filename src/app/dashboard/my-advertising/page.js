import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyAdverstisingPage from "@/components/templates/my-advertising-templates/MyAdverstisingPage";
import Advertising from "@/models/Advertising";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const MyAdvertising = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    {
      $match:
        /**
         * query: The query in MQL.
         */
        {
          email: session.user.email,
        },
    },
    {
      $lookup:
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         * pipeline: Optional pipeline to run on the foreign collection.
         * let: Optional variables to use in the pipeline field stages.
         */
        {
          from: "advertisings",
          localField: "_id",
          foreignField: "userId",
          as: "advertisings",
        },
    },
  ]);

  const { advertisings } = user;
  return <MyAdverstisingPage ads={advertisings} />;
};
export default MyAdvertising;
