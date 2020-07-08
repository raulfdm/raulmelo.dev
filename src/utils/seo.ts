export function titleWithNameAndJobTitle(title: string): string {
  return `${title} | Raul Melo Software Developer`;
}

export function getCanonicalLink({
  uri,
  siteUrl,
}: {
  uri: string;
  siteUrl: string;
}): string {
  const origin = new URL(siteUrl);
  origin.pathname = uri;
  return origin.href;
}
