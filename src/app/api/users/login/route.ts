import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbconfig";
import jwt from "jsonwebtoken";
connect();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        message: "Email Not registered",
        status: 404,
      });
    }
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        message: "Invalid password",
        status: 404,
      });
    }

    //Create a token data
    //Anything can be added to be sent as the signed token data
    const tokenData = {
      id: user._id,
      email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn: process.env.TIME!});
    const response   = NextResponse.json({
        message:"LOgin Sucessfull",
        sucess:"True",
    })
    response.cookies.set("token", token, { httpOnly: true });

    return response;

  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
}
