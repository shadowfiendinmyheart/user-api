import jwt from "jsonwebtoken";

class TokenService {
  generateToken(user: { id: number; email: string }) {
    const { id, email } = user;
    return jwt.sign({ id, email }, process.env.TOKEN_SECRET as string, {
      expiresIn: "24h",
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.TOKEN_SECRET as string);
  }
}

export default new TokenService();
