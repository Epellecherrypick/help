import mongoose from "mongoose"
const invitationSchema = new mongoose.Schema({
    createdFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },

    otp: {
        type: String,
        required: true
    },

    isUsed: {
        type: Boolean,
        default: false
    },

    isExpired: {
        type: Boolean,
        default: false
    },

    expiresAt: {
        type: Date,
        // Date.now is in milliseconds, so we add 10 minutes (10 * 60 * 1000)
        


    },

    usedAt: {
        type: Date,
    }

}, { timestamps: true })


const InvitationModel = mongoose.models.invitation ||
    mongoose.model("invitation", invitationSchema)

export default InvitationModel;

