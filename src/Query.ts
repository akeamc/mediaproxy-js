import * as base64 from "./base64";

export enum OutputFormat {
  Jpeg = "jpeg",
  Png = "png",
  WebP = "webp",
  Gif = "gif",
}

export class Query {
  /**
   * The output format of the media.
   */
  format: OutputFormat;
  /**
   * Input URL.
   */
  source: string;

  /**
   * New width of the media.
   */
  width?: number;

  /**
   * New height of the media.
   */
  height?: number;

  constructor({
    format,
    source,
    width,
    height,
  }: {
    format: OutputFormat;
    source: string;
    width?: number;
    height?: number;
  }) {
    this.format = format;
    this.source = source;
    this.width = width;
    this.height = height;
  }

  /**
   * Get JSON.
   */
  json(): string {
    return JSON.stringify({
      format: this.format,
      source: this.source,
      width: this.width,
      height: this.height,
    });
  }

  /**
   * Generate a `fingerprint`.
   */
  fingerprint(): string {
    return base64.encode(this.json());
  }
}
