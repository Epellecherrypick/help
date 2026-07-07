import jwt from "jsonwebtoken";

export function authenticateRequest(req) {
    // in this function we will verify the token sent in the 
    // request headers and return the decoded user information if 
    // the token is valid, otherwise we will return an error response
  const authHeader = req.headers.get("authorization");

//   console.log("Authorization header:", authHeader);

//  if the authorization header is missing or does not start
// with "Bearer ", 
// return an error response
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      error: Response.json(
        { message: "Authorization token missing" },
        { status: 401 }
      ),
    };
  }

//   extract the token from the authorization header((Bearer token)
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token value:", decoded);
    return decoded;

  }
  
  catch (error) {
    return {
      error: Response.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      ),
    };
  }
}
