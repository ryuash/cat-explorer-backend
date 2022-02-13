export const tx = {
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/cosmos.staking.v1beta1.MsgDelegate",
          "delegator_address": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp",
          "validator_address": "desmosvaloper10j0utjntrpcrq32ksa95ktyjevnqugvcdafkzn",
          "amount": {
            "denom": "udsm",
            "amount": "181787"
          }
        }
      ],
      "memo": "",
      "timeout_height": "0",
      "extension_options": [],
      "non_critical_extension_options": []
    },
    "auth_info": {
      "signer_infos": [
        {
          "public_key": {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            "key": "A+nDCr7lXKTyINoSmOxHYWCZLkz3dnYVP4LMpIrv8/nc"
          },
          "mode_info": {
            "single": {
              "mode": "SIGN_MODE_DIRECT"
            }
          },
          "sequence": "4800"
        }
      ],
      "fee": {
        "amount": [
          {
            "denom": "udsm",
            "amount": "200"
          }
        ],
        "gas_limit": "200000",
        "payer": "",
        "granter": ""
      }
    },
    "signatures": [
      "dozLs7SfcH/bkQmTchDht1BIkv5Ndfz9oJV/06DLoIVzQqmbW1rNqxFlXyKynBpwSN/SsvhDV5m8UDuWOQJuyw=="
    ]
  },
  "tx_response": {
    "height": "2297036",
    "txhash": "F741963D137C8E5D25E629AD99EBCE804BEAFEE16B7EE013669E2803AAD1A45F",
    "codespace": "",
    "code": 0,
    "data": "0A250A232F636F736D6F732E7374616B696E672E763162657461312E4D736744656C6567617465",
    "raw_log": "[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp\"},{\"key\":\"amount\",\"value\":\"316udsm\"},{\"key\":\"receiver\",\"value\":\"desmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3prylw0\"},{\"key\":\"amount\",\"value\":\"181787udsm\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78\"},{\"key\":\"amount\",\"value\":\"316udsm\"},{\"key\":\"spender\",\"value\":\"desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp\"},{\"key\":\"amount\",\"value\":\"181787udsm\"}]},{\"type\":\"delegate\",\"attributes\":[{\"key\":\"validator\",\"value\":\"desmosvaloper10j0utjntrpcrq32ksa95ktyjevnqugvcdafkzn\"},{\"key\":\"amount\",\"value\":\"181787udsm\"},{\"key\":\"new_shares\",\"value\":\"181787.000000000000000000\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.staking.v1beta1.MsgDelegate\"},{\"key\":\"sender\",\"value\":\"desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78\"},{\"key\":\"module\",\"value\":\"staking\"},{\"key\":\"sender\",\"value\":\"desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp\"},{\"key\":\"sender\",\"value\":\"desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78\"},{\"key\":\"amount\",\"value\":\"316udsm\"}]}]}]",
    "logs": [
      {
        "msg_index": 0,
        "log": "",
        "events": [
          {
            "type": "coin_received",
            "attributes": [
              {
                "key": "receiver",
                "value": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp"
              },
              {
                "key": "amount",
                "value": "316udsm"
              },
              {
                "key": "receiver",
                "value": "desmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3prylw0"
              },
              {
                "key": "amount",
                "value": "181787udsm"
              }
            ]
          },
          {
            "type": "coin_spent",
            "attributes": [
              {
                "key": "spender",
                "value": "desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78"
              },
              {
                "key": "amount",
                "value": "316udsm"
              },
              {
                "key": "spender",
                "value": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp"
              },
              {
                "key": "amount",
                "value": "181787udsm"
              }
            ]
          },
          {
            "type": "delegate",
            "attributes": [
              {
                "key": "validator",
                "value": "desmosvaloper10j0utjntrpcrq32ksa95ktyjevnqugvcdafkzn"
              },
              {
                "key": "amount",
                "value": "181787udsm"
              },
              {
                "key": "new_shares",
                "value": "181787.000000000000000000"
              }
            ]
          },
          {
            "type": "message",
            "attributes": [
              {
                "key": "action",
                "value": "/cosmos.staking.v1beta1.MsgDelegate"
              },
              {
                "key": "sender",
                "value": "desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78"
              },
              {
                "key": "module",
                "value": "staking"
              },
              {
                "key": "sender",
                "value": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp"
              }
            ]
          },
          {
            "type": "transfer",
            "attributes": [
              {
                "key": "recipient",
                "value": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp"
              },
              {
                "key": "sender",
                "value": "desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78"
              },
              {
                "key": "amount",
                "value": "316udsm"
              }
            ]
          }
        ]
      }
    ],
    "info": "",
    "gas_wanted": "200000",
    "gas_used": "178474",
    "tx": {
      "@type": "/cosmos.tx.v1beta1.Tx",
      "body": {
        "messages": [
          {
            "@type": "/cosmos.staking.v1beta1.MsgDelegate",
            "delegator_address": "desmos10j0utjntrpcrq32ksa95ktyjevnqugvcnspzgp",
            "validator_address": "desmosvaloper10j0utjntrpcrq32ksa95ktyjevnqugvcdafkzn",
            "amount": {
              "denom": "udsm",
              "amount": "181787"
            }
          }
        ],
        "memo": "",
        "timeout_height": "0",
        "extension_options": [],
        "non_critical_extension_options": []
      },
      "auth_info": {
        "signer_infos": [
          {
            "public_key": {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A+nDCr7lXKTyINoSmOxHYWCZLkz3dnYVP4LMpIrv8/nc"
            },
            "mode_info": {
              "single": {
                "mode": "SIGN_MODE_DIRECT"
              }
            },
            "sequence": "4800"
          }
        ],
        "fee": {
          "amount": [
            {
              "denom": "udsm",
              "amount": "200"
            }
          ],
          "gas_limit": "200000",
          "payer": "",
          "granter": ""
        }
      },
      "signatures": [
        "dozLs7SfcH/bkQmTchDht1BIkv5Ndfz9oJV/06DLoIVzQqmbW1rNqxFlXyKynBpwSN/SsvhDV5m8UDuWOQJuyw=="
      ]
    },
    "timestamp": "2022-02-13T06:07:16Z"
  }
}
