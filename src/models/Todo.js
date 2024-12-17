import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:[true, "Please add a title"],
        trim: true,
        maxlength:[100, "Title can not be more than 40 characters"]
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
}, 
{ timestamps: true }
);
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);