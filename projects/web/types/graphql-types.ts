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
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
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
  | 'blksize'
  | 'blocks'
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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
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
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMdx?: Maybe<Mdx>;
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
  | 'publicURL'
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
  | 'internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___subtitle'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___series___id'
  | 'childMdx___frontmatter___series___index'
  | 'childMdx___frontmatter___series___copy'
  | 'childMdx___frontmatter___image_caption'
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
  | 'childMdx___fields___slug'
  | 'childMdx___fields___lang'
  | 'childMdx___fields___postFolderName'
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
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
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
  fields?: Maybe<MdxFields>;
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

export type MdxFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  postFolderName?: Maybe<Scalars['String']>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___subtitle'
  | 'frontmatter___date'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___image___childMdx___rawBody'
  | 'frontmatter___image___childMdx___fileAbsolutePath'
  | 'frontmatter___image___childMdx___slug'
  | 'frontmatter___image___childMdx___body'
  | 'frontmatter___image___childMdx___excerpt'
  | 'frontmatter___image___childMdx___headings'
  | 'frontmatter___image___childMdx___html'
  | 'frontmatter___image___childMdx___mdxAST'
  | 'frontmatter___image___childMdx___tableOfContents'
  | 'frontmatter___image___childMdx___timeToRead'
  | 'frontmatter___image___childMdx___id'
  | 'frontmatter___image___childMdx___children'
  | 'frontmatter___tags'
  | 'frontmatter___description'
  | 'frontmatter___series___id'
  | 'frontmatter___series___index'
  | 'frontmatter___series___copy'
  | 'frontmatter___image_caption'
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
  | 'fields___slug'
  | 'fields___lang'
  | 'fields___postFolderName'
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

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  postFolderName?: Maybe<StringQueryOperatorInput>;
};

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
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  series?: Maybe<MdxFrontmatterSeries>;
  image_caption?: Maybe<Scalars['String']>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<MdxFrontmatterSeriesFilterInput>;
  image_caption?: Maybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  copy?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
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
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
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
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
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


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
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
  fields?: Maybe<MdxFieldsFilterInput>;
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
  created_by?: Maybe<StrapiSiteCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSiteUpdated_ByFilterInput>;
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
  created_by?: Maybe<StrapiSocialCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSocialUpdated_ByFilterInput>;
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
  created_by?: Maybe<StrapiPersonalInformationCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiPersonalInformationUpdated_ByFilterInput>;
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
  created_by?: Maybe<StrapiCvCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiCvUpdated_ByFilterInput>;
  summary?: Maybe<StringQueryOperatorInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiCvArgs = {
  filter?: Maybe<StrapiCvFilterInput>;
  sort?: Maybe<StrapiCvSortInput>;
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
  created_by?: Maybe<StrapiUsesCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiUsesUpdated_ByFilterInput>;
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
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
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
  | 'port'
  | 'host'
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
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
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
  post?: Maybe<SitePageContextPost>;
  slug?: Maybe<Scalars['String']>;
  series?: Maybe<SitePageContextSeries>;
  translations?: Maybe<Array<Maybe<SitePageContextTranslations>>>;
  postEdges?: Maybe<Array<Maybe<SitePageContextPostEdges>>>;
  tag?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  post?: Maybe<SitePageContextPostFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<SitePageContextSeriesFilterInput>;
  translations?: Maybe<SitePageContextTranslationsFilterListInput>;
  postEdges?: Maybe<SitePageContextPostEdgesFilterListInput>;
  tag?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPost = {
  node?: Maybe<SitePageContextPostNode>;
};

export type SitePageContextPostEdges = {
  node?: Maybe<SitePageContextPostEdgesNode>;
};

export type SitePageContextPostEdgesFilterInput = {
  node?: Maybe<SitePageContextPostEdgesNodeFilterInput>;
};

export type SitePageContextPostEdgesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostEdgesFilterInput>;
};

export type SitePageContextPostEdgesNode = {
  id?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  frontmatter?: Maybe<SitePageContextPostEdgesNodeFrontmatter>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<SitePageContextPostEdgesNodeFields>;
};

export type SitePageContextPostEdgesNodeFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  postFolderName?: Maybe<Scalars['String']>;
};

export type SitePageContextPostEdgesNodeFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  postFolderName?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostEdgesNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextPostEdgesNodeFrontmatterFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageContextPostEdgesNodeFieldsFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatter = {
  series?: Maybe<SitePageContextPostEdgesNodeFrontmatterSeries>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<SitePageContextPostEdgesNodeFrontmatterImage>;
};

export type SitePageContextPostEdgesNodeFrontmatterFilterInput = {
  series?: Maybe<SitePageContextPostEdgesNodeFrontmatterSeriesFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImage = {
  childImageSharp?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharp>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharp = {
  fluid?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluid>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFilterInput = {
  fluid?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageFilterInput = {
  childImageSharp?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPostEdgesNodeFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostFilterInput = {
  node?: Maybe<SitePageContextPostNodeFilterInput>;
};

export type SitePageContextPostNode = {
  id?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  frontmatter?: Maybe<SitePageContextPostNodeFrontmatter>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<SitePageContextPostNodeFields>;
  nonGraphQLData?: Maybe<SitePageContextPostNodeNonGraphQlData>;
};

export type SitePageContextPostNodeFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  postFolderName?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  postFolderName?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextPostNodeFrontmatterFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageContextPostNodeFieldsFilterInput>;
  nonGraphQLData?: Maybe<SitePageContextPostNodeNonGraphQlDataFilterInput>;
};

export type SitePageContextPostNodeFrontmatter = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  series?: Maybe<SitePageContextPostNodeFrontmatterSeries>;
  image_caption?: Maybe<Scalars['String']>;
  image?: Maybe<SitePageContextPostNodeFrontmatterImage>;
};

export type SitePageContextPostNodeFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<SitePageContextPostNodeFrontmatterSeriesFilterInput>;
  image_caption?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SitePageContextPostNodeFrontmatterImageFilterInput>;
};

export type SitePageContextPostNodeFrontmatterImage = {
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharp>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharp = {
  fluid?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFluid>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFilterInput = {
  fluid?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostNodeFrontmatterImageFilterInput = {
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFilterInput>;
};

export type SitePageContextPostNodeFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  copy?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeNonGraphQlData = {
  translations?: Maybe<Array<Maybe<SitePageContextPostNodeNonGraphQlDataTranslations>>>;
};

export type SitePageContextPostNodeNonGraphQlDataFilterInput = {
  translations?: Maybe<SitePageContextPostNodeNonGraphQlDataTranslationsFilterListInput>;
};

export type SitePageContextPostNodeNonGraphQlDataTranslations = {
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeNonGraphQlDataTranslationsFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeNonGraphQlDataTranslationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeNonGraphQlDataTranslationsFilterInput>;
};

export type SitePageContextSeries = {
  _0?: Maybe<SitePageContextSeries_0>;
  _1?: Maybe<SitePageContextSeries_1>;
  _2?: Maybe<SitePageContextSeries_2>;
  _3?: Maybe<SitePageContextSeries_3>;
  _4?: Maybe<SitePageContextSeries_4>;
  _5?: Maybe<SitePageContextSeries_5>;
  _6?: Maybe<SitePageContextSeries_6>;
  _7?: Maybe<SitePageContextSeries_7>;
  _8?: Maybe<SitePageContextSeries_8>;
  _9?: Maybe<SitePageContextSeries_9>;
  _10?: Maybe<SitePageContextSeries_10>;
  _11?: Maybe<SitePageContextSeries_11>;
};

export type SitePageContextSeries_0 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_0FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_1 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_10 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_10FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_11 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_11FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_1FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_2 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_2FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_3 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_3FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_4 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_4FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_5 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_5FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_6 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_6FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_7 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_7FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_8 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_8FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_9 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_9FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeriesFilterInput = {
  _0?: Maybe<SitePageContextSeries_0FilterInput>;
  _1?: Maybe<SitePageContextSeries_1FilterInput>;
  _2?: Maybe<SitePageContextSeries_2FilterInput>;
  _3?: Maybe<SitePageContextSeries_3FilterInput>;
  _4?: Maybe<SitePageContextSeries_4FilterInput>;
  _5?: Maybe<SitePageContextSeries_5FilterInput>;
  _6?: Maybe<SitePageContextSeries_6FilterInput>;
  _7?: Maybe<SitePageContextSeries_7FilterInput>;
  _8?: Maybe<SitePageContextSeries_8FilterInput>;
  _9?: Maybe<SitePageContextSeries_9FilterInput>;
  _10?: Maybe<SitePageContextSeries_10FilterInput>;
  _11?: Maybe<SitePageContextSeries_11FilterInput>;
};

export type SitePageContextTranslations = {
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextTranslationsFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextTranslationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextTranslationsFilterInput>;
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
  | 'context___post___node___id'
  | 'context___post___node___body'
  | 'context___post___node___excerpt'
  | 'context___post___node___timeToRead'
  | 'context___post___node___fileAbsolutePath'
  | 'context___slug'
  | 'context___series____0___subtitle'
  | 'context___series____0___copy'
  | 'context___series____0___index'
  | 'context___series____0___uri'
  | 'context___series____1___subtitle'
  | 'context___series____1___copy'
  | 'context___series____1___index'
  | 'context___series____1___uri'
  | 'context___series____2___subtitle'
  | 'context___series____2___copy'
  | 'context___series____2___index'
  | 'context___series____2___uri'
  | 'context___series____3___subtitle'
  | 'context___series____3___copy'
  | 'context___series____3___index'
  | 'context___series____3___uri'
  | 'context___series____4___subtitle'
  | 'context___series____4___copy'
  | 'context___series____4___index'
  | 'context___series____4___uri'
  | 'context___series____5___subtitle'
  | 'context___series____5___copy'
  | 'context___series____5___index'
  | 'context___series____5___uri'
  | 'context___series____6___subtitle'
  | 'context___series____6___copy'
  | 'context___series____6___index'
  | 'context___series____6___uri'
  | 'context___series____7___subtitle'
  | 'context___series____7___copy'
  | 'context___series____7___index'
  | 'context___series____7___uri'
  | 'context___series____8___subtitle'
  | 'context___series____8___copy'
  | 'context___series____8___index'
  | 'context___series____8___uri'
  | 'context___series____9___subtitle'
  | 'context___series____9___copy'
  | 'context___series____9___index'
  | 'context___series____9___uri'
  | 'context___series____10___subtitle'
  | 'context___series____10___copy'
  | 'context___series____10___index'
  | 'context___series____10___uri'
  | 'context___series____11___subtitle'
  | 'context___series____11___copy'
  | 'context___series____11___index'
  | 'context___series____11___uri'
  | 'context___translations'
  | 'context___translations___lang'
  | 'context___translations___slug'
  | 'context___postEdges'
  | 'context___postEdges___node___id'
  | 'context___postEdges___node___timeToRead'
  | 'context___postEdges___node___fileAbsolutePath'
  | 'context___tag'
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
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
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
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
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
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___contentTypes'
  | 'pluginCreator___pluginOptions___singleTypes'
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
  | 'pluginOptions___query'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
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
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
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
  | 'pluginOptions___apiURL'
  | 'pluginOptions___contentTypes'
  | 'pluginOptions___singleTypes'
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
  query?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  apiURL?: Maybe<Scalars['String']>;
  contentTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  singleTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
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
};

export type SitePluginPluginOptionsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
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
  apiURL?: Maybe<StringQueryOperatorInput>;
  contentTypes?: Maybe<StringQueryOperatorInput>;
  singleTypes?: Maybe<StringQueryOperatorInput>;
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

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  created_by?: Maybe<StrapiCvCreated_By>;
  updated_by?: Maybe<StrapiCvUpdated_By>;
  summary?: Maybe<Scalars['String']>;
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

export type StrapiCvCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'summary'
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
  created_by?: Maybe<StrapiCvCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiCvUpdated_ByFilterInput>;
  summary?: Maybe<StringQueryOperatorInput>;
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

export type StrapiCvUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCvUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCvUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCvUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  created_by?: Maybe<StrapiPersonalInformationCreated_By>;
  updated_by?: Maybe<StrapiPersonalInformationUpdated_By>;
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

export type StrapiPersonalInformationCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPersonalInformationCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
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
  | 'profile_pic___publicURL'
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
  | 'profile_pic___childMdx___rawBody'
  | 'profile_pic___childMdx___fileAbsolutePath'
  | 'profile_pic___childMdx___frontmatter___title'
  | 'profile_pic___childMdx___frontmatter___subtitle'
  | 'profile_pic___childMdx___frontmatter___date'
  | 'profile_pic___childMdx___frontmatter___tags'
  | 'profile_pic___childMdx___frontmatter___description'
  | 'profile_pic___childMdx___frontmatter___image_caption'
  | 'profile_pic___childMdx___slug'
  | 'profile_pic___childMdx___body'
  | 'profile_pic___childMdx___excerpt'
  | 'profile_pic___childMdx___headings'
  | 'profile_pic___childMdx___headings___value'
  | 'profile_pic___childMdx___headings___depth'
  | 'profile_pic___childMdx___html'
  | 'profile_pic___childMdx___mdxAST'
  | 'profile_pic___childMdx___tableOfContents'
  | 'profile_pic___childMdx___timeToRead'
  | 'profile_pic___childMdx___wordCount___paragraphs'
  | 'profile_pic___childMdx___wordCount___sentences'
  | 'profile_pic___childMdx___wordCount___words'
  | 'profile_pic___childMdx___fields___slug'
  | 'profile_pic___childMdx___fields___lang'
  | 'profile_pic___childMdx___fields___postFolderName'
  | 'profile_pic___childMdx___id'
  | 'profile_pic___childMdx___parent___id'
  | 'profile_pic___childMdx___parent___children'
  | 'profile_pic___childMdx___children'
  | 'profile_pic___childMdx___children___id'
  | 'profile_pic___childMdx___children___children'
  | 'profile_pic___childMdx___internal___content'
  | 'profile_pic___childMdx___internal___contentDigest'
  | 'profile_pic___childMdx___internal___description'
  | 'profile_pic___childMdx___internal___fieldOwners'
  | 'profile_pic___childMdx___internal___ignoreType'
  | 'profile_pic___childMdx___internal___mediaType'
  | 'profile_pic___childMdx___internal___owner'
  | 'profile_pic___childMdx___internal___type'
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
  created_by?: Maybe<StrapiPersonalInformationCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiPersonalInformationUpdated_ByFilterInput>;
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

export type StrapiPersonalInformationUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPersonalInformationUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPersonalInformationUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSite = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<StrapiSiteCreated_By>;
  updated_by?: Maybe<StrapiSiteUpdated_By>;
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

export type StrapiSiteCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSiteCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSiteCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSiteCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'strapiId';

export type StrapiSiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiSiteCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSiteUpdated_ByFilterInput>;
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

export type StrapiSiteUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSiteUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSiteUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSiteUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  created_by?: Maybe<StrapiSocialCreated_By>;
  updated_by?: Maybe<StrapiSocialUpdated_By>;
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

export type StrapiSocialCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
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
  created_by?: Maybe<StrapiSocialCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSocialUpdated_ByFilterInput>;
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

export type StrapiSocialUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSocialUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSocialUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSocialUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
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
  created_by?: Maybe<StrapiUsesCreated_By>;
  updated_by?: Maybe<StrapiUsesUpdated_By>;
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
  | 'childMdx___frontmatter___subtitle'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___series___id'
  | 'childMdx___frontmatter___series___index'
  | 'childMdx___frontmatter___series___copy'
  | 'childMdx___frontmatter___image_caption'
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
  | 'childMdx___fields___slug'
  | 'childMdx___fields___lang'
  | 'childMdx___fields___postFolderName'
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

export type StrapiUsesCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiUsesCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiUsesCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiUsesCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
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
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
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
  | 'childStrapiUsesContent___childMdx___frontmatter___subtitle'
  | 'childStrapiUsesContent___childMdx___frontmatter___date'
  | 'childStrapiUsesContent___childMdx___frontmatter___tags'
  | 'childStrapiUsesContent___childMdx___frontmatter___description'
  | 'childStrapiUsesContent___childMdx___frontmatter___image_caption'
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
  | 'childStrapiUsesContent___childMdx___fields___slug'
  | 'childStrapiUsesContent___childMdx___fields___lang'
  | 'childStrapiUsesContent___childMdx___fields___postFolderName'
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
  created_by?: Maybe<StrapiUsesCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiUsesUpdated_ByFilterInput>;
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

export type StrapiUsesUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiUsesUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiUsesUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiUsesUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
