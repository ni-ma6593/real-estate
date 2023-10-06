import Advertising from "@/models/Advertising";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ads = await Advertising.find().select("-userId");
    return NextResponse.json(
      {
        advertisements: ads,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(err);
    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body);
    const {
      constructionDate,
      description,
      amenities,
      realState,
      location,
      category,
      title,
      phone,
      price,
      rules,
    } = body.adData;
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
    if (
      !constructionDate ||
      !description ||
      !realState ||
      !location ||
      !category ||
      !title ||
      !phone ||
      !price
    ) {
      return NextResponse.json(
        {
          error: "لطفا اطلاعات معتبر وارد کنید",
        },
        {
          status: 400,
        }
      );
    }

    const newAd = await Advertising.create({
      title,
      description,
      location,
      realState,
      phone,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json(
      {
        message: "آگهی جدید اضافه شد",
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: "مشکلی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body);
    const {
      _id,
      constructionDate,
      description,
      amenities,
      realState,
      location,
      category,
      title,
      phone,
      price,
      rules,
    } = body.adData;
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

    if (
      !_id ||
      !constructionDate ||
      !description ||
      !realState ||
      !location ||
      !category ||
      !title ||
      !phone ||
      !price
    ) {
      return NextResponse.json(
        {
          error: "لطفا اطلاعات معتبر وارد کنید",
        },
        {
          status: 400,
        }
      );
    }

    const ad = await Advertising.findById(_id);
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

    ad.constructionDate = constructionDate;
    ad.description = description;
    ad.amenities = amenities;
    ad.realState = realState;
    ad.location = location;
    ad.category = category;
    ad.title = title;
    ad.phone = phone;
    ad.price = price;
    ad.rules = rules;

    ad.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
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
