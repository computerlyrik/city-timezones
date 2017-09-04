"use strict";
const _ = require('lodash')
const cityMapping = require('./data/cityMap.json')

function lookupViaCity(city) {
  const cityLookup = _.filter(cityMapping, function (o) { return o.city === city })
  if (cityLookup && cityLookup.length > 0) {
    return cityLookup
  } else {
    return []
  }
}

function filter(city) {
  var regex = new RegExp('.*' + city + '.*', 'i')
  const cityLookup = _.filter(cityMapping, function (o) { return o.city.search(regex) != -1 })
  if (cityLookup && cityLookup.length > 0) {
    return cityLookup
  } else {
    return []
  }
}

module.exports = {
  lookupViaCity,
  filter
};
