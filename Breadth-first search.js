"use strict";
import { Queue } from "./Queue.js";

const graph = new Map();

const person_is_seller = (name) => name[name.length - 1] === "m";
const addFriendsToQueue = (name, graph, queue) => {
  graph.get(name)?.forEach((p) => {
    queue.enqueue(p);
  });
};

const search = function (name) {
  const search_queue = new Queue();
  const searched = new Set();
  addFriendsToQueue(name, graph, search_queue);

  while (!search_queue.isEmpty) {
    const person = search_queue.dequeue();
    if (searched.has(person)) continue;
    if (person_is_seller(person)) {
      console.log(`${person} is mango seller.`);
      return true;
    }
    addFriendsToQueue(person, graph, search_queue);
    searched.add(person);
  }
  return false;
};

graph.set("you", ["alice", "bob", "claire"]);
graph.set("alice", ["peggy"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anuj", []);
graph.set("peggy", []);
graph.set("thom", []);
graph.set("jonny", []);
const result = search("you");
console.log(result);
