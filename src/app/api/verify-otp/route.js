import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel"



export const POST =async (req)=>{
    try{
        // get incoming data
       const  {otp, email}=await req.json()

       if(!otp){
        return Response.json({message:"otp is required"}, {status:400})
        
       }

    //   find user with otp
    const capitalizedOtp=otp.toUpperCase()
    
    console.log("OTP FROM REQUEST", capitalizedOtp)
    const user=await InvitationModel.findOne({email, otp:capitalizedOtp, isUsed:false})
    console.log("USER FROM DB", user)
    if(!user){
        return Response.json({message:"otp invalid or email invalid"}, {status:400})
    }

    // check if otp is expires
    if(user.expiresAt < Date.now()){
        return Response.json({message:"otp expired"}, {status:400})
    }
    user.isUsed=true

    await user.save();
    // verify user's email in the users table
    // const emailVerified=await User.findById(user.usedBy)

    // we willl use the email, because we do ot want make a lot of changes when we chnage the model schema
    const emailVerified=await User.findOne({email})

    // verify user email
    emailVerified.isEmailVerified=true
    await emailVerified.save()
    
        return Response.json({message:"email verified"}, {status:200})


       
    }

    catch(error){
        console.error("VERIFY_OTP ERROR" , error.message)
        return Response.json({message:"server error"}, {status:500})

    }
}