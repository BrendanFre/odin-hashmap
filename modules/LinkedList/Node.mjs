export default function Node(key, value, next = null) {
  let thisNode = {};
  thisNode[key] = value;
  thisNode["next"] = next;
  return thisNode;
}
