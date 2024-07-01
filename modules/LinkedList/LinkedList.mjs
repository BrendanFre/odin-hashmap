export default function LinkedList(k, v, n = null) {
  let node = {}
  node[k] = v
  node['next'] = n

  const get = (key) => {
    return aGet(key, node)
    
  }

  return { node, get };
}

const aGet = (k, node) => {
  if(Object.hasOwn(node, k)) {
    return node[k]
  } else if(node['next'] == null) {
    return false
  } else return aGet(k, node['next'])
  
};
