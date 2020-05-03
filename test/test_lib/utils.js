const Assert = require('assert');
const BN = require('bn.js');

const web3 = require('./web3.js');

function Utils() {}

function assertExpectedMessage(message, error) {
  if (message !== undefined) {
    assert(
      error.message.search(message) > -1,
      `The contract was expected to error including "${message}", but instead: "${
        error.message
      }"`,
    );
  }
}

Utils.prototype = {
  AccountProvider: class AccountProvider {
    constructor(accounts) {
      this.accounts = accounts;
      this.index = 0;
    }

    get() {
      assert(this.index < this.accounts.length);
      const account = this.accounts[this.index];
      this.index += 1;
      return account;
    }
  },

  expectRevert: async (promise, expectedMessage) => {
    try {
      await promise;
    } catch (error) {
      assert(
        error.message.search('revert') > -1,
        `The contract should revert. Instead: ${error.message}`,
      );

      assertExpectedMessage(expectedMessage, error);
      return;
    }

    assert(false, `Did not revert with expected error message: ${expectedMessage}`);
  },

  ZERO_BYTES32:
    '0x0000000000000000000000000000000000000000000000000000000000000000',

  ZERO_BYTES20:
    '0x0000000000000000000000000000000000000000',

  NULL_ADDRESS: '0x0000000000000000000000000000000000000000',

  SENTINEL_ADDRESS: '0x0000000000000000000000000000000000000001',

  MAX_UINT256: new BN(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ),
};

module.exports = new Utils();
