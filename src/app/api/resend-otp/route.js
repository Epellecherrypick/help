import InvitationModel from "@/app/models/InvitationModel";
import connectToDb from "@/lib/connection"
import { generateInvitationCode } from "@/lib/generateInviteCode";
import { sendMail } from "@/lib/send-mail"


export const POST = async (req) => {

    try {

        const { email } = await req.json()

        // validate for email
        if (!email) {
            return Response.json({ message: "email is required" }, { status: 400 })
        }
        const otp = generateInvitationCode()
        // establish db connections
        await connectToDb()
        // find user in Invitation table
        const invitationUser = await InvitationModel.findOne({ email },)
        if (!invitationUser) {
            return Response.json({ message: "invalid email address" }, { status: 404 })
        }

        invitationUser.otp = otp
        invitationUser.expiresAt = new Date(Date.now() + 10 * 60 * 1000)
        invitationUser.CreatedAt = Date.now()
        await invitationUser.save()
        sendMail(email, otp)
        return Response.json({ message: "OTP resent successfully" }, { status: 200 })

    }

    catch (error) {
        console.error('ERESEND OTP ERROR:', error);
        return Response.json({ message: 'Server Error' },
            { status: 500 });
    }

}