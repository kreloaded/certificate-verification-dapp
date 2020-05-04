const { AccountProvider } = require('../test_lib/utils');

const Certificate = artifacts.require('Certificate');

contract('Certificate::addCertificate', async (accounts) => {
  const accountProvider = new AccountProvider(accounts);
  const user = accountProvider.get();
  let certificate;
  let param;

  beforeEach(async () => {
    certificate = await Certificate.new();
    param = {
      id: 'ab1cd2',
      userName: 'XYZ',
      issuingAuthority: 'PQR',
      courseName: 'LMN',
      issueDate: Date.parse('Tue Feb 23 2016'),
      user: user,
    };

    await certificate.addCertificate(
      param.userName,
      param.id,
      param.courseName,
      param.issuingAuthority,
      param.issueDate,
      param.user,
      { from: param.user },
    );
  });

  contract('Positive Tests', async () => {
    it('should successfully get the certificate', async () => {
      const certificateDetails = await certificate.getCertificate(
        param.user,
        param.id,
        { from: param.user },
      );

      assert.strictEqual(
        certificateDetails[0],
        param.userName,
        `User name doesn't match.`,
      );
    });
  });
});
