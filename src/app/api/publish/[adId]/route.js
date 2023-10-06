import Advertising from "@/models/Advertising";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();
    const id = context.params.adId;
    const session = await getServerSession(req);
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

    if (!user.role === "OWNER" || !user.role === "ADMIN") {
      return NextResponse.json(
        {
          error: "دسترسی محدود",
        },
        { status: 403 }
      );
    }

    await Advertising.findByIdAndUpdate(id, {
      published: true,
    });
    return NextResponse.json(
      {
        message: "آگهی منتشر شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}
