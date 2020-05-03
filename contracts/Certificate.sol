pragma solidity >=0.5.0;

contract Certificate {

    /** Struct */

    struct Cert {
        string userName;
        string issuingAuthority;
        string courseName;
        uint256 issueDate;
        address user;
        bool isAdded;
    }


    /** Mappings */

    /** Mapping for certificates */
    mapping (address => Cert) public certificates;


    /** Public functions */

    function addCertificate(
        string memory _userName,
        string memory _issuingAuthority,
        string memory _courseName,
        uint256 _issueDate,
        address _user
    ) public {
        require(
            certificates[_user].isAdded == false,
            "Certificate must not be already added."
        );

        Cert memory cert = Cert({
            userName: _userName,
            issuingAuthority: _issuingAuthority,
            courseName: _courseName,
            issueDate: _issueDate,
            user: _user,
            isAdded: true
        });

        certificates[_user] = cert;
    }

    function getCertificate(address _user)
        public
        view
        returns(string memory, string memory, string memory, uint) {
            require(
                _user != address(0),
                "User address must not be empty"
            );

            return (
                certificates[_user].userName,
                certificates[_user].issuingAuthority,
                certificates[_user].courseName,
                certificates[_user].issueDate
            );
    }
}
