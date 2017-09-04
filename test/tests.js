const assert = require('assert');
const cityTimezones = require('../index.js');

describe('City lookup tests', function() {
    it('finding Chicago', function() {
      let city = cityTimezones.lookupViaCity('Chicago')
      console.log('found Chicago by name: ', city)
      assert.equal(41.82999066, city[0].lat);
    });
    it('return empty for non matching city', function() {
      let city = cityTimezones.lookupViaCity('Foobar')
      assert.deepEqual([], city);
    })
    it('return multiple matches', function() {
      let city = cityTimezones.lookupViaCity('Springfield')
      console.log(city.length + ' matches found for Springfield')
      assert(city.length > 1, city);
    });
});

describe('City filter tests', function() {
    it('finding Chicago', function() {
      let city = cityTimezones.filter('Chicago')
      console.log('found Chicago by name: ', city)
      assert.equal(41.82999066, city[0].lat);
    });
    it('return empty for non matching city', function() {
      let city = cityTimezones.filter('Foobar')
      assert.deepEqual([], city);
    })
    it('return multiple matches', function() {
      let city = cityTimezones.filter('echi')
      console.log(city.length + ' matches found for echi')
      assert(city.length == 2, city);
    });
});
