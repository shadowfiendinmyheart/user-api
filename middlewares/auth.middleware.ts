import { Request, Response } from "express";
import { ForbiddenError, UnauthorizedError } from "routing-controllers";
import tokenService from "../services/token.service";

export function authenticateToken(
  req: Request,
  res: Response,
  next: (err?: any) => any
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    throw new UnauthorizedError();
  }

  const isVerify = tokenService.verifyToken(token);

  if (!isVerify) {
    throw new ForbiddenError();
  }

  next();
}
