import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbconfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password, email } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      ); // Corrected the status code to 400 for a user already exists scenario
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "Successfully created" },
      { status: 201 }
    ); // Corrected the status code to 201 for successful creation
  } catch (error:any) {
    return  NextResponse.json({ error: error.message }, { status: 500 }); // Corrected the status code to 500 for server error
  }
}
