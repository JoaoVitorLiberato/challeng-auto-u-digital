interface cacheStoreInterface {
  typeSendSegment: string;
  result: Record<string, string|number|string[]>
  process: {
    loading: boolean;
    error: boolean;
  }
}

export {
  cacheStoreInterface,
}
