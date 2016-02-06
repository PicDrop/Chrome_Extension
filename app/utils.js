export function domainParse (url) {
  const domain = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
  if (domain) return domain;
  return null;
} 