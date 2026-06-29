import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel";
import connectToDb from "@/lib/connection";
import { generateInvitationCode } from "@/lib/generateInviteCode";
import { sendMail } from "@/lib/send-mail";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const { fullname, email, password } = await req.json();

    // Validate input
    if (!fullname || !email || !password) {
      return Response.json(
        {
          message: "Missing required fields: fullname, email or password",
        },
        { status: 400 }
      );
    }

    // Connect DB
    await connectToDb();

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      fullname, // Make sure your User schema uses fullname
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return Response.json(
        { message: "Failed to create user" },
        { status: 500 }
      );
    }

    // Generate OTP
    const otp = generateInvitationCode();

    // Expiry time (10 mins)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP
    await InvitationModel.create({
      createdFor: newUser._id,
      email: newUser.email,
      otp,
      expiresAt,
    });

    // Send OTP email
    await sendMail(email, otp);

    return Response.json(
      {
        message: "User registered successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
};