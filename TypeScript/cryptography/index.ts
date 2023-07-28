import { subtle } from "crypto-ts";

const algorithm = { name: "AES-GCM", length: 256 };
const keyUsages = ["encrypt", "decrypt"] as const;
const cryptoKey = await subtle.generateKey(algorithm, true, keyUsages);

const iv = crypto.getRandomValues(new Uint8Array(12));

const data: Uint8Array = new Uint8Array(...); // Uint8Array to set

const encrypted = subtle.encrypt(
  { name: "AES-GCM", iv },
  cryptoKey,
  data
);
