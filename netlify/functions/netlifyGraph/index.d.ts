/* eslint-disable */
// @ts-nocheck
// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>;
  "message": string;
  "extensions": Record<string, unknown>;
};

/**
* 
*/
export type ExampleFragment = {
  gitHub?: {
  /**
  * Lookup resource by a URL.
  */
resource?: {
  /**
  * The URL to this resource.
  */
url: string;
};
};
};




export interface Functions {
  Record<string, never>
}

export const functions: Functions;

export default functions;
