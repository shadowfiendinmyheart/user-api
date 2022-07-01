import crypto from "crypto";

export default function makeHash(data: string) {
  return crypto.createHash("md5").update(data).digest("hex");
}
