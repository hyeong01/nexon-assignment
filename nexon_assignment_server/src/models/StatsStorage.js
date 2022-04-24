"use strict";

const fs = require('fs').promises;

class StatsStorage {
  static getInfo(data, col, id) {
    const table = JSON.parse(data);
    return table[col][id];
  }
  static getCall(col, id) {
    return fs.readFile("./src/databases/stats.json")
      .then((data) => {
        return this.getInfo(data, col, id)
      })
      .catch(console.error);
  }
}

module.exports = StatsStorage;