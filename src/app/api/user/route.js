import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    console.log("obj=>", obj);

    //check this user exist

    const user = await UserModal.findOne({ email: obj.email });
    console.log("user=>", user);
    if (user)
        return Response.json(
            { error: true, msg: "User already exist" },
            { status: 403 }
        );

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(obj.password, saltRounds)
    obj.password = hashedPassword;

    let newUser = new UserModal({ ...obj });
    newUser = await newUser.save();

    const token = jwt.sign(
        { id: newUser._id ,role : newUser.role },
         process.env.JWT_KEY);
    

    return Response.json({
        error : false,
        msg : "User Added successfully",
        user : newUser,
        token,
    });

}
export async function GET(request) {

    await connectDB();

    return Response.json("User GET Request");
}