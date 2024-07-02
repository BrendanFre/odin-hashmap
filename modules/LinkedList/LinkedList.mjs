import Node from "./Node.mjs";

export default function LinkedList(k, v, n = null) {
  let node = {};
  node[k] = v;
  node["next"] = n;

  const get = (key) => {
    return aGet(key, node);
  };

  const set = (key, value) => {
    return aSet(key, value, node);
  };

  return { node, get, set };
}

const aGet = (k, node) => {
  if (Object.hasOwn(node, k)) {
    return node[k];
  } else if (node["next"] == null) {
    return false;
  } else return aGet(k, node["next"]);
};

const aSet = (k, v, node) => {
  if (k in node) {
    node[k] = v;
    return node
  } else if (node["next"] != null) {
    return aSet(k, v, node["next"]);
  } else {
    return (node = Node(k, v));
  }
};
