'use strict';

const chai = require('chai');
const supertest = require('supertest');
const app = require('../app.js');

const should = chai.should();
const api = supertest(app);

describe('Canary test', () => {
  it('Five should be five', () => {
    const five = 5;

    five.should.be.equal(five);
  });
});
