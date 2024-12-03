import { Users } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req){
    const {user}=await req.json();

    //if user already exists
    try{
        const userInfo=await DevBundlerService.select().from(Users)
        .where(eq(Users.email,user?.primaryEmailAddress.emailAddress))
         console.log('User',userInfo)
    }
    catch(e){

    }
    return  NextResponse.json({result:user})
}