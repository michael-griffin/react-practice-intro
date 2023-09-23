// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists,
// and returns it. Otherwise returns undefined.

function choice(items){
  let randSelect = Math.floor(Math.random() * items.length);
  return items[randSelect];
}

function remove(items, item){
  let firstMatch = items.indexOf(item);
  return items.splice(firstMatch, 1)[0];
}

export {choice, remove};