import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel"
import connectToDb from "@/lib/connection"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const POST = async (req) => {

    try {
        const { email, password } = await req.json()

        // /establish db connction
        await connectToDb()

        // find the user by email
        const user = await User.findOne({ email })

        if (!user) {
            return Response.json({ message: "Invalid email or password" }, { status: 401 })
        }

        // check if user's email is verfied
        if (!user.isEmailVerified) {
            return Response.json({ message: "Please verify your email before signing in" }, { status: 403 })
        }

        // compare the provided password with the stored hashed password
        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if (!isPasswordValid) {
            return Response.json({
                message: "Invalid email or password",
                error: true
            },
                { status: 401 })
        }


        // use jwt to generate a token for the user 
        // (optional, but recommended for session management)
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.userRole,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
            // or use env

        )

        return Response.json({
            message: "Sign-in successful",
            error: false,
            data: {
                token,
                userRole: user.userRole
            }
        }, { status: 200 })


    }
    catch (error) {
        console.error("SIGN_IN API ERROR:", error)
        if (error.response) {
            return Response.json({ message: error.response.data.message }, { status: error.response.status })
        }
        return Response.json({ message: "Internal Server Error" }, { status: 500 })
    }
}