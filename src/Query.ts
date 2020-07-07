import * as base64 from "./base64";

export enum OutputFormat {
  Jpeg = "jpeg",
  Png = "png",
  WebP = "webp",
  Gif = "gif",
}

export enum ResizeStrategy {
  Contain = "contain",
  Crop = "crop",
  Stretch = "stretch",
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

  /**
   * How to resize the media if the new dimensions have a different aspect ratio.
   */
  fit?: ResizeStrategy;

  constructor({
    format,
    source,
    width,
    height,
    fit,
  }: {
    format: OutputFormat;
    source: string;
    width?: number;
    height?: number;
    fit?: ResizeStrategy;
  }) {
    this.format = format;
    this.source = source;
    this.width = width;
    this.height = height;
    this.fit = fit;
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
      fit: this.fit,
    });
  }

  /**
   * Generate a `fingerprint`.
   */
  fingerprint(): string {
    return base64.encode(this.json());
  }
}
