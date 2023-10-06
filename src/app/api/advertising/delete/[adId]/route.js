import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Advertising from "@/models/Advertising";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const { adId } = context.params;
    console.log(adId);
    // return;
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        {
          status: 404,
        }
      );
    }

    const ad = await Advertising.findById(adId);
    console.log(ad);
    if (!ad.userId.equals(user._id)) {
      return NextResponse.json(
        {
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        {
          status: 403,
        }
      );
    }

    await Advertising.findByIdAndDelete(adId);

    return NextResponse.json(
      {
        massage: "آگهی مورد نظر حذف شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}
