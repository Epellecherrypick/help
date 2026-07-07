import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel"
import connectToDb from "@/lib/connection"

export const POST = async (req) => {
    try {
        const { otp, email } = await req.json()

        if (!email || !otp) {
            return Response.json({ message: "otp and email are required" }, { status: 400 })
        }

        await connectToDb()

        const capitalizedOtp = otp.toString().trim().toUpperCase()
        const user = await InvitationModel.findOne({ email: email.toLowerCase(), otp: capitalizedOtp, isUsed: false })

        if (!user) {
            return Response.json({ message: "otp invalid or email invalid" }, { status: 400 })
        }

        if (user.expiresAt < Date.now()) {
            return Response.json({ message: "otp expired" }, { status: 400 })
        }

        user.isUsed = true
        user.isExpired = false
        user.usedAt = new Date()
        await user.save()

        const emailVerified = await User.findOne({ email: email.toLowerCase() })

        if (!emailVerified) {
            return Response.json({ message: "user not found" }, { status: 404 })
        }

        emailVerified.isEmailVerified = true
        await emailVerified.save()

        return Response.json({ message: "email verified" }, { status: 200 })
    }

    catch (error) {
        console.error("VERIFY_OTP ERROR", error.message)
        return Response.json({ message: "server error" }, { status: 500 })
    }
}