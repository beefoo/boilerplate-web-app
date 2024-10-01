export default class StringUtil {
  static queryParams() {
    const searchString = window.location.search;
    if (searchString.length <= 0) return {};
    const search = searchString.substring(1);
    const jsonFormatted = search.replace(/&/g, '","').replace(/=/g, '":"');
    const escaped = (k, v) => (k === '' ? v : decodeURIComponent(v));
    const parsed = JSON.parse(`{"${jsonFormatted}"}`, escaped);
    _.each(parsed, (value, key) => {
      const dkey = decodeURIComponent(key);
      parsed[dkey] = value;
    });
    return parsed;
  }
}
