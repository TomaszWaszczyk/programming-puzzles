class TreeNode {
  constructor(x) {
    self.val = x
    self.left = None
    self.right = None
  }
}


function constructBinaryTreeFromList(lst) {
  if (lst.any((x) => (x === null || typeof x === 'number')){
    console.log('Illegaly formed list:', lst)
    return
  }

  if (!lst.length) {
    return
  }

  const head = TreeNode(lst.pop(0))
//     current_leafs = [head, ]
//     future_leafs = []
//     while len(lst) > 0:
//         while len(current_leafs) > 0:
//             node = current_leafs.pop(0)
 
//             if len(lst) > 0:
//                 node.left = TreeNode(lst.pop(0))
//                 if node.left.val is not None:
//                     future_leafs.append(node.left)
//             else:
//                 break
 
//             if len(lst) > 0:
//                 node.right = TreeNode(lst.pop(0))
//                 if node.right.val is not None:
//                     future_leafs.append(node.right)
//             else:
//                 break
 
//         current_leafs = future_leafs
//         future_leafs = []
 
//     return head
}


/* 
Your previous Python 3 content is preserved below:

#Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
#For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
#    1
#   / \
#  2   2
# / \ / \
#3  4 4  3
# 
#But the following [1,2,2,None,3,None,3] is not:
#    1
#   / \
#  2   2
#   \   \
#   3    3
 

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
 
# Facilities to construct trees:
def construct_binary_tree_from_list(lst):
    if not all(map(lambda x: x is None or isinstance(x, int), lst)):
        print("Illegaly formed list: {}".format(lst))
        return None
 
    if len(lst) == 0:
        return None
 
    head = TreeNode(lst.pop(0))
    current_leafs = [head, ]
    future_leafs = []
    while len(lst) > 0:
        while len(current_leafs) > 0:
            node = current_leafs.pop(0)
 
            if len(lst) > 0:
                node.left = TreeNode(lst.pop(0))
                if node.left.val is not None:
                    future_leafs.append(node.left)
            else:
                break
 
            if len(lst) > 0:
                node.right = TreeNode(lst.pop(0))
                if node.right.val is not None:
                    future_leafs.append(node.right)
            else:
                break
 
        current_leafs = future_leafs
        future_leafs = []
 
    return head
 
 
def print_binary_tree(head):
    if head is None or head.val is None:
        print("(*)")
        return
    else:
        print("({})".format(head.val))
 
    current_layer = [head.left, head.right]
    while True:
        if all(map(lambda x: x is None, current_layer)):
            print("")
            return
         
        future_layer = []
        while len(current_layer) > 0:
            lv = '*'
            l = current_layer.pop(0)
            if l is None or l.val is None:
                future_layer.append(None)
                future_layer.append(None)
            else:
                future_layer.append(l.left)
                future_layer.append(l.right)
                lv = l.val
            rv = '*'
            r = current_layer.pop(0)
            if r is None or r.val is None:
                future_layer.append(None)
                future_layer.append(None)
            else:
                future_layer.append(r.left)
                future_layer.append(r.right)
                rv = r.val
            print("({})({})|".format(lv, rv), end="")
        print("")
        current_layer = future_layer
 
 
# examples
# print_binary_tree(construct_binary_tree_from_list([1,None,2]))
# print_binary_tree(construct_binary_tree_from_list([1,2,2,3,4,4,3]))
# print_binary_tree(construct_binary_tree_from_list([1,2,2,None,3,None,3]))
 
  
def is_symmetric(self, root: TreeNode) -> bool:
    pass 
 */