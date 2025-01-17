const METADATA_FILE = __dirname + '/metadata.json'

const PG_CACHE_KEYS = {
  PROTOCOL_METADATA_ALL: 'protocol-metadata-all',
  CACHE_DATA_ALL: 'cache-data-all',
  ORACLES_DATA: 'oracles-data',
  CATEGORIES_DATA: 'categories-data',
  FORKS_DATA: 'forks-data',
  HISTORICAL_TVL_DATA_META: 'getHistoricalTvlForAllProtocols-meta',
  LANG_DATA: 'lang-data',
}

export {
  METADATA_FILE,
  PG_CACHE_KEYS,
}