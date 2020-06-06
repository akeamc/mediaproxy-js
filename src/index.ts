import { Query } from "./Query";

export default class MediaProxy {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  generateUrl(query: Query): string {
    return `${this.endpoint}?fingerprint=${query.fingerprint()}`;
  }
}
