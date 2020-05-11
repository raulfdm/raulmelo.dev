export interface JsonNode {
  id: string;
  rawJson: string;
  fileRelativePath: string;
  [key: string]: string;
}
