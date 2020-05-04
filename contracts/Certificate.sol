pragma solidity >=0.5.0;

contract Certificate {

    /** Struct */

    struct Cert {
        string userName;
        string id;
        string courseName;
        string issuingAuthority;
        uint256 issueDate;
        address user;
        bool isAdded;
    }


    /** Mappings */

    /** Mapping for certificates */
    mapping (address => mapping(string => Cert)) public certificates;


    /** Public functions */

    function addCertificate(
        string memory _userName,
        string memory _id,
        string memory _courseName,
        string memory _issuingAuthority,
        uint256 _issueDate,
        address _user
    ) public {
        require(
            certificates[_user][_id].isAdded == false,
            "Certificate must not be already added."
        );

        require(
            bytes(certificates[_user][_id].id).length == 0,
            "Certificate id must be empty."
        );

        Cert memory cert = Cert({
            userName: _userName,
            id: _id,
            courseName: _courseName,
            issuingAuthority: _issuingAuthority,
            issueDate: _issueDate,
            user: _user,
            isAdded: true
        });

        certificates[_user][_id] = cert;
    }

    function getCertificate(address _user, string memory _id)
        public
        view
        returns(string memory, string memory, string memory, uint) {
            require(
                _user != address(0),
                "User address must not be empty"
            );
            require(
                bytes(_id).length == 0,
                "Certificate id must not be empty."
            );

            return (
                certificates[_user][_id].userName,
                certificates[_user][_id].issuingAuthority,
                certificates[_user][_id].courseName,
                certificates[_user][_id].issueDate
            );
    }
}
