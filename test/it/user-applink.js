const expect = require('chai').expect;
const okta = require('../../src');
const Collection = require('../../src/collection');
const utils = require('../utils');
const getMockUser = require('./mocks/user-without-credentials');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-applink`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User applink API', () => {
  describe('List applinks', () => {
    let user;
    beforeEach(async () => {
      user = await client.createUser(getMockUser(), { activate: false });
    });
    afterEach(async () => {
      await utils.cleanupUser(client, user);
    });

    // Only test on if Collection is returned, since no api has been provided to assign applink to user
    it('should return a Collection', async () => {
      const applinks = await user.listAppLinks();
      expect(applinks).to.be.instanceOf(Collection);
    });
  });
});
