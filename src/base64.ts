import * as base64 from "universal-base64";

/**
 * Encodes a string to URL-safe base64 (without `=` padding).
 * @param input
 */
export function encode(input: string): string {
  return base64.encode(input).replace(/\=/g, "");
}
