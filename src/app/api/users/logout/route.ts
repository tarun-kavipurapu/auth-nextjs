import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbconfig";
import jwt from "jsonwebtoken";


export async function POST(){
    try {
        const response  = NextResponse.json({
            message:"Logout Sucessfull",
            succes:true
        })
        response.cookies.set("token","" ,{ httpOnly: true,expires:new Date(0) });
        return response;

    } catch (error:any) {
            return NextResponse.json({error:error.message})
    }
}