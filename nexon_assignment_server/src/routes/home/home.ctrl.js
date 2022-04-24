"use strict";

const output = {
  home: (req, res)  => {
    res.render("home/index");
  },
  summary1: (req, res)  => {
    res.render("home/summary1");
  },
  byservice1: (req, res)  => {
    res.render("home/byservice1");
  },
  interservice1: (req, res)  => {
    res.render("home/interservice1");
  },
  interservice2: (req, res)  => {
    res.render("home/interservice2");
  },
  user1: (req, res)  => {
    res.render("home/user1");
  },
};

module.exports = {
    output,
};