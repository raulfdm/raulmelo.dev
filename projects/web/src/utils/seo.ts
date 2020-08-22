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

function stripStringAndSetDots(str: string, length = 160): string {
  const newStr = str.substr(0, length - 3);
  return `${newStr}...`;
}

export function joinSubtitleAndDescription(
  description: string,
  subtitle?: string | null,
): string {
  if (!subtitle) {
    return description;
  }

  const result = [subtitle, description].join(' - ');

  if (result.length < 160) {
    return result;
  }

  return stripStringAndSetDots(result);
}
