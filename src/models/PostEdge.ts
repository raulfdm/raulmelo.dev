import { types } from 'mobx-state-tree';

import { Node } from './Node';

export const PostEdge = types.model({ node: Node });
