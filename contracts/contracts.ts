export const contracts = {
  // 31337: {
  //   ZenMonController: {
  //     address: "0x057ef64e23666f000b34ae31332854acbd1c8544",
  //     abi: [
  //       {
  //         type: "constructor",
  //         inputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "DEFAULT_ADMIN_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "createMonster",
  //         inputs: [
  //           {
  //             name: "_name",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "_base",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "monsterId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "getRoleAdmin",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "grantRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "hasRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "items",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonItems",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "nft",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonNFT",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "purchaseBoost",
  //         inputs: [
  //           {
  //             name: "_id",
  //             type: "uint32",
  //             internalType: "uint32",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "payable",
  //       },
  //       {
  //         type: "function",
  //         name: "renounceRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "callerConfirmation",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "revokeRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "setItemsContract",
  //         inputs: [
  //           {
  //             name: "_itemsAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "setNFTContract",
  //         inputs: [
  //           {
  //             name: "_nftAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "setVaultContract",
  //         inputs: [
  //           {
  //             name: "_vaultAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "supportsInterface",
  //         inputs: [
  //           {
  //             name: "interfaceId",
  //             type: "bytes4",
  //             internalType: "bytes4",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "vault",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonVault",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "event",
  //         name: "RoleAdminChanged",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "previousAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "newAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleGranted",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleRevoked",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlBadConfirmation",
  //         inputs: [],
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlUnauthorizedAccount",
  //         inputs: [
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "neededRole",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   ZenMonNFT: {
  //     address: "0x261d8c5e9742e6f7f1076fa1f560894524e19cad",
  //     abi: [
  //       {
  //         type: "constructor",
  //         inputs: [
  //           {
  //             name: "_controller",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "CONTROLLER_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "DEFAULT_ADMIN_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "approve",
  //         inputs: [
  //           {
  //             name: "to",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "balanceOf",
  //         inputs: [
  //           {
  //             name: "owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getApproved",
  //         inputs: [
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getMonster",
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple",
  //             internalType: "struct Monster",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "name",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "base",
  //                 type: "uint16",
  //                 internalType: "uint16",
  //               },
  //               {
  //                 name: "status",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "live",
  //                 type: "bool",
  //                 internalType: "bool",
  //               },
  //               {
  //                 name: "energy",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "energyUpdated",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //               {
  //                 name: "mood",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "moodUpdated",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //               {
  //                 name: "accessories",
  //                 type: "uint32[]",
  //                 internalType: "uint32[]",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getRoleAdmin",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "grantRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "hasRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "isApprovedForAll",
  //         inputs: [
  //           {
  //             name: "owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "operator",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "mint",
  //         inputs: [
  //           {
  //             name: "_to",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_name",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "_base",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "monsters",
  //         inputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "id",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "name",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "base",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //           {
  //             name: "status",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //           {
  //             name: "live",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //           {
  //             name: "energy",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //           {
  //             name: "energyUpdated",
  //             type: "uint40",
  //             internalType: "uint40",
  //           },
  //           {
  //             name: "mood",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //           {
  //             name: "moodUpdated",
  //             type: "uint40",
  //             internalType: "uint40",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "name",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "string",
  //             internalType: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "ownerOf",
  //         inputs: [
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "renounceRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "callerConfirmation",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "revokeRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "safeTransferFrom",
  //         inputs: [
  //           {
  //             name: "from",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "to",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "safeTransferFrom",
  //         inputs: [
  //           {
  //             name: "from",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "to",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "data",
  //             type: "bytes",
  //             internalType: "bytes",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "setApprovalForAll",
  //         inputs: [
  //           {
  //             name: "operator",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "approved",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "supportsInterface",
  //         inputs: [
  //           {
  //             name: "interfaceId",
  //             type: "bytes4",
  //             internalType: "bytes4",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "symbol",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "string",
  //             internalType: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "tokenIds",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "tokenURI",
  //         inputs: [
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "string",
  //             internalType: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "transferFrom",
  //         inputs: [
  //           {
  //             name: "from",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "to",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "updateEnergy",
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_energy",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "updateMood",
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_mood",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "event",
  //         name: "Approval",
  //         inputs: [
  //           {
  //             name: "owner",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "approved",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             indexed: true,
  //             internalType: "uint256",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "ApprovalForAll",
  //         inputs: [
  //           {
  //             name: "owner",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "operator",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "approved",
  //             type: "bool",
  //             indexed: false,
  //             internalType: "bool",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleAdminChanged",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "previousAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "newAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleGranted",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleRevoked",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "Transfer",
  //         inputs: [
  //           {
  //             name: "from",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "to",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             indexed: true,
  //             internalType: "uint256",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlBadConfirmation",
  //         inputs: [],
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlUnauthorizedAccount",
  //         inputs: [
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "neededRole",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721IncorrectOwner",
  //         inputs: [
  //           {
  //             name: "sender",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InsufficientApproval",
  //         inputs: [
  //           {
  //             name: "operator",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InvalidApprover",
  //         inputs: [
  //           {
  //             name: "approver",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InvalidOperator",
  //         inputs: [
  //           {
  //             name: "operator",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InvalidOwner",
  //         inputs: [
  //           {
  //             name: "owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InvalidReceiver",
  //         inputs: [
  //           {
  //             name: "receiver",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721InvalidSender",
  //         inputs: [
  //           {
  //             name: "sender",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //       },
  //       {
  //         type: "error",
  //         name: "ERC721NonexistentToken",
  //         inputs: [
  //           {
  //             name: "tokenId",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   ZenMonItems: {
  //     address: "0xce3478a9e0167a6bc5716dc39dbbbfac38f27623",
  //     abi: [
  //       {
  //         type: "constructor",
  //         inputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "DEFAULT_ADMIN_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "createItem",
  //         inputs: [
  //           {
  //             name: "_id",
  //             type: "uint32",
  //             internalType: "uint32",
  //           },
  //           {
  //             name: "_name",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "_fee",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "_feeToken",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_feeTokenSymbol",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "_lock",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //           {
  //             name: "_itemType",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //           {
  //             name: "_itemBoost",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "getItem",
  //         inputs: [
  //           {
  //             name: "_id",
  //             type: "uint32",
  //             internalType: "uint32",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "item",
  //             type: "tuple",
  //             internalType: "struct SavingItem",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint32",
  //                 internalType: "uint32",
  //               },
  //               {
  //                 name: "name",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "fee",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "feeToken",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "feeTokenSymbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "lock",
  //                 type: "uint16",
  //                 internalType: "uint16",
  //               },
  //               {
  //                 name: "itemType",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "itemBoost",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getItems",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple[]",
  //             internalType: "struct SavingItem[]",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint32",
  //                 internalType: "uint32",
  //               },
  //               {
  //                 name: "name",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "fee",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "feeToken",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "feeTokenSymbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "lock",
  //                 type: "uint16",
  //                 internalType: "uint16",
  //               },
  //               {
  //                 name: "itemType",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "itemBoost",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getRoleAdmin",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "grantRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "hasRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "items",
  //         inputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "id",
  //             type: "uint32",
  //             internalType: "uint32",
  //           },
  //           {
  //             name: "name",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "fee",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "feeToken",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "feeTokenSymbol",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "lock",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //           {
  //             name: "itemType",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //           {
  //             name: "itemBoost",
  //             type: "uint8",
  //             internalType: "uint8",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "renounceRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "callerConfirmation",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "revokeRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "supportsInterface",
  //         inputs: [
  //           {
  //             name: "interfaceId",
  //             type: "bytes4",
  //             internalType: "bytes4",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "event",
  //         name: "RoleAdminChanged",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "previousAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "newAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleGranted",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleRevoked",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlBadConfirmation",
  //         inputs: [],
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlUnauthorizedAccount",
  //         inputs: [
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "neededRole",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   ZenMonVault: {
  //     address: "0xcba6b9a951749b8735c603e7ffc5151849248772",
  //     abi: [
  //       {
  //         type: "constructor",
  //         inputs: [
  //           {
  //             name: "_controller",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "CONTROLLER_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "DEFAULT_ADMIN_ROLE",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getRoleAdmin",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getVault",
  //         inputs: [
  //           {
  //             name: "_id",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple",
  //             internalType: "struct VaultItem",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "symbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "token",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "amount",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "expiry",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getVaults",
  //         inputs: [
  //           {
  //             name: "_user",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple[]",
  //             internalType: "struct VaultItem[]",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "symbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "token",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "amount",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "expiry",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "grantRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "hasRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "lockFunds",
  //         inputs: [
  //           {
  //             name: "_user",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_symbol",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "_tokenAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_amount",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "_lock",
  //             type: "uint16",
  //             internalType: "uint16",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "payable",
  //       },
  //       {
  //         type: "function",
  //         name: "renounceRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "callerConfirmation",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "revokeRole",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "supportsInterface",
  //         inputs: [
  //           {
  //             name: "interfaceId",
  //             type: "bytes4",
  //             internalType: "bytes4",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "bool",
  //             internalType: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "userVaults",
  //         inputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "vaultIds",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "vaultItems",
  //         inputs: [
  //           {
  //             name: "",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "id",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "symbol",
  //             type: "string",
  //             internalType: "string",
  //           },
  //           {
  //             name: "token",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "amount",
  //             type: "uint256",
  //             internalType: "uint256",
  //           },
  //           {
  //             name: "expiry",
  //             type: "uint40",
  //             internalType: "uint40",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "event",
  //         name: "RoleAdminChanged",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "previousAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "newAdminRole",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleGranted",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "event",
  //         name: "RoleRevoked",
  //         inputs: [
  //           {
  //             name: "role",
  //             type: "bytes32",
  //             indexed: true,
  //             internalType: "bytes32",
  //           },
  //           {
  //             name: "account",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //           {
  //             name: "sender",
  //             type: "address",
  //             indexed: true,
  //             internalType: "address",
  //           },
  //         ],
  //         anonymous: false,
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlBadConfirmation",
  //         inputs: [],
  //       },
  //       {
  //         type: "error",
  //         name: "AccessControlUnauthorizedAccount",
  //         inputs: [
  //           {
  //             name: "account",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "neededRole",
  //             type: "bytes32",
  //             internalType: "bytes32",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   ZenMonViewer: {
  //     address: "0xe4eb561155afce723bb1ff8606fbfe9b28d5d38d",
  //     abi: [
  //       {
  //         type: "constructor",
  //         inputs: [
  //           {
  //             name: "_nftAddresss",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_itemsAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //           {
  //             name: "_vaultAddress",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //       },
  //       {
  //         type: "function",
  //         name: "getItems",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple[]",
  //             internalType: "struct SavingItem[]",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint32",
  //                 internalType: "uint32",
  //               },
  //               {
  //                 name: "name",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "fee",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "feeToken",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "feeTokenSymbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "lock",
  //                 type: "uint16",
  //                 internalType: "uint16",
  //               },
  //               {
  //                 name: "itemType",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "itemBoost",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getMonster",
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple",
  //             internalType: "struct Monster",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "name",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "base",
  //                 type: "uint16",
  //                 internalType: "uint16",
  //               },
  //               {
  //                 name: "status",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "live",
  //                 type: "bool",
  //                 internalType: "bool",
  //               },
  //               {
  //                 name: "energy",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "energyUpdated",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //               {
  //                 name: "mood",
  //                 type: "uint8",
  //                 internalType: "uint8",
  //               },
  //               {
  //                 name: "moodUpdated",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //               {
  //                 name: "accessories",
  //                 type: "uint32[]",
  //                 internalType: "uint32[]",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "getVaults",
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //             internalType: "address",
  //           },
  //         ],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "tuple[]",
  //             internalType: "struct VaultItem[]",
  //             components: [
  //               {
  //                 name: "id",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "symbol",
  //                 type: "string",
  //                 internalType: "string",
  //               },
  //               {
  //                 name: "token",
  //                 type: "address",
  //                 internalType: "address",
  //               },
  //               {
  //                 name: "amount",
  //                 type: "uint256",
  //                 internalType: "uint256",
  //               },
  //               {
  //                 name: "expiry",
  //                 type: "uint40",
  //                 internalType: "uint40",
  //               },
  //             ],
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "items",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonItems",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "nft",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonNFT",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //       {
  //         type: "function",
  //         name: "vault",
  //         inputs: [],
  //         outputs: [
  //           {
  //             name: "",
  //             type: "address",
  //             internalType: "contract IZenMonVault",
  //           },
  //         ],
  //         stateMutability: "view",
  //       },
  //     ],
  //   },
  // },
  11155111: {
    ZenMonController: {
      address: "0x42e22f532e081c9cd79d7e8787f9aaaa8ab9ae8b",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createMonster",
          inputs: [
            {
              name: "_name",
              type: "string",
              internalType: "string",
            },
            {
              name: "_base",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          outputs: [
            {
              name: "monsterId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "items",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonItems",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nft",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonNFT",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "purchaseBoost",
          inputs: [
            {
              name: "_id",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setItemsContract",
          inputs: [
            {
              name: "_itemsAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setNFTContract",
          inputs: [
            {
              name: "_nftAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setVaultContract",
          inputs: [
            {
              name: "_vaultAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "vault",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonVault",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
      ],
    },
    ZenMonNFT: {
      address: "0xa6bddb605beefe19cbbc886669b24ca5010ecaf6",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_controller",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "CONTROLLER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getApproved",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMonster",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Monster",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "base",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "status",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "live",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "energy",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "energyUpdated",
                  type: "uint40",
                  internalType: "uint40",
                },
                {
                  name: "mood",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "moodUpdated",
                  type: "uint40",
                  internalType: "uint40",
                },
                {
                  name: "accessories",
                  type: "uint32[]",
                  internalType: "uint32[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            {
              name: "_to",
              type: "address",
              internalType: "address",
            },
            {
              name: "_name",
              type: "string",
              internalType: "string",
            },
            {
              name: "_base",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "monsters",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              internalType: "string",
            },
            {
              name: "base",
              type: "uint16",
              internalType: "uint16",
            },
            {
              name: "status",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "live",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "energy",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "energyUpdated",
              type: "uint40",
              internalType: "uint40",
            },
            {
              name: "mood",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "moodUpdated",
              type: "uint40",
              internalType: "uint40",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenIds",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenURI",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateEnergy",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "_energy",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateMood",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "_mood",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721IncorrectOwner",
          inputs: [
            {
              name: "sender",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InsufficientApproval",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InvalidApprover",
          inputs: [
            {
              name: "approver",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InvalidOperator",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InvalidReceiver",
          inputs: [
            {
              name: "receiver",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721InvalidSender",
          inputs: [
            {
              name: "sender",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "ERC721NonexistentToken",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
    },
    ZenMonItems: {
      address: "0x7d816db04fe945f319ee8cc4acd56003306fcd97",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createItem",
          inputs: [
            {
              name: "_id",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "_name",
              type: "string",
              internalType: "string",
            },
            {
              name: "_fee",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_feeToken",
              type: "address",
              internalType: "address",
            },
            {
              name: "_feeTokenSymbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "_lock",
              type: "uint16",
              internalType: "uint16",
            },
            {
              name: "_itemType",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "_itemBoost",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getItem",
          inputs: [
            {
              name: "_id",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [
            {
              name: "item",
              type: "tuple",
              internalType: "struct SavingItem",
              components: [
                {
                  name: "id",
                  type: "uint32",
                  internalType: "uint32",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "fee",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "feeToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeTokenSymbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "lock",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "itemType",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "itemBoost",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getItems",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct SavingItem[]",
              components: [
                {
                  name: "id",
                  type: "uint32",
                  internalType: "uint32",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "fee",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "feeToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeTokenSymbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "lock",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "itemType",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "itemBoost",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "items",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "id",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "name",
              type: "string",
              internalType: "string",
            },
            {
              name: "fee",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "feeToken",
              type: "address",
              internalType: "address",
            },
            {
              name: "feeTokenSymbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "lock",
              type: "uint16",
              internalType: "uint16",
            },
            {
              name: "itemType",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "itemBoost",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
      ],
    },
    ZenMonVault: {
      address: "0x936984d005d5cde493144747279ac0e1b951c0ce",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_controller",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "CONTROLLER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getVault",
          inputs: [
            {
              name: "_id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct VaultItem",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "symbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "token",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiry",
                  type: "uint40",
                  internalType: "uint40",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getVaults",
          inputs: [
            {
              name: "_user",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct VaultItem[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "symbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "token",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiry",
                  type: "uint40",
                  internalType: "uint40",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lockFunds",
          inputs: [
            {
              name: "_user",
              type: "address",
              internalType: "address",
            },
            {
              name: "_symbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "_tokenAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "_amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_lock",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userVaults",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "vaultIds",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "vaultItems",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "symbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "token",
              type: "address",
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "expiry",
              type: "uint40",
              internalType: "uint40",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
      ],
    },
    ZenMonViewer: {
      address: "0x1c7d04e3b9a56920bbc69aff12d5414056bfd24e",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_nftAddresss",
              type: "address",
              internalType: "address",
            },
            {
              name: "_itemsAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "_vaultAddress",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getItems",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct SavingItem[]",
              components: [
                {
                  name: "id",
                  type: "uint32",
                  internalType: "uint32",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "fee",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "feeToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeTokenSymbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "lock",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "itemType",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "itemBoost",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMonster",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Monster",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "base",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "status",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "live",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "energy",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "energyUpdated",
                  type: "uint40",
                  internalType: "uint40",
                },
                {
                  name: "mood",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "moodUpdated",
                  type: "uint40",
                  internalType: "uint40",
                },
                {
                  name: "accessories",
                  type: "uint32[]",
                  internalType: "uint32[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getVaults",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct VaultItem[]",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "symbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "token",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiry",
                  type: "uint40",
                  internalType: "uint40",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "items",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonItems",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nft",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonNFT",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "vault",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IZenMonVault",
            },
          ],
          stateMutability: "view",
        },
      ],
    },
  },
} as const;
export type allType = (typeof contracts)[11155111];
