import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
const secret = process.env.SECRET;


const auth = async (req, res, next) => {

  try {

    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500;

    const currentTime = Date.now() / 1000;

    let decodedData;

    if (token && isCustomAuth) {

      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;

      if (currentTime > decodedData?.exp) {
        res.status(401).json({ message: "Session timeout" });
      }

    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {

    res.status(401).json({ message: error });
  }
};

export default auth;
