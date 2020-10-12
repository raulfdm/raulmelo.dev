export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  strapiPostContent?: Maybe<StrapiPostContent>;
  allStrapiPostContent: StrapiPostContentConnection;
  strapiUsesContent?: Maybe<StrapiUsesContent>;
  allStrapiUsesContent: StrapiUsesContentConnection;
  strapiSite?: Maybe<StrapiSite>;
  allStrapiSite: StrapiSiteConnection;
  strapiSocial?: Maybe<StrapiSocial>;
  allStrapiSocial: StrapiSocialConnection;
  strapiPersonalInformation?: Maybe<StrapiPersonalInformation>;
  allStrapiPersonalInformation: StrapiPersonalInformationConnection;
  strapiCv?: Maybe<StrapiCv>;
  allStrapiCv: StrapiCvConnection;
  strapiPostSerie?: Maybe<StrapiPostSerie>;
  allStrapiPostSerie: StrapiPostSerieConnection;
  strapiPostTags?: Maybe<StrapiPostTags>;
  allStrapiPostTags: StrapiPostTagsConnection;
  strapiPosts?: Maybe<StrapiPosts>;
  allStrapiPosts: StrapiPostsConnection;
  strapiUses?: Maybe<StrapiUses>;
  allStrapiUses: StrapiUsesConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPostContentArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllStrapiPostContentArgs = {
  filter?: Maybe<StrapiPostContentFilterInput>;
  sort?: Maybe<StrapiPostContentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiUsesContentArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllStrapiUsesContentArgs = {
  filter?: Maybe<StrapiUsesContentFilterInput>;
  sort?: Maybe<StrapiUsesContentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiSiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  seo_image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiSiteArgs = {
  filter?: Maybe<StrapiSiteFilterInput>;
  sort?: Maybe<StrapiSiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiSocialArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  instagram?: Maybe<StrapiSocialInstagramFilterInput>;
  linkedIn?: Maybe<StrapiSocialLinkedInFilterInput>;
  twitter?: Maybe<StrapiSocialTwitterFilterInput>;
  github?: Maybe<StrapiSocialGithubFilterInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiSocialArgs = {
  filter?: Maybe<StrapiSocialFilterInput>;
  sort?: Maybe<StrapiSocialSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPersonalInformationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  full_name?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  city_country?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  profile_pic?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPersonalInformationArgs = {
  filter?: Maybe<StrapiPersonalInformationFilterInput>;
  sort?: Maybe<StrapiPersonalInformationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiCvArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  career_summary?: Maybe<StringQueryOperatorInput>;
  jobs?: Maybe<StrapiCvJobsFilterListInput>;
  technical_skills?: Maybe<StrapiCvTechnical_SkillsFilterListInput>;
  interests?: Maybe<StrapiCvInterestsFilterListInput>;
  side_projects?: Maybe<StrapiCvSide_ProjectsFilterListInput>;
  education?: Maybe<StrapiCvEducationFilterInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  SEO?: Maybe<StrapiCvSeoFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiCvArgs = {
  filter?: Maybe<StrapiCvFilterInput>;
  sort?: Maybe<StrapiCvSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPostSerieArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
  blog_posts?: Maybe<StrapiPostSerieBlog_PostsFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPostSerieArgs = {
  filter?: Maybe<StrapiPostSerieFilterInput>;
  sort?: Maybe<StrapiPostSerieSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPostTagsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  blog_posts?: Maybe<StrapiPostTagsBlog_PostsFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPostTagsArgs = {
  filter?: Maybe<StrapiPostTagsFilterInput>;
  sort?: Maybe<StrapiPostTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPostsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StrapiPostsPost_TagsFilterListInput>;
  is_shown?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  featured_image_caption?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  serie_copy?: Maybe<StringQueryOperatorInput>;
  post_serie?: Maybe<StrapiPostsPost_SerieFilterInput>;
  translation?: Maybe<StrapiPostsTranslationFilterInput>;
  childStrapiPostContent?: Maybe<StrapiPostContentFilterInput>;
};


export type QueryAllStrapiPostsArgs = {
  filter?: Maybe<StrapiPostsFilterInput>;
  sort?: Maybe<StrapiPostsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiUsesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  childStrapiUsesContent?: Maybe<StrapiUsesContentFilterInput>;
};


export type QueryAllStrapiUsesArgs = {
  filter?: Maybe<StrapiUsesFilterInput>;
  sort?: Maybe<StrapiUsesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  postUri?: Maybe<Scalars['String']>;
  post?: Maybe<SitePageContextPost>;
  serie?: Maybe<SitePageContextSerie>;
  translation?: Maybe<SitePageContextTranslation>;
  posts?: Maybe<Array<Maybe<SitePageContextPosts>>>;
  tag?: Maybe<SitePageContextTag>;
};

export type SitePageContextFilterInput = {
  postUri?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<SitePageContextPostFilterInput>;
  serie?: Maybe<SitePageContextSerieFilterInput>;
  translation?: Maybe<SitePageContextTranslationFilterInput>;
  posts?: Maybe<SitePageContextPostsFilterListInput>;
  tag?: Maybe<SitePageContextTagFilterInput>;
};

export type SitePageContextPost = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  serieCopy?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  translation?: Maybe<SitePageContextPostTranslation>;
  serie?: Maybe<SitePageContextPostSerie>;
  featuredImage?: Maybe<SitePageContextPostFeaturedImage>;
  childStrapiPostContent?: Maybe<SitePageContextPostChildStrapiPostContent>;
  tags?: Maybe<Array<Maybe<SitePageContextPostTags>>>;
};

export type SitePageContextPostChildStrapiPostContent = {
  childMdx?: Maybe<SitePageContextPostChildStrapiPostContentChildMdx>;
};

export type SitePageContextPostChildStrapiPostContentChildMdx = {
  timeToRead?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
};

export type SitePageContextPostChildStrapiPostContentChildMdxFilterInput = {
  timeToRead?: Maybe<IntQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostChildStrapiPostContentFilterInput = {
  childMdx?: Maybe<SitePageContextPostChildStrapiPostContentChildMdxFilterInput>;
};

export type SitePageContextPostFeaturedImage = {
  childImageSharp?: Maybe<SitePageContextPostFeaturedImageChildImageSharp>;
};

export type SitePageContextPostFeaturedImageChildImageSharp = {
  original?: Maybe<SitePageContextPostFeaturedImageChildImageSharpOriginal>;
  fluid?: Maybe<SitePageContextPostFeaturedImageChildImageSharpFluid>;
};

export type SitePageContextPostFeaturedImageChildImageSharpFilterInput = {
  original?: Maybe<SitePageContextPostFeaturedImageChildImageSharpOriginalFilterInput>;
  fluid?: Maybe<SitePageContextPostFeaturedImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostFeaturedImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostFeaturedImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostFeaturedImageChildImageSharpOriginal = {
  src?: Maybe<Scalars['String']>;
};

export type SitePageContextPostFeaturedImageChildImageSharpOriginalFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostFeaturedImageFilterInput = {
  childImageSharp?: Maybe<SitePageContextPostFeaturedImageChildImageSharpFilterInput>;
};

export type SitePageContextPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  serieCopy?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  translation?: Maybe<SitePageContextPostTranslationFilterInput>;
  serie?: Maybe<SitePageContextPostSerieFilterInput>;
  featuredImage?: Maybe<SitePageContextPostFeaturedImageFilterInput>;
  childStrapiPostContent?: Maybe<SitePageContextPostChildStrapiPostContentFilterInput>;
  tags?: Maybe<SitePageContextPostTagsFilterListInput>;
};

export type SitePageContextPosts = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  serie_copy?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  translation?: Maybe<SitePageContextPostsTranslation>;
  post_serie?: Maybe<SitePageContextPostsPost_Serie>;
  language?: Maybe<Scalars['String']>;
  featured_image?: Maybe<SitePageContextPostsFeatured_Image>;
  childStrapiPostContent?: Maybe<SitePageContextPostsChildStrapiPostContent>;
  post_tags?: Maybe<Array<Maybe<SitePageContextPostsPost_Tags>>>;
};

export type SitePageContextPostsChildStrapiPostContent = {
  childMdx?: Maybe<SitePageContextPostsChildStrapiPostContentChildMdx>;
};

export type SitePageContextPostsChildStrapiPostContentChildMdx = {
  timeToRead?: Maybe<Scalars['Int']>;
};

export type SitePageContextPostsChildStrapiPostContentChildMdxFilterInput = {
  timeToRead?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextPostsChildStrapiPostContentFilterInput = {
  childMdx?: Maybe<SitePageContextPostsChildStrapiPostContentChildMdxFilterInput>;
};

export type SitePageContextPostSerie = {
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextPostSerieFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostsFeatured_Image = {
  childImageSharp?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharp>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharp = {
  original?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharpOriginal>;
  fluid?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharpFluid>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharpFilterInput = {
  original?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharpOriginalFilterInput>;
  fluid?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharpOriginal = {
  src?: Maybe<Scalars['String']>;
};

export type SitePageContextPostsFeatured_ImageChildImageSharpOriginalFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostsFeatured_ImageFilterInput = {
  childImageSharp?: Maybe<SitePageContextPostsFeatured_ImageChildImageSharpFilterInput>;
};

export type SitePageContextPostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  serie_copy?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translation?: Maybe<SitePageContextPostsTranslationFilterInput>;
  post_serie?: Maybe<SitePageContextPostsPost_SerieFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  featured_image?: Maybe<SitePageContextPostsFeatured_ImageFilterInput>;
  childStrapiPostContent?: Maybe<SitePageContextPostsChildStrapiPostContentFilterInput>;
  post_tags?: Maybe<SitePageContextPostsPost_TagsFilterListInput>;
};

export type SitePageContextPostsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsFilterInput>;
};

export type SitePageContextPostsPost_Serie = {
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextPostsPost_SerieFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostsPost_Tags = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostsPost_TagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostsPost_TagsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsPost_TagsFilterInput>;
};

export type SitePageContextPostsTranslation = {
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostsTranslationFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostTags = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostTagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostTagsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostTagsFilterInput>;
};

export type SitePageContextPostTranslation = {
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostTranslationFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSerie = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  blogPosts?: Maybe<Array<Maybe<SitePageContextSerieBlogPosts>>>;
};

export type SitePageContextSerieBlogPosts = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSerieBlogPostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSerieBlogPostsFilterListInput = {
  elemMatch?: Maybe<SitePageContextSerieBlogPostsFilterInput>;
};

export type SitePageContextSerieFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  blogPosts?: Maybe<SitePageContextSerieBlogPostsFilterListInput>;
};

export type SitePageContextTag = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextTagFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextTranslation = {
  language?: Maybe<Scalars['String']>;
  postUri?: Maybe<Scalars['String']>;
};

export type SitePageContextTranslationFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  postUri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___postUri'
  | 'context___post___id'
  | 'context___post___title'
  | 'context___post___subtitle'
  | 'context___post___description'
  | 'context___post___date'
  | 'context___post___serieCopy'
  | 'context___post___slug'
  | 'context___post___language'
  | 'context___post___translation___language'
  | 'context___post___translation___slug'
  | 'context___post___serie___slug'
  | 'context___post___serie___id'
  | 'context___post___serie___name'
  | 'context___post___tags'
  | 'context___post___tags___id'
  | 'context___post___tags___name'
  | 'context___post___tags___slug'
  | 'context___serie___id'
  | 'context___serie___name'
  | 'context___serie___slug'
  | 'context___serie___blogPosts'
  | 'context___serie___blogPosts___id'
  | 'context___serie___blogPosts___slug'
  | 'context___serie___blogPosts___language'
  | 'context___serie___blogPosts___subtitle'
  | 'context___serie___blogPosts___copy'
  | 'context___serie___blogPosts___uri'
  | 'context___translation___language'
  | 'context___translation___postUri'
  | 'context___posts'
  | 'context___posts___id'
  | 'context___posts___title'
  | 'context___posts___subtitle'
  | 'context___posts___description'
  | 'context___posts___date'
  | 'context___posts___serie_copy'
  | 'context___posts___slug'
  | 'context___posts___translation___language'
  | 'context___posts___translation___slug'
  | 'context___posts___post_serie___slug'
  | 'context___posts___post_serie___id'
  | 'context___posts___post_serie___name'
  | 'context___posts___language'
  | 'context___posts___post_tags'
  | 'context___posts___post_tags___id'
  | 'context___posts___post_tags___name'
  | 'context___posts___post_tags___slug'
  | 'context___tag___slug'
  | 'context___tag___name'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___production'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___aliases____app_types'
  | 'pluginCreator___pluginOptions___aliases____components'
  | 'pluginCreator___pluginOptions___aliases____config'
  | 'pluginCreator___pluginOptions___aliases____contexts'
  | 'pluginCreator___pluginOptions___aliases____hooks'
  | 'pluginCreator___pluginOptions___aliases____locales'
  | 'pluginCreator___pluginOptions___aliases____models'
  | 'pluginCreator___pluginOptions___aliases____screens'
  | 'pluginCreator___pluginOptions___aliases____static'
  | 'pluginCreator___pluginOptions___aliases____styles'
  | 'pluginCreator___pluginOptions___aliases____utils'
  | 'pluginCreator___pluginOptions___aliases____stores'
  | 'pluginCreator___pluginOptions___aliases____globalShared'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___localize'
  | 'pluginCreator___pluginOptions___localize___lang'
  | 'pluginCreator___pluginOptions___localize___name'
  | 'pluginCreator___pluginOptions___localize___short_name'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___google___families'
  | 'pluginCreator___pluginOptions___queryLimit'
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___contentTypes'
  | 'pluginCreator___pluginOptions___singleTypes'
  | 'pluginCreator___pluginOptions___appId'
  | 'pluginCreator___pluginOptions___apiKey'
  | 'pluginCreator___pluginOptions___indexName'
  | 'pluginCreator___pluginOptions___queries'
  | 'pluginCreator___pluginOptions___queries___query'
  | 'pluginCreator___pluginOptions___queries___indexName'
  | 'pluginCreator___pluginOptions___chunkSize'
  | 'pluginCreator___pluginOptions___enablePartialUpdates'
  | 'pluginCreator___pluginOptions___matchFields'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___production'
  | 'pluginOptions___query'
  | 'pluginOptions___aliases____app_types'
  | 'pluginOptions___aliases____components'
  | 'pluginOptions___aliases____config'
  | 'pluginOptions___aliases____contexts'
  | 'pluginOptions___aliases____hooks'
  | 'pluginOptions___aliases____locales'
  | 'pluginOptions___aliases____models'
  | 'pluginOptions___aliases____screens'
  | 'pluginOptions___aliases____static'
  | 'pluginOptions___aliases____styles'
  | 'pluginOptions___aliases____utils'
  | 'pluginOptions___aliases____stores'
  | 'pluginOptions___aliases____globalShared'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___localize'
  | 'pluginOptions___localize___lang'
  | 'pluginOptions___localize___name'
  | 'pluginOptions___localize___short_name'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___extensions'
  | 'pluginOptions___google___families'
  | 'pluginOptions___queryLimit'
  | 'pluginOptions___apiURL'
  | 'pluginOptions___contentTypes'
  | 'pluginOptions___singleTypes'
  | 'pluginOptions___appId'
  | 'pluginOptions___apiKey'
  | 'pluginOptions___indexName'
  | 'pluginOptions___queries'
  | 'pluginOptions___queries___query'
  | 'pluginOptions___queries___indexName'
  | 'pluginOptions___queries___settings___attributesToSnippet'
  | 'pluginOptions___chunkSize'
  | 'pluginOptions___enablePartialUpdates'
  | 'pluginOptions___matchFields'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  production?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  localize?: Maybe<Array<Maybe<SitePluginPluginOptionsLocalize>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  google?: Maybe<SitePluginPluginOptionsGoogle>;
  queryLimit?: Maybe<Scalars['Int']>;
  apiURL?: Maybe<Scalars['String']>;
  contentTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  singleTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  appId?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  indexName?: Maybe<Scalars['String']>;
  queries?: Maybe<Array<Maybe<SitePluginPluginOptionsQueries>>>;
  chunkSize?: Maybe<Scalars['Int']>;
  enablePartialUpdates?: Maybe<Scalars['Boolean']>;
  matchFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsAliases = {
  _app_types?: Maybe<Scalars['String']>;
  _components?: Maybe<Scalars['String']>;
  _config?: Maybe<Scalars['String']>;
  _contexts?: Maybe<Scalars['String']>;
  _hooks?: Maybe<Scalars['String']>;
  _locales?: Maybe<Scalars['String']>;
  _models?: Maybe<Scalars['String']>;
  _screens?: Maybe<Scalars['String']>;
  _static?: Maybe<Scalars['String']>;
  _styles?: Maybe<Scalars['String']>;
  _utils?: Maybe<Scalars['String']>;
  _stores?: Maybe<Scalars['String']>;
  _globalShared?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  _app_types?: Maybe<StringQueryOperatorInput>;
  _components?: Maybe<StringQueryOperatorInput>;
  _config?: Maybe<StringQueryOperatorInput>;
  _contexts?: Maybe<StringQueryOperatorInput>;
  _hooks?: Maybe<StringQueryOperatorInput>;
  _locales?: Maybe<StringQueryOperatorInput>;
  _models?: Maybe<StringQueryOperatorInput>;
  _screens?: Maybe<StringQueryOperatorInput>;
  _static?: Maybe<StringQueryOperatorInput>;
  _styles?: Maybe<StringQueryOperatorInput>;
  _utils?: Maybe<StringQueryOperatorInput>;
  _stores?: Maybe<StringQueryOperatorInput>;
  _globalShared?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  production?: Maybe<BooleanQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  localize?: Maybe<SitePluginPluginOptionsLocalizeFilterListInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>;
  queryLimit?: Maybe<IntQueryOperatorInput>;
  apiURL?: Maybe<StringQueryOperatorInput>;
  contentTypes?: Maybe<StringQueryOperatorInput>;
  singleTypes?: Maybe<StringQueryOperatorInput>;
  appId?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  indexName?: Maybe<StringQueryOperatorInput>;
  queries?: Maybe<SitePluginPluginOptionsQueriesFilterListInput>;
  chunkSize?: Maybe<IntQueryOperatorInput>;
  enablePartialUpdates?: Maybe<BooleanQueryOperatorInput>;
  matchFields?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalize = {
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsLocalizeFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalizeFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLocalizeFilterInput>;
};

export type SitePluginPluginOptionsQueries = {
  query?: Maybe<Scalars['String']>;
  indexName?: Maybe<Scalars['String']>;
  settings?: Maybe<SitePluginPluginOptionsQueriesSettings>;
};

export type SitePluginPluginOptionsQueriesFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  indexName?: Maybe<StringQueryOperatorInput>;
  settings?: Maybe<SitePluginPluginOptionsQueriesSettingsFilterInput>;
};

export type SitePluginPluginOptionsQueriesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsQueriesFilterInput>;
};

export type SitePluginPluginOptionsQueriesSettings = {
  attributesToSnippet?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsQueriesSettingsFilterInput = {
  attributesToSnippet?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StrapiCv = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  career_summary?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<StrapiCvJobs>>>;
  technical_skills?: Maybe<Array<Maybe<StrapiCvTechnical_Skills>>>;
  interests?: Maybe<Array<Maybe<StrapiCvInterests>>>;
  side_projects?: Maybe<Array<Maybe<StrapiCvSide_Projects>>>;
  education?: Maybe<StrapiCvEducation>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  summary?: Maybe<Scalars['String']>;
  SEO?: Maybe<StrapiCvSeo>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiCvCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiCvEdge>;
  nodes: Array<StrapiCv>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiCvGroupConnection>;
};


export type StrapiCvConnectionDistinctArgs = {
  field: StrapiCvFieldsEnum;
};


export type StrapiCvConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiCvFieldsEnum;
};

export type StrapiCvEdge = {
  next?: Maybe<StrapiCv>;
  node: StrapiCv;
  previous?: Maybe<StrapiCv>;
};

export type StrapiCvEducation = {
  formal?: Maybe<Array<Maybe<StrapiCvEducationFormal>>>;
  languages?: Maybe<Array<Maybe<StrapiCvEducationLanguages>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvEducationFilterInput = {
  formal?: Maybe<StrapiCvEducationFormalFilterListInput>;
  languages?: Maybe<StrapiCvEducationLanguagesFilterListInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvEducationFormal = {
  is_actual?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  foundation?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  end_date?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationFormalStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationFormalEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationFormalCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationFormalUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvEducationFormalFilterInput = {
  is_actual?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  foundation?: Maybe<StringQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvEducationFormalFilterListInput = {
  elemMatch?: Maybe<StrapiCvEducationFormalFilterInput>;
};

export type StrapiCvEducationLanguages = {
  name?: Maybe<Scalars['String']>;
  proficiency?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationLanguagesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvEducationLanguagesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvEducationLanguagesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  proficiency?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvEducationLanguagesFilterListInput = {
  elemMatch?: Maybe<StrapiCvEducationLanguagesFilterInput>;
};

export type StrapiCvFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'career_summary'
  | 'jobs'
  | 'jobs___is_actual'
  | 'jobs___role'
  | 'jobs___company'
  | 'jobs___description'
  | 'jobs___start_date'
  | 'jobs___createdAt'
  | 'jobs___updatedAt'
  | 'jobs___id'
  | 'jobs___end_date'
  | 'technical_skills'
  | 'technical_skills___name'
  | 'technical_skills___technologies'
  | 'technical_skills___technologies___name'
  | 'technical_skills___technologies___createdAt'
  | 'technical_skills___technologies___updatedAt'
  | 'technical_skills___technologies___id'
  | 'technical_skills___createdAt'
  | 'technical_skills___updatedAt'
  | 'technical_skills___id'
  | 'interests'
  | 'interests___name'
  | 'interests___createdAt'
  | 'interests___updatedAt'
  | 'interests___id'
  | 'side_projects'
  | 'side_projects___is_ongoing'
  | 'side_projects___description'
  | 'side_projects___name'
  | 'side_projects___is_visible'
  | 'side_projects___start_date'
  | 'side_projects___end_date'
  | 'side_projects___createdAt'
  | 'side_projects___updatedAt'
  | 'side_projects___id'
  | 'education___formal'
  | 'education___formal___is_actual'
  | 'education___formal___title'
  | 'education___formal___foundation'
  | 'education___formal___start_date'
  | 'education___formal___end_date'
  | 'education___formal___createdAt'
  | 'education___formal___updatedAt'
  | 'education___formal___id'
  | 'education___languages'
  | 'education___languages___name'
  | 'education___languages___proficiency'
  | 'education___languages___createdAt'
  | 'education___languages___updatedAt'
  | 'education___languages___id'
  | 'education___createdAt'
  | 'education___updatedAt'
  | 'education___id'
  | 'createdAt'
  | 'updatedAt'
  | 'summary'
  | 'SEO___title'
  | 'SEO___description'
  | 'SEO___id'
  | 'strapiId';

export type StrapiCvFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  career_summary?: Maybe<StringQueryOperatorInput>;
  jobs?: Maybe<StrapiCvJobsFilterListInput>;
  technical_skills?: Maybe<StrapiCvTechnical_SkillsFilterListInput>;
  interests?: Maybe<StrapiCvInterestsFilterListInput>;
  side_projects?: Maybe<StrapiCvSide_ProjectsFilterListInput>;
  education?: Maybe<StrapiCvEducationFilterInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  SEO?: Maybe<StrapiCvSeoFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiCvEdge>;
  nodes: Array<StrapiCv>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiCvInterests = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvInterestsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvInterestsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvInterestsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvInterestsFilterListInput = {
  elemMatch?: Maybe<StrapiCvInterestsFilterInput>;
};

export type StrapiCvJobs = {
  is_actual?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
};


export type StrapiCvJobsStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvJobsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvJobsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvJobsEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvJobsFilterInput = {
  is_actual?: Maybe<BooleanQueryOperatorInput>;
  role?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
};

export type StrapiCvJobsFilterListInput = {
  elemMatch?: Maybe<StrapiCvJobsFilterInput>;
};

export type StrapiCvSeo = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiCvSeoFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvSide_Projects = {
  is_ongoing?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  start_date?: Maybe<Scalars['Date']>;
  end_date?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvSide_ProjectsStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvSide_ProjectsEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvSide_ProjectsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvSide_ProjectsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvSide_ProjectsFilterInput = {
  is_ongoing?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  is_visible?: Maybe<BooleanQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvSide_ProjectsFilterListInput = {
  elemMatch?: Maybe<StrapiCvSide_ProjectsFilterInput>;
};

export type StrapiCvSortInput = {
  fields?: Maybe<Array<Maybe<StrapiCvFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiCvTechnical_Skills = {
  name?: Maybe<Scalars['String']>;
  technologies?: Maybe<Array<Maybe<StrapiCvTechnical_SkillsTechnologies>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvTechnical_SkillsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvTechnical_SkillsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvTechnical_SkillsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  technologies?: Maybe<StrapiCvTechnical_SkillsTechnologiesFilterListInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvTechnical_SkillsFilterListInput = {
  elemMatch?: Maybe<StrapiCvTechnical_SkillsFilterInput>;
};

export type StrapiCvTechnical_SkillsTechnologies = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvTechnical_SkillsTechnologiesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvTechnical_SkillsTechnologiesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvTechnical_SkillsTechnologiesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCvTechnical_SkillsTechnologiesFilterListInput = {
  elemMatch?: Maybe<StrapiCvTechnical_SkillsTechnologiesFilterInput>;
};

export type StrapiPersonalInformation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  full_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  city_country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  profile_pic?: Maybe<File>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPersonalInformationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPersonalInformationEdge>;
  nodes: Array<StrapiPersonalInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPersonalInformationGroupConnection>;
};


export type StrapiPersonalInformationConnectionDistinctArgs = {
  field: StrapiPersonalInformationFieldsEnum;
};


export type StrapiPersonalInformationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPersonalInformationFieldsEnum;
};

export type StrapiPersonalInformationEdge = {
  next?: Maybe<StrapiPersonalInformation>;
  node: StrapiPersonalInformation;
  previous?: Maybe<StrapiPersonalInformation>;
};

export type StrapiPersonalInformationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'full_name'
  | 'phone'
  | 'city_country'
  | 'email'
  | 'createdAt'
  | 'updatedAt'
  | 'city'
  | 'country'
  | 'profile_pic___sourceInstanceName'
  | 'profile_pic___absolutePath'
  | 'profile_pic___relativePath'
  | 'profile_pic___extension'
  | 'profile_pic___size'
  | 'profile_pic___prettySize'
  | 'profile_pic___modifiedTime'
  | 'profile_pic___accessTime'
  | 'profile_pic___changeTime'
  | 'profile_pic___birthTime'
  | 'profile_pic___root'
  | 'profile_pic___dir'
  | 'profile_pic___base'
  | 'profile_pic___ext'
  | 'profile_pic___name'
  | 'profile_pic___relativeDirectory'
  | 'profile_pic___dev'
  | 'profile_pic___mode'
  | 'profile_pic___nlink'
  | 'profile_pic___uid'
  | 'profile_pic___gid'
  | 'profile_pic___rdev'
  | 'profile_pic___ino'
  | 'profile_pic___atimeMs'
  | 'profile_pic___mtimeMs'
  | 'profile_pic___ctimeMs'
  | 'profile_pic___atime'
  | 'profile_pic___mtime'
  | 'profile_pic___ctime'
  | 'profile_pic___birthtime'
  | 'profile_pic___birthtimeMs'
  | 'profile_pic___blksize'
  | 'profile_pic___blocks'
  | 'profile_pic___childImageSharp___fixed___base64'
  | 'profile_pic___childImageSharp___fixed___tracedSVG'
  | 'profile_pic___childImageSharp___fixed___aspectRatio'
  | 'profile_pic___childImageSharp___fixed___width'
  | 'profile_pic___childImageSharp___fixed___height'
  | 'profile_pic___childImageSharp___fixed___src'
  | 'profile_pic___childImageSharp___fixed___srcSet'
  | 'profile_pic___childImageSharp___fixed___srcWebp'
  | 'profile_pic___childImageSharp___fixed___srcSetWebp'
  | 'profile_pic___childImageSharp___fixed___originalName'
  | 'profile_pic___childImageSharp___resolutions___base64'
  | 'profile_pic___childImageSharp___resolutions___tracedSVG'
  | 'profile_pic___childImageSharp___resolutions___aspectRatio'
  | 'profile_pic___childImageSharp___resolutions___width'
  | 'profile_pic___childImageSharp___resolutions___height'
  | 'profile_pic___childImageSharp___resolutions___src'
  | 'profile_pic___childImageSharp___resolutions___srcSet'
  | 'profile_pic___childImageSharp___resolutions___srcWebp'
  | 'profile_pic___childImageSharp___resolutions___srcSetWebp'
  | 'profile_pic___childImageSharp___resolutions___originalName'
  | 'profile_pic___childImageSharp___fluid___base64'
  | 'profile_pic___childImageSharp___fluid___tracedSVG'
  | 'profile_pic___childImageSharp___fluid___aspectRatio'
  | 'profile_pic___childImageSharp___fluid___src'
  | 'profile_pic___childImageSharp___fluid___srcSet'
  | 'profile_pic___childImageSharp___fluid___srcWebp'
  | 'profile_pic___childImageSharp___fluid___srcSetWebp'
  | 'profile_pic___childImageSharp___fluid___sizes'
  | 'profile_pic___childImageSharp___fluid___originalImg'
  | 'profile_pic___childImageSharp___fluid___originalName'
  | 'profile_pic___childImageSharp___fluid___presentationWidth'
  | 'profile_pic___childImageSharp___fluid___presentationHeight'
  | 'profile_pic___childImageSharp___sizes___base64'
  | 'profile_pic___childImageSharp___sizes___tracedSVG'
  | 'profile_pic___childImageSharp___sizes___aspectRatio'
  | 'profile_pic___childImageSharp___sizes___src'
  | 'profile_pic___childImageSharp___sizes___srcSet'
  | 'profile_pic___childImageSharp___sizes___srcWebp'
  | 'profile_pic___childImageSharp___sizes___srcSetWebp'
  | 'profile_pic___childImageSharp___sizes___sizes'
  | 'profile_pic___childImageSharp___sizes___originalImg'
  | 'profile_pic___childImageSharp___sizes___originalName'
  | 'profile_pic___childImageSharp___sizes___presentationWidth'
  | 'profile_pic___childImageSharp___sizes___presentationHeight'
  | 'profile_pic___childImageSharp___original___width'
  | 'profile_pic___childImageSharp___original___height'
  | 'profile_pic___childImageSharp___original___src'
  | 'profile_pic___childImageSharp___resize___src'
  | 'profile_pic___childImageSharp___resize___tracedSVG'
  | 'profile_pic___childImageSharp___resize___width'
  | 'profile_pic___childImageSharp___resize___height'
  | 'profile_pic___childImageSharp___resize___aspectRatio'
  | 'profile_pic___childImageSharp___resize___originalName'
  | 'profile_pic___childImageSharp___id'
  | 'profile_pic___childImageSharp___parent___id'
  | 'profile_pic___childImageSharp___parent___children'
  | 'profile_pic___childImageSharp___children'
  | 'profile_pic___childImageSharp___children___id'
  | 'profile_pic___childImageSharp___children___children'
  | 'profile_pic___childImageSharp___internal___content'
  | 'profile_pic___childImageSharp___internal___contentDigest'
  | 'profile_pic___childImageSharp___internal___description'
  | 'profile_pic___childImageSharp___internal___fieldOwners'
  | 'profile_pic___childImageSharp___internal___ignoreType'
  | 'profile_pic___childImageSharp___internal___mediaType'
  | 'profile_pic___childImageSharp___internal___owner'
  | 'profile_pic___childImageSharp___internal___type'
  | 'profile_pic___id'
  | 'profile_pic___parent___id'
  | 'profile_pic___parent___parent___id'
  | 'profile_pic___parent___parent___children'
  | 'profile_pic___parent___children'
  | 'profile_pic___parent___children___id'
  | 'profile_pic___parent___children___children'
  | 'profile_pic___parent___internal___content'
  | 'profile_pic___parent___internal___contentDigest'
  | 'profile_pic___parent___internal___description'
  | 'profile_pic___parent___internal___fieldOwners'
  | 'profile_pic___parent___internal___ignoreType'
  | 'profile_pic___parent___internal___mediaType'
  | 'profile_pic___parent___internal___owner'
  | 'profile_pic___parent___internal___type'
  | 'profile_pic___children'
  | 'profile_pic___children___id'
  | 'profile_pic___children___parent___id'
  | 'profile_pic___children___parent___children'
  | 'profile_pic___children___children'
  | 'profile_pic___children___children___id'
  | 'profile_pic___children___children___children'
  | 'profile_pic___children___internal___content'
  | 'profile_pic___children___internal___contentDigest'
  | 'profile_pic___children___internal___description'
  | 'profile_pic___children___internal___fieldOwners'
  | 'profile_pic___children___internal___ignoreType'
  | 'profile_pic___children___internal___mediaType'
  | 'profile_pic___children___internal___owner'
  | 'profile_pic___children___internal___type'
  | 'profile_pic___internal___content'
  | 'profile_pic___internal___contentDigest'
  | 'profile_pic___internal___description'
  | 'profile_pic___internal___fieldOwners'
  | 'profile_pic___internal___ignoreType'
  | 'profile_pic___internal___mediaType'
  | 'profile_pic___internal___owner'
  | 'profile_pic___internal___type'
  | 'strapiId';

export type StrapiPersonalInformationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  full_name?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  city_country?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  profile_pic?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPersonalInformationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPersonalInformationEdge>;
  nodes: Array<StrapiPersonalInformation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPersonalInformationSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPersonalInformationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiPostContent = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMdx?: Maybe<Mdx>;
};

export type StrapiPostContentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostContentEdge>;
  nodes: Array<StrapiPostContent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPostContentGroupConnection>;
};


export type StrapiPostContentConnectionDistinctArgs = {
  field: StrapiPostContentFieldsEnum;
};


export type StrapiPostContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPostContentFieldsEnum;
};

export type StrapiPostContentEdge = {
  next?: Maybe<StrapiPostContent>;
  node: StrapiPostContent;
  previous?: Maybe<StrapiPostContent>;
};

export type StrapiPostContentFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type StrapiPostContentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type StrapiPostContentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostContentEdge>;
  nodes: Array<StrapiPostContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPostContentSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPostContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiPosts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  post_tags?: Maybe<Array<Maybe<StrapiPostsPost_Tags>>>;
  is_shown?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  featured_image_caption?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  featured_image?: Maybe<File>;
  strapiId?: Maybe<Scalars['String']>;
  serie_copy?: Maybe<Scalars['String']>;
  post_serie?: Maybe<StrapiPostsPost_Serie>;
  translation?: Maybe<StrapiPostsTranslation>;
  childStrapiPostContent?: Maybe<StrapiPostContent>;
};


export type StrapiPostsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostsEdge>;
  nodes: Array<StrapiPosts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPostsGroupConnection>;
};


export type StrapiPostsConnectionDistinctArgs = {
  field: StrapiPostsFieldsEnum;
};


export type StrapiPostsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPostsFieldsEnum;
};

export type StrapiPostsEdge = {
  next?: Maybe<StrapiPosts>;
  node: StrapiPosts;
  previous?: Maybe<StrapiPosts>;
};

export type StrapiPostSerie = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  post_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  blog_posts?: Maybe<Array<Maybe<StrapiPostSerieBlog_Posts>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPostSerieCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostSerieUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostSerieBlog_Posts = {
  language?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  post_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_shown?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  subtitle?: Maybe<Scalars['String']>;
  serie_copy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  featured_image?: Maybe<File>;
  post_serie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  featured_image_caption?: Maybe<Scalars['String']>;
};


export type StrapiPostSerieBlog_PostsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostSerieBlog_PostsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostSerieBlog_PostsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostSerieBlog_PostsFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
  is_shown?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  serie_copy?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<FileFilterInput>;
  post_serie?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  featured_image_caption?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostSerieBlog_PostsFilterListInput = {
  elemMatch?: Maybe<StrapiPostSerieBlog_PostsFilterInput>;
};

export type StrapiPostSerieConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostSerieEdge>;
  nodes: Array<StrapiPostSerie>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPostSerieGroupConnection>;
};


export type StrapiPostSerieConnectionDistinctArgs = {
  field: StrapiPostSerieFieldsEnum;
};


export type StrapiPostSerieConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPostSerieFieldsEnum;
};

export type StrapiPostSerieEdge = {
  next?: Maybe<StrapiPostSerie>;
  node: StrapiPostSerie;
  previous?: Maybe<StrapiPostSerie>;
};

export type StrapiPostSerieFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'slug'
  | 'name'
  | 'createdAt'
  | 'updatedAt'
  | 'post_tags'
  | 'blog_posts'
  | 'blog_posts___language'
  | 'blog_posts___status'
  | 'blog_posts___post_tags'
  | 'blog_posts___is_shown'
  | 'blog_posts___slug'
  | 'blog_posts___date'
  | 'blog_posts___subtitle'
  | 'blog_posts___serie_copy'
  | 'blog_posts___title'
  | 'blog_posts___content'
  | 'blog_posts___description'
  | 'blog_posts___createdAt'
  | 'blog_posts___updatedAt'
  | 'blog_posts___featured_image___sourceInstanceName'
  | 'blog_posts___featured_image___absolutePath'
  | 'blog_posts___featured_image___relativePath'
  | 'blog_posts___featured_image___extension'
  | 'blog_posts___featured_image___size'
  | 'blog_posts___featured_image___prettySize'
  | 'blog_posts___featured_image___modifiedTime'
  | 'blog_posts___featured_image___accessTime'
  | 'blog_posts___featured_image___changeTime'
  | 'blog_posts___featured_image___birthTime'
  | 'blog_posts___featured_image___root'
  | 'blog_posts___featured_image___dir'
  | 'blog_posts___featured_image___base'
  | 'blog_posts___featured_image___ext'
  | 'blog_posts___featured_image___name'
  | 'blog_posts___featured_image___relativeDirectory'
  | 'blog_posts___featured_image___dev'
  | 'blog_posts___featured_image___mode'
  | 'blog_posts___featured_image___nlink'
  | 'blog_posts___featured_image___uid'
  | 'blog_posts___featured_image___gid'
  | 'blog_posts___featured_image___rdev'
  | 'blog_posts___featured_image___ino'
  | 'blog_posts___featured_image___atimeMs'
  | 'blog_posts___featured_image___mtimeMs'
  | 'blog_posts___featured_image___ctimeMs'
  | 'blog_posts___featured_image___atime'
  | 'blog_posts___featured_image___mtime'
  | 'blog_posts___featured_image___ctime'
  | 'blog_posts___featured_image___birthtime'
  | 'blog_posts___featured_image___birthtimeMs'
  | 'blog_posts___featured_image___blksize'
  | 'blog_posts___featured_image___blocks'
  | 'blog_posts___featured_image___childImageSharp___id'
  | 'blog_posts___featured_image___childImageSharp___children'
  | 'blog_posts___featured_image___id'
  | 'blog_posts___featured_image___parent___id'
  | 'blog_posts___featured_image___parent___children'
  | 'blog_posts___featured_image___children'
  | 'blog_posts___featured_image___children___id'
  | 'blog_posts___featured_image___children___children'
  | 'blog_posts___featured_image___internal___content'
  | 'blog_posts___featured_image___internal___contentDigest'
  | 'blog_posts___featured_image___internal___description'
  | 'blog_posts___featured_image___internal___fieldOwners'
  | 'blog_posts___featured_image___internal___ignoreType'
  | 'blog_posts___featured_image___internal___mediaType'
  | 'blog_posts___featured_image___internal___owner'
  | 'blog_posts___featured_image___internal___type'
  | 'blog_posts___post_serie'
  | 'blog_posts___id'
  | 'blog_posts___featured_image_caption'
  | 'strapiId';

export type StrapiPostSerieFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
  blog_posts?: Maybe<StrapiPostSerieBlog_PostsFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostSerieGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostSerieEdge>;
  nodes: Array<StrapiPostSerie>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPostSerieSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPostSerieFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiPostsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'language'
  | 'status'
  | 'post_tags'
  | 'post_tags___tag'
  | 'post_tags___createdAt'
  | 'post_tags___updatedAt'
  | 'post_tags___slug'
  | 'post_tags___name'
  | 'post_tags___id'
  | 'is_shown'
  | 'slug'
  | 'date'
  | 'featured_image_caption'
  | 'subtitle'
  | 'title'
  | 'content'
  | 'description'
  | 'createdAt'
  | 'updatedAt'
  | 'featured_image___sourceInstanceName'
  | 'featured_image___absolutePath'
  | 'featured_image___relativePath'
  | 'featured_image___extension'
  | 'featured_image___size'
  | 'featured_image___prettySize'
  | 'featured_image___modifiedTime'
  | 'featured_image___accessTime'
  | 'featured_image___changeTime'
  | 'featured_image___birthTime'
  | 'featured_image___root'
  | 'featured_image___dir'
  | 'featured_image___base'
  | 'featured_image___ext'
  | 'featured_image___name'
  | 'featured_image___relativeDirectory'
  | 'featured_image___dev'
  | 'featured_image___mode'
  | 'featured_image___nlink'
  | 'featured_image___uid'
  | 'featured_image___gid'
  | 'featured_image___rdev'
  | 'featured_image___ino'
  | 'featured_image___atimeMs'
  | 'featured_image___mtimeMs'
  | 'featured_image___ctimeMs'
  | 'featured_image___atime'
  | 'featured_image___mtime'
  | 'featured_image___ctime'
  | 'featured_image___birthtime'
  | 'featured_image___birthtimeMs'
  | 'featured_image___blksize'
  | 'featured_image___blocks'
  | 'featured_image___childImageSharp___fixed___base64'
  | 'featured_image___childImageSharp___fixed___tracedSVG'
  | 'featured_image___childImageSharp___fixed___aspectRatio'
  | 'featured_image___childImageSharp___fixed___width'
  | 'featured_image___childImageSharp___fixed___height'
  | 'featured_image___childImageSharp___fixed___src'
  | 'featured_image___childImageSharp___fixed___srcSet'
  | 'featured_image___childImageSharp___fixed___srcWebp'
  | 'featured_image___childImageSharp___fixed___srcSetWebp'
  | 'featured_image___childImageSharp___fixed___originalName'
  | 'featured_image___childImageSharp___resolutions___base64'
  | 'featured_image___childImageSharp___resolutions___tracedSVG'
  | 'featured_image___childImageSharp___resolutions___aspectRatio'
  | 'featured_image___childImageSharp___resolutions___width'
  | 'featured_image___childImageSharp___resolutions___height'
  | 'featured_image___childImageSharp___resolutions___src'
  | 'featured_image___childImageSharp___resolutions___srcSet'
  | 'featured_image___childImageSharp___resolutions___srcWebp'
  | 'featured_image___childImageSharp___resolutions___srcSetWebp'
  | 'featured_image___childImageSharp___resolutions___originalName'
  | 'featured_image___childImageSharp___fluid___base64'
  | 'featured_image___childImageSharp___fluid___tracedSVG'
  | 'featured_image___childImageSharp___fluid___aspectRatio'
  | 'featured_image___childImageSharp___fluid___src'
  | 'featured_image___childImageSharp___fluid___srcSet'
  | 'featured_image___childImageSharp___fluid___srcWebp'
  | 'featured_image___childImageSharp___fluid___srcSetWebp'
  | 'featured_image___childImageSharp___fluid___sizes'
  | 'featured_image___childImageSharp___fluid___originalImg'
  | 'featured_image___childImageSharp___fluid___originalName'
  | 'featured_image___childImageSharp___fluid___presentationWidth'
  | 'featured_image___childImageSharp___fluid___presentationHeight'
  | 'featured_image___childImageSharp___sizes___base64'
  | 'featured_image___childImageSharp___sizes___tracedSVG'
  | 'featured_image___childImageSharp___sizes___aspectRatio'
  | 'featured_image___childImageSharp___sizes___src'
  | 'featured_image___childImageSharp___sizes___srcSet'
  | 'featured_image___childImageSharp___sizes___srcWebp'
  | 'featured_image___childImageSharp___sizes___srcSetWebp'
  | 'featured_image___childImageSharp___sizes___sizes'
  | 'featured_image___childImageSharp___sizes___originalImg'
  | 'featured_image___childImageSharp___sizes___originalName'
  | 'featured_image___childImageSharp___sizes___presentationWidth'
  | 'featured_image___childImageSharp___sizes___presentationHeight'
  | 'featured_image___childImageSharp___original___width'
  | 'featured_image___childImageSharp___original___height'
  | 'featured_image___childImageSharp___original___src'
  | 'featured_image___childImageSharp___resize___src'
  | 'featured_image___childImageSharp___resize___tracedSVG'
  | 'featured_image___childImageSharp___resize___width'
  | 'featured_image___childImageSharp___resize___height'
  | 'featured_image___childImageSharp___resize___aspectRatio'
  | 'featured_image___childImageSharp___resize___originalName'
  | 'featured_image___childImageSharp___id'
  | 'featured_image___childImageSharp___parent___id'
  | 'featured_image___childImageSharp___parent___children'
  | 'featured_image___childImageSharp___children'
  | 'featured_image___childImageSharp___children___id'
  | 'featured_image___childImageSharp___children___children'
  | 'featured_image___childImageSharp___internal___content'
  | 'featured_image___childImageSharp___internal___contentDigest'
  | 'featured_image___childImageSharp___internal___description'
  | 'featured_image___childImageSharp___internal___fieldOwners'
  | 'featured_image___childImageSharp___internal___ignoreType'
  | 'featured_image___childImageSharp___internal___mediaType'
  | 'featured_image___childImageSharp___internal___owner'
  | 'featured_image___childImageSharp___internal___type'
  | 'featured_image___id'
  | 'featured_image___parent___id'
  | 'featured_image___parent___parent___id'
  | 'featured_image___parent___parent___children'
  | 'featured_image___parent___children'
  | 'featured_image___parent___children___id'
  | 'featured_image___parent___children___children'
  | 'featured_image___parent___internal___content'
  | 'featured_image___parent___internal___contentDigest'
  | 'featured_image___parent___internal___description'
  | 'featured_image___parent___internal___fieldOwners'
  | 'featured_image___parent___internal___ignoreType'
  | 'featured_image___parent___internal___mediaType'
  | 'featured_image___parent___internal___owner'
  | 'featured_image___parent___internal___type'
  | 'featured_image___children'
  | 'featured_image___children___id'
  | 'featured_image___children___parent___id'
  | 'featured_image___children___parent___children'
  | 'featured_image___children___children'
  | 'featured_image___children___children___id'
  | 'featured_image___children___children___children'
  | 'featured_image___children___internal___content'
  | 'featured_image___children___internal___contentDigest'
  | 'featured_image___children___internal___description'
  | 'featured_image___children___internal___fieldOwners'
  | 'featured_image___children___internal___ignoreType'
  | 'featured_image___children___internal___mediaType'
  | 'featured_image___children___internal___owner'
  | 'featured_image___children___internal___type'
  | 'featured_image___internal___content'
  | 'featured_image___internal___contentDigest'
  | 'featured_image___internal___description'
  | 'featured_image___internal___fieldOwners'
  | 'featured_image___internal___ignoreType'
  | 'featured_image___internal___mediaType'
  | 'featured_image___internal___owner'
  | 'featured_image___internal___type'
  | 'strapiId'
  | 'serie_copy'
  | 'post_serie___slug'
  | 'post_serie___name'
  | 'post_serie___createdAt'
  | 'post_serie___updatedAt'
  | 'post_serie___id'
  | 'post_serie___post_tags'
  | 'translation___language'
  | 'translation___status'
  | 'translation___post_tags'
  | 'translation___is_shown'
  | 'translation___slug'
  | 'translation___date'
  | 'translation___subtitle'
  | 'translation___title'
  | 'translation___content'
  | 'translation___description'
  | 'translation___createdAt'
  | 'translation___updatedAt'
  | 'translation___featured_image___sourceInstanceName'
  | 'translation___featured_image___absolutePath'
  | 'translation___featured_image___relativePath'
  | 'translation___featured_image___extension'
  | 'translation___featured_image___size'
  | 'translation___featured_image___prettySize'
  | 'translation___featured_image___modifiedTime'
  | 'translation___featured_image___accessTime'
  | 'translation___featured_image___changeTime'
  | 'translation___featured_image___birthTime'
  | 'translation___featured_image___root'
  | 'translation___featured_image___dir'
  | 'translation___featured_image___base'
  | 'translation___featured_image___ext'
  | 'translation___featured_image___name'
  | 'translation___featured_image___relativeDirectory'
  | 'translation___featured_image___dev'
  | 'translation___featured_image___mode'
  | 'translation___featured_image___nlink'
  | 'translation___featured_image___uid'
  | 'translation___featured_image___gid'
  | 'translation___featured_image___rdev'
  | 'translation___featured_image___ino'
  | 'translation___featured_image___atimeMs'
  | 'translation___featured_image___mtimeMs'
  | 'translation___featured_image___ctimeMs'
  | 'translation___featured_image___atime'
  | 'translation___featured_image___mtime'
  | 'translation___featured_image___ctime'
  | 'translation___featured_image___birthtime'
  | 'translation___featured_image___birthtimeMs'
  | 'translation___featured_image___blksize'
  | 'translation___featured_image___blocks'
  | 'translation___featured_image___childImageSharp___id'
  | 'translation___featured_image___childImageSharp___children'
  | 'translation___featured_image___id'
  | 'translation___featured_image___parent___id'
  | 'translation___featured_image___parent___children'
  | 'translation___featured_image___children'
  | 'translation___featured_image___children___id'
  | 'translation___featured_image___children___children'
  | 'translation___featured_image___internal___content'
  | 'translation___featured_image___internal___contentDigest'
  | 'translation___featured_image___internal___description'
  | 'translation___featured_image___internal___fieldOwners'
  | 'translation___featured_image___internal___ignoreType'
  | 'translation___featured_image___internal___mediaType'
  | 'translation___featured_image___internal___owner'
  | 'translation___featured_image___internal___type'
  | 'translation___id'
  | 'childStrapiPostContent___id'
  | 'childStrapiPostContent___parent___id'
  | 'childStrapiPostContent___parent___parent___id'
  | 'childStrapiPostContent___parent___parent___children'
  | 'childStrapiPostContent___parent___children'
  | 'childStrapiPostContent___parent___children___id'
  | 'childStrapiPostContent___parent___children___children'
  | 'childStrapiPostContent___parent___internal___content'
  | 'childStrapiPostContent___parent___internal___contentDigest'
  | 'childStrapiPostContent___parent___internal___description'
  | 'childStrapiPostContent___parent___internal___fieldOwners'
  | 'childStrapiPostContent___parent___internal___ignoreType'
  | 'childStrapiPostContent___parent___internal___mediaType'
  | 'childStrapiPostContent___parent___internal___owner'
  | 'childStrapiPostContent___parent___internal___type'
  | 'childStrapiPostContent___children'
  | 'childStrapiPostContent___children___id'
  | 'childStrapiPostContent___children___parent___id'
  | 'childStrapiPostContent___children___parent___children'
  | 'childStrapiPostContent___children___children'
  | 'childStrapiPostContent___children___children___id'
  | 'childStrapiPostContent___children___children___children'
  | 'childStrapiPostContent___children___internal___content'
  | 'childStrapiPostContent___children___internal___contentDigest'
  | 'childStrapiPostContent___children___internal___description'
  | 'childStrapiPostContent___children___internal___fieldOwners'
  | 'childStrapiPostContent___children___internal___ignoreType'
  | 'childStrapiPostContent___children___internal___mediaType'
  | 'childStrapiPostContent___children___internal___owner'
  | 'childStrapiPostContent___children___internal___type'
  | 'childStrapiPostContent___internal___content'
  | 'childStrapiPostContent___internal___contentDigest'
  | 'childStrapiPostContent___internal___description'
  | 'childStrapiPostContent___internal___fieldOwners'
  | 'childStrapiPostContent___internal___ignoreType'
  | 'childStrapiPostContent___internal___mediaType'
  | 'childStrapiPostContent___internal___owner'
  | 'childStrapiPostContent___internal___type'
  | 'childStrapiPostContent___childMdx___rawBody'
  | 'childStrapiPostContent___childMdx___fileAbsolutePath'
  | 'childStrapiPostContent___childMdx___frontmatter___title'
  | 'childStrapiPostContent___childMdx___slug'
  | 'childStrapiPostContent___childMdx___body'
  | 'childStrapiPostContent___childMdx___excerpt'
  | 'childStrapiPostContent___childMdx___headings'
  | 'childStrapiPostContent___childMdx___headings___value'
  | 'childStrapiPostContent___childMdx___headings___depth'
  | 'childStrapiPostContent___childMdx___html'
  | 'childStrapiPostContent___childMdx___mdxAST'
  | 'childStrapiPostContent___childMdx___tableOfContents'
  | 'childStrapiPostContent___childMdx___timeToRead'
  | 'childStrapiPostContent___childMdx___wordCount___paragraphs'
  | 'childStrapiPostContent___childMdx___wordCount___sentences'
  | 'childStrapiPostContent___childMdx___wordCount___words'
  | 'childStrapiPostContent___childMdx___id'
  | 'childStrapiPostContent___childMdx___parent___id'
  | 'childStrapiPostContent___childMdx___parent___children'
  | 'childStrapiPostContent___childMdx___children'
  | 'childStrapiPostContent___childMdx___children___id'
  | 'childStrapiPostContent___childMdx___children___children'
  | 'childStrapiPostContent___childMdx___internal___content'
  | 'childStrapiPostContent___childMdx___internal___contentDigest'
  | 'childStrapiPostContent___childMdx___internal___description'
  | 'childStrapiPostContent___childMdx___internal___fieldOwners'
  | 'childStrapiPostContent___childMdx___internal___ignoreType'
  | 'childStrapiPostContent___childMdx___internal___mediaType'
  | 'childStrapiPostContent___childMdx___internal___owner'
  | 'childStrapiPostContent___childMdx___internal___type';

export type StrapiPostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StrapiPostsPost_TagsFilterListInput>;
  is_shown?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  featured_image_caption?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  serie_copy?: Maybe<StringQueryOperatorInput>;
  post_serie?: Maybe<StrapiPostsPost_SerieFilterInput>;
  translation?: Maybe<StrapiPostsTranslationFilterInput>;
  childStrapiPostContent?: Maybe<StrapiPostContentFilterInput>;
};

export type StrapiPostsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostsEdge>;
  nodes: Array<StrapiPosts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPostsPost_Serie = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  post_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StrapiPostsPost_SerieCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsPost_SerieUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostsPost_SerieFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostsPost_Tags = {
  tag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPostsPost_TagsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsPost_TagsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostsPost_TagsFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostsPost_TagsFilterListInput = {
  elemMatch?: Maybe<StrapiPostsPost_TagsFilterInput>;
};

export type StrapiPostsSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPostsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiPostsTranslation = {
  language?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  post_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_shown?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  featured_image?: Maybe<File>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPostsTranslationDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsTranslationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostsTranslationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostsTranslationFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
  is_shown?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostTags = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  tag?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  blog_posts?: Maybe<Array<Maybe<StrapiPostTagsBlog_Posts>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPostTagsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostTagsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostTagsBlog_Posts = {
  language?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  post_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_shown?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  featured_image_caption?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  featured_image?: Maybe<File>;
  id?: Maybe<Scalars['String']>;
  serie_copy?: Maybe<Scalars['String']>;
  post_serie?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['String']>;
};


export type StrapiPostTagsBlog_PostsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostTagsBlog_PostsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPostTagsBlog_PostsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPostTagsBlog_PostsFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  post_tags?: Maybe<StringQueryOperatorInput>;
  is_shown?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  featured_image_caption?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  featured_image?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  serie_copy?: Maybe<StringQueryOperatorInput>;
  post_serie?: Maybe<StringQueryOperatorInput>;
  translation?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostTagsBlog_PostsFilterListInput = {
  elemMatch?: Maybe<StrapiPostTagsBlog_PostsFilterInput>;
};

export type StrapiPostTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostTagsEdge>;
  nodes: Array<StrapiPostTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPostTagsGroupConnection>;
};


export type StrapiPostTagsConnectionDistinctArgs = {
  field: StrapiPostTagsFieldsEnum;
};


export type StrapiPostTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPostTagsFieldsEnum;
};

export type StrapiPostTagsEdge = {
  next?: Maybe<StrapiPostTags>;
  node: StrapiPostTags;
  previous?: Maybe<StrapiPostTags>;
};

export type StrapiPostTagsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'tag'
  | 'createdAt'
  | 'updatedAt'
  | 'slug'
  | 'name'
  | 'blog_posts'
  | 'blog_posts___language'
  | 'blog_posts___status'
  | 'blog_posts___post_tags'
  | 'blog_posts___is_shown'
  | 'blog_posts___slug'
  | 'blog_posts___date'
  | 'blog_posts___featured_image_caption'
  | 'blog_posts___subtitle'
  | 'blog_posts___title'
  | 'blog_posts___content'
  | 'blog_posts___description'
  | 'blog_posts___createdAt'
  | 'blog_posts___updatedAt'
  | 'blog_posts___featured_image___sourceInstanceName'
  | 'blog_posts___featured_image___absolutePath'
  | 'blog_posts___featured_image___relativePath'
  | 'blog_posts___featured_image___extension'
  | 'blog_posts___featured_image___size'
  | 'blog_posts___featured_image___prettySize'
  | 'blog_posts___featured_image___modifiedTime'
  | 'blog_posts___featured_image___accessTime'
  | 'blog_posts___featured_image___changeTime'
  | 'blog_posts___featured_image___birthTime'
  | 'blog_posts___featured_image___root'
  | 'blog_posts___featured_image___dir'
  | 'blog_posts___featured_image___base'
  | 'blog_posts___featured_image___ext'
  | 'blog_posts___featured_image___name'
  | 'blog_posts___featured_image___relativeDirectory'
  | 'blog_posts___featured_image___dev'
  | 'blog_posts___featured_image___mode'
  | 'blog_posts___featured_image___nlink'
  | 'blog_posts___featured_image___uid'
  | 'blog_posts___featured_image___gid'
  | 'blog_posts___featured_image___rdev'
  | 'blog_posts___featured_image___ino'
  | 'blog_posts___featured_image___atimeMs'
  | 'blog_posts___featured_image___mtimeMs'
  | 'blog_posts___featured_image___ctimeMs'
  | 'blog_posts___featured_image___atime'
  | 'blog_posts___featured_image___mtime'
  | 'blog_posts___featured_image___ctime'
  | 'blog_posts___featured_image___birthtime'
  | 'blog_posts___featured_image___birthtimeMs'
  | 'blog_posts___featured_image___blksize'
  | 'blog_posts___featured_image___blocks'
  | 'blog_posts___featured_image___childImageSharp___id'
  | 'blog_posts___featured_image___childImageSharp___children'
  | 'blog_posts___featured_image___id'
  | 'blog_posts___featured_image___parent___id'
  | 'blog_posts___featured_image___parent___children'
  | 'blog_posts___featured_image___children'
  | 'blog_posts___featured_image___children___id'
  | 'blog_posts___featured_image___children___children'
  | 'blog_posts___featured_image___internal___content'
  | 'blog_posts___featured_image___internal___contentDigest'
  | 'blog_posts___featured_image___internal___description'
  | 'blog_posts___featured_image___internal___fieldOwners'
  | 'blog_posts___featured_image___internal___ignoreType'
  | 'blog_posts___featured_image___internal___mediaType'
  | 'blog_posts___featured_image___internal___owner'
  | 'blog_posts___featured_image___internal___type'
  | 'blog_posts___id'
  | 'blog_posts___serie_copy'
  | 'blog_posts___post_serie'
  | 'blog_posts___translation'
  | 'strapiId';

export type StrapiPostTagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  blog_posts?: Maybe<StrapiPostTagsBlog_PostsFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPostTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPostTagsEdge>;
  nodes: Array<StrapiPostTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPostTagsSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPostTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiSite = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  seo_image?: Maybe<File>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiSiteCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSiteUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSiteEdge>;
  nodes: Array<StrapiSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiSiteGroupConnection>;
};


export type StrapiSiteConnectionDistinctArgs = {
  field: StrapiSiteFieldsEnum;
};


export type StrapiSiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiSiteFieldsEnum;
};

export type StrapiSiteEdge = {
  next?: Maybe<StrapiSite>;
  node: StrapiSite;
  previous?: Maybe<StrapiSite>;
};

export type StrapiSiteFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'url'
  | 'createdAt'
  | 'updatedAt'
  | 'seo_image___sourceInstanceName'
  | 'seo_image___absolutePath'
  | 'seo_image___relativePath'
  | 'seo_image___extension'
  | 'seo_image___size'
  | 'seo_image___prettySize'
  | 'seo_image___modifiedTime'
  | 'seo_image___accessTime'
  | 'seo_image___changeTime'
  | 'seo_image___birthTime'
  | 'seo_image___root'
  | 'seo_image___dir'
  | 'seo_image___base'
  | 'seo_image___ext'
  | 'seo_image___name'
  | 'seo_image___relativeDirectory'
  | 'seo_image___dev'
  | 'seo_image___mode'
  | 'seo_image___nlink'
  | 'seo_image___uid'
  | 'seo_image___gid'
  | 'seo_image___rdev'
  | 'seo_image___ino'
  | 'seo_image___atimeMs'
  | 'seo_image___mtimeMs'
  | 'seo_image___ctimeMs'
  | 'seo_image___atime'
  | 'seo_image___mtime'
  | 'seo_image___ctime'
  | 'seo_image___birthtime'
  | 'seo_image___birthtimeMs'
  | 'seo_image___blksize'
  | 'seo_image___blocks'
  | 'seo_image___childImageSharp___fixed___base64'
  | 'seo_image___childImageSharp___fixed___tracedSVG'
  | 'seo_image___childImageSharp___fixed___aspectRatio'
  | 'seo_image___childImageSharp___fixed___width'
  | 'seo_image___childImageSharp___fixed___height'
  | 'seo_image___childImageSharp___fixed___src'
  | 'seo_image___childImageSharp___fixed___srcSet'
  | 'seo_image___childImageSharp___fixed___srcWebp'
  | 'seo_image___childImageSharp___fixed___srcSetWebp'
  | 'seo_image___childImageSharp___fixed___originalName'
  | 'seo_image___childImageSharp___resolutions___base64'
  | 'seo_image___childImageSharp___resolutions___tracedSVG'
  | 'seo_image___childImageSharp___resolutions___aspectRatio'
  | 'seo_image___childImageSharp___resolutions___width'
  | 'seo_image___childImageSharp___resolutions___height'
  | 'seo_image___childImageSharp___resolutions___src'
  | 'seo_image___childImageSharp___resolutions___srcSet'
  | 'seo_image___childImageSharp___resolutions___srcWebp'
  | 'seo_image___childImageSharp___resolutions___srcSetWebp'
  | 'seo_image___childImageSharp___resolutions___originalName'
  | 'seo_image___childImageSharp___fluid___base64'
  | 'seo_image___childImageSharp___fluid___tracedSVG'
  | 'seo_image___childImageSharp___fluid___aspectRatio'
  | 'seo_image___childImageSharp___fluid___src'
  | 'seo_image___childImageSharp___fluid___srcSet'
  | 'seo_image___childImageSharp___fluid___srcWebp'
  | 'seo_image___childImageSharp___fluid___srcSetWebp'
  | 'seo_image___childImageSharp___fluid___sizes'
  | 'seo_image___childImageSharp___fluid___originalImg'
  | 'seo_image___childImageSharp___fluid___originalName'
  | 'seo_image___childImageSharp___fluid___presentationWidth'
  | 'seo_image___childImageSharp___fluid___presentationHeight'
  | 'seo_image___childImageSharp___sizes___base64'
  | 'seo_image___childImageSharp___sizes___tracedSVG'
  | 'seo_image___childImageSharp___sizes___aspectRatio'
  | 'seo_image___childImageSharp___sizes___src'
  | 'seo_image___childImageSharp___sizes___srcSet'
  | 'seo_image___childImageSharp___sizes___srcWebp'
  | 'seo_image___childImageSharp___sizes___srcSetWebp'
  | 'seo_image___childImageSharp___sizes___sizes'
  | 'seo_image___childImageSharp___sizes___originalImg'
  | 'seo_image___childImageSharp___sizes___originalName'
  | 'seo_image___childImageSharp___sizes___presentationWidth'
  | 'seo_image___childImageSharp___sizes___presentationHeight'
  | 'seo_image___childImageSharp___original___width'
  | 'seo_image___childImageSharp___original___height'
  | 'seo_image___childImageSharp___original___src'
  | 'seo_image___childImageSharp___resize___src'
  | 'seo_image___childImageSharp___resize___tracedSVG'
  | 'seo_image___childImageSharp___resize___width'
  | 'seo_image___childImageSharp___resize___height'
  | 'seo_image___childImageSharp___resize___aspectRatio'
  | 'seo_image___childImageSharp___resize___originalName'
  | 'seo_image___childImageSharp___id'
  | 'seo_image___childImageSharp___parent___id'
  | 'seo_image___childImageSharp___parent___children'
  | 'seo_image___childImageSharp___children'
  | 'seo_image___childImageSharp___children___id'
  | 'seo_image___childImageSharp___children___children'
  | 'seo_image___childImageSharp___internal___content'
  | 'seo_image___childImageSharp___internal___contentDigest'
  | 'seo_image___childImageSharp___internal___description'
  | 'seo_image___childImageSharp___internal___fieldOwners'
  | 'seo_image___childImageSharp___internal___ignoreType'
  | 'seo_image___childImageSharp___internal___mediaType'
  | 'seo_image___childImageSharp___internal___owner'
  | 'seo_image___childImageSharp___internal___type'
  | 'seo_image___id'
  | 'seo_image___parent___id'
  | 'seo_image___parent___parent___id'
  | 'seo_image___parent___parent___children'
  | 'seo_image___parent___children'
  | 'seo_image___parent___children___id'
  | 'seo_image___parent___children___children'
  | 'seo_image___parent___internal___content'
  | 'seo_image___parent___internal___contentDigest'
  | 'seo_image___parent___internal___description'
  | 'seo_image___parent___internal___fieldOwners'
  | 'seo_image___parent___internal___ignoreType'
  | 'seo_image___parent___internal___mediaType'
  | 'seo_image___parent___internal___owner'
  | 'seo_image___parent___internal___type'
  | 'seo_image___children'
  | 'seo_image___children___id'
  | 'seo_image___children___parent___id'
  | 'seo_image___children___parent___children'
  | 'seo_image___children___children'
  | 'seo_image___children___children___id'
  | 'seo_image___children___children___children'
  | 'seo_image___children___internal___content'
  | 'seo_image___children___internal___contentDigest'
  | 'seo_image___children___internal___description'
  | 'seo_image___children___internal___fieldOwners'
  | 'seo_image___children___internal___ignoreType'
  | 'seo_image___children___internal___mediaType'
  | 'seo_image___children___internal___owner'
  | 'seo_image___children___internal___type'
  | 'seo_image___internal___content'
  | 'seo_image___internal___contentDigest'
  | 'seo_image___internal___description'
  | 'seo_image___internal___fieldOwners'
  | 'seo_image___internal___ignoreType'
  | 'seo_image___internal___mediaType'
  | 'seo_image___internal___owner'
  | 'seo_image___internal___type'
  | 'strapiId';

export type StrapiSiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  seo_image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSiteEdge>;
  nodes: Array<StrapiSite>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiSiteSortInput = {
  fields?: Maybe<Array<Maybe<StrapiSiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiSocial = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  instagram?: Maybe<StrapiSocialInstagram>;
  linkedIn?: Maybe<StrapiSocialLinkedIn>;
  twitter?: Maybe<StrapiSocialTwitter>;
  github?: Maybe<StrapiSocialGithub>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiSocialCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSocialEdge>;
  nodes: Array<StrapiSocial>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiSocialGroupConnection>;
};


export type StrapiSocialConnectionDistinctArgs = {
  field: StrapiSocialFieldsEnum;
};


export type StrapiSocialConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiSocialFieldsEnum;
};

export type StrapiSocialEdge = {
  next?: Maybe<StrapiSocial>;
  node: StrapiSocial;
  previous?: Maybe<StrapiSocial>;
};

export type StrapiSocialFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'instagram___url'
  | 'instagram___createdAt'
  | 'instagram___updatedAt'
  | 'instagram___display_name'
  | 'instagram___id'
  | 'linkedIn___url'
  | 'linkedIn___createdAt'
  | 'linkedIn___updatedAt'
  | 'linkedIn___display_name'
  | 'linkedIn___id'
  | 'twitter___url'
  | 'twitter___createdAt'
  | 'twitter___updatedAt'
  | 'twitter___display_name'
  | 'twitter___id'
  | 'github___url'
  | 'github___createdAt'
  | 'github___updatedAt'
  | 'github___display_name'
  | 'github___id'
  | 'createdAt'
  | 'updatedAt'
  | 'strapiId';

export type StrapiSocialFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  instagram?: Maybe<StrapiSocialInstagramFilterInput>;
  linkedIn?: Maybe<StrapiSocialLinkedInFilterInput>;
  twitter?: Maybe<StrapiSocialTwitterFilterInput>;
  github?: Maybe<StrapiSocialGithubFilterInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSocialGithub = {
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialGithubCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialGithubUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialGithubFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  display_name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSocialGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSocialEdge>;
  nodes: Array<StrapiSocial>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiSocialInstagram = {
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialInstagramCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialInstagramUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialInstagramFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  display_name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSocialLinkedIn = {
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialLinkedInCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialLinkedInUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialLinkedInFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  display_name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSocialSortInput = {
  fields?: Maybe<Array<Maybe<StrapiSocialFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiSocialTwitter = {
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialTwitterCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialTwitterUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialTwitterFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  display_name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiUses = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  strapiId?: Maybe<Scalars['String']>;
  childStrapiUsesContent?: Maybe<StrapiUsesContent>;
};


export type StrapiUsesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiUsesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiUsesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUsesEdge>;
  nodes: Array<StrapiUses>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiUsesGroupConnection>;
};


export type StrapiUsesConnectionDistinctArgs = {
  field: StrapiUsesFieldsEnum;
};


export type StrapiUsesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiUsesFieldsEnum;
};

export type StrapiUsesContent = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMdx?: Maybe<Mdx>;
};

export type StrapiUsesContentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUsesContentEdge>;
  nodes: Array<StrapiUsesContent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiUsesContentGroupConnection>;
};


export type StrapiUsesContentConnectionDistinctArgs = {
  field: StrapiUsesContentFieldsEnum;
};


export type StrapiUsesContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiUsesContentFieldsEnum;
};

export type StrapiUsesContentEdge = {
  next?: Maybe<StrapiUsesContent>;
  node: StrapiUsesContent;
  previous?: Maybe<StrapiUsesContent>;
};

export type StrapiUsesContentFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type StrapiUsesContentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type StrapiUsesContentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUsesContentEdge>;
  nodes: Array<StrapiUsesContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiUsesContentSortInput = {
  fields?: Maybe<Array<Maybe<StrapiUsesContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiUsesEdge = {
  next?: Maybe<StrapiUses>;
  node: StrapiUses;
  previous?: Maybe<StrapiUses>;
};

export type StrapiUsesFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'language'
  | 'content'
  | 'createdAt'
  | 'updatedAt'
  | 'strapiId'
  | 'childStrapiUsesContent___id'
  | 'childStrapiUsesContent___parent___id'
  | 'childStrapiUsesContent___parent___parent___id'
  | 'childStrapiUsesContent___parent___parent___children'
  | 'childStrapiUsesContent___parent___children'
  | 'childStrapiUsesContent___parent___children___id'
  | 'childStrapiUsesContent___parent___children___children'
  | 'childStrapiUsesContent___parent___internal___content'
  | 'childStrapiUsesContent___parent___internal___contentDigest'
  | 'childStrapiUsesContent___parent___internal___description'
  | 'childStrapiUsesContent___parent___internal___fieldOwners'
  | 'childStrapiUsesContent___parent___internal___ignoreType'
  | 'childStrapiUsesContent___parent___internal___mediaType'
  | 'childStrapiUsesContent___parent___internal___owner'
  | 'childStrapiUsesContent___parent___internal___type'
  | 'childStrapiUsesContent___children'
  | 'childStrapiUsesContent___children___id'
  | 'childStrapiUsesContent___children___parent___id'
  | 'childStrapiUsesContent___children___parent___children'
  | 'childStrapiUsesContent___children___children'
  | 'childStrapiUsesContent___children___children___id'
  | 'childStrapiUsesContent___children___children___children'
  | 'childStrapiUsesContent___children___internal___content'
  | 'childStrapiUsesContent___children___internal___contentDigest'
  | 'childStrapiUsesContent___children___internal___description'
  | 'childStrapiUsesContent___children___internal___fieldOwners'
  | 'childStrapiUsesContent___children___internal___ignoreType'
  | 'childStrapiUsesContent___children___internal___mediaType'
  | 'childStrapiUsesContent___children___internal___owner'
  | 'childStrapiUsesContent___children___internal___type'
  | 'childStrapiUsesContent___internal___content'
  | 'childStrapiUsesContent___internal___contentDigest'
  | 'childStrapiUsesContent___internal___description'
  | 'childStrapiUsesContent___internal___fieldOwners'
  | 'childStrapiUsesContent___internal___ignoreType'
  | 'childStrapiUsesContent___internal___mediaType'
  | 'childStrapiUsesContent___internal___owner'
  | 'childStrapiUsesContent___internal___type'
  | 'childStrapiUsesContent___childMdx___rawBody'
  | 'childStrapiUsesContent___childMdx___fileAbsolutePath'
  | 'childStrapiUsesContent___childMdx___frontmatter___title'
  | 'childStrapiUsesContent___childMdx___slug'
  | 'childStrapiUsesContent___childMdx___body'
  | 'childStrapiUsesContent___childMdx___excerpt'
  | 'childStrapiUsesContent___childMdx___headings'
  | 'childStrapiUsesContent___childMdx___headings___value'
  | 'childStrapiUsesContent___childMdx___headings___depth'
  | 'childStrapiUsesContent___childMdx___html'
  | 'childStrapiUsesContent___childMdx___mdxAST'
  | 'childStrapiUsesContent___childMdx___tableOfContents'
  | 'childStrapiUsesContent___childMdx___timeToRead'
  | 'childStrapiUsesContent___childMdx___wordCount___paragraphs'
  | 'childStrapiUsesContent___childMdx___wordCount___sentences'
  | 'childStrapiUsesContent___childMdx___wordCount___words'
  | 'childStrapiUsesContent___childMdx___id'
  | 'childStrapiUsesContent___childMdx___parent___id'
  | 'childStrapiUsesContent___childMdx___parent___children'
  | 'childStrapiUsesContent___childMdx___children'
  | 'childStrapiUsesContent___childMdx___children___id'
  | 'childStrapiUsesContent___childMdx___children___children'
  | 'childStrapiUsesContent___childMdx___internal___content'
  | 'childStrapiUsesContent___childMdx___internal___contentDigest'
  | 'childStrapiUsesContent___childMdx___internal___description'
  | 'childStrapiUsesContent___childMdx___internal___fieldOwners'
  | 'childStrapiUsesContent___childMdx___internal___ignoreType'
  | 'childStrapiUsesContent___childMdx___internal___mediaType'
  | 'childStrapiUsesContent___childMdx___internal___owner'
  | 'childStrapiUsesContent___childMdx___internal___type';

export type StrapiUsesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  childStrapiUsesContent?: Maybe<StrapiUsesContentFilterInput>;
};

export type StrapiUsesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUsesEdge>;
  nodes: Array<StrapiUses>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiUsesSortInput = {
  fields?: Maybe<Array<Maybe<StrapiUsesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
