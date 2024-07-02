export default function Node(key, value, next = null) {
  let thisNode = {};
  thisNode[key] = value;
  thisNode["next"] = next;

  const Get = (key, node = thisNode) => {
    if (node != Node) {
      return "not a node";
    }
    if (node[key] != undefined) {
      return node[key];
    } else return Get(key, node["next"]);
  };

  return { thisNode, Get };
}
