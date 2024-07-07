export default function Node(key, value, next = null) {
  let node = {}
  node[key] = value
  node['next'] = next

  return node
}