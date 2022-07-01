import { Request } from "express";
import multer from "multer";
import httpContext from "express-http-context";

export const fileUploadOptions = {
  storage: multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: any) => {
      cb(null, "public");
    },
    filename: (req: Request, file: Express.Multer.File, cb: any) => {
      const fileName = file.originalname.split(".").slice(0, -1).join("");
      const fileExtension = file.originalname.split(".").slice(-1);
      const newFileName = `${fileName}-${Date.now()}.${fileExtension}`;
      httpContext.set("fileName", newFileName);
      cb(null, newFileName);
    },
  }),
  fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
    if (
      String(file.mimetype) !== "image/jpeg" ||
      String(file.mimetype) !== "image/png"
    ) {
      cb(null, false);
    }

    cb(null, true);
  },
  limits: {
    fieldNameSize: 255,
    fileSize: 1024 * 1024 * 10,
  },
};
