export {}
declare global {
  interface Window {
    dataLayer:Array<Record<string, string>>;
    uetq:Array<string|Record<string, string>>;
    fbq:Array<string|{
      "content_ids": Array<string>;
      "content_name": string;
      "content_type": string;
      "content_category": string;
      "contents": Array<{
        "id": string;
        "quantity": number;
      }>;
      "num_items": number;
      "value": string;
      "currency": string;
    }>;
  }
}
