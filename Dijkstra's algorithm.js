"use strict";

// Initialize the graph, costs, parents, and processed set
const graph = new Map();
const costs = new Map();
const parents = new Map();
const processed = new Set();

// Setting up the graph
graph.set(
  "start",
  new Map([
    ["A", 6],
    ["B", 2],
  ])
);
graph.set("A", new Map([["FIN", 1]]));
graph.set(
  "B",
  new Map([
    ["A", 3],
    ["FIN", 5],
  ])
);
graph.set("FIN", new Map());

// Initial costs from the start node
costs.set("A", 6);
costs.set("B", 2);
costs.set("FIN", Infinity);

// Setting up parents mapping
parents.set("A", "start");
parents.set("B", "start");
parents.set("FIN", null);

// Function to find the node with the lowest cost that has not been processed
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const [node, cost] of costs) {
    if (cost < lowestCost && !processed.has(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

// Dijkstra's algorithm implementation
let node = findLowestCostNode(costs);

while (node !== null) {
  let cost = costs.get(node);
  let neighbors = graph.get(node);

  for (let [neighbor, neighborCost] of neighbors) {
    const newCost = cost + neighborCost;
    if (costs.get(neighbor) > newCost) {
      costs.set(neighbor, newCost);
      parents.set(neighbor, node);
    }
  }
  processed.add(node);
  node = findLowestCostNode(costs);
}

// Displaying the final costs and paths to reach each node
for (let node of costs.keys()) {
  let cost = costs.get(node);
  let path = [];
  for (let parent = parents.get(node); parent; parent = parents.get(parent)) {
    path.push(parent);
  }
  console.log(
    `Cost to reach ${node}: ${cost}, Path: ${path
      .reverse()
      .join(" -> ")} -> ${node}`
  );
}
