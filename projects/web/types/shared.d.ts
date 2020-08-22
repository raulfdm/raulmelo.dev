declare module '@globalShared/utils' {
  export function blogPostUri(slug: string, language: LocaleValues): string;
  export function tagUri(tag: string): string;
}
