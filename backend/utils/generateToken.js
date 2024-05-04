import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        httpOnly: true, // prevent XSS attacks or cross-site scripting attacks
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in miliseconds
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;