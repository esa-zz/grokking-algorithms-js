"use strict";

function intersection(setA, setB) {
  return new Set([...setA].filter((item) => setB.has(item)));
}

function difference(setA, setB) {
  return new Set([...setA].filter((item) => !setB.has(item)));
}

let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const stations = new Map();
stations.set("kone", new Set(["id", "nv", "ut"]));
stations.set("ktwo", new Set(["wa", "id", "mt"]));
stations.set("kthree", new Set(["or", "nv", "ca"]));
stations.set("kfour", new Set(["nv", "ut"]));
stations.set("kfive", new Set(["ca", "az"]));
const final_stations = new Set();

while (states_needed.size > 0) {
  let best_station = null;
  let states_covered = new Set();
  for (let [station, states] of stations) {
    const covered = intersection(states, states_needed);
    if (covered.size > states_covered.size) {
      best_station = station;
      states_covered = covered;
    }
  }
  states_needed = difference(states_needed, states_covered);
  final_stations.add(best_station);
}

console.log(final_stations);
