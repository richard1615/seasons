// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    mapping(uint256 => string) private _tokenPrompts;
    mapping(uint256 => string) private _tokenCId;

    string private _baseFileURL = "https://moccasin-envious-quelea-166.mypinata.cloud/ipfs/"; // Default base URL

    constructor() ERC721("MyNFT", "MNFT") {}

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseFileURL;
    }

    function mint(address to, uint256 tokenId, string memory prompt, string memory tokenCid) external onlyOwner {
        _mint(to, tokenId);
        _tokenPrompts[tokenId] = prompt;
        _tokenCId[tokenId] = tokenCid;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        return _tokenPrompts[tokenId];
    }

    function setBaseFileURL(string memory newBaseURL) external onlyOwner {
        _baseFileURL = newBaseURL;
    }

    function fileURL(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        string memory base = _baseURI();
        string memory tokenCid = _tokenCId[tokenId];
        return string(abi.encodePacked(base, tokenCid));
    }
}
