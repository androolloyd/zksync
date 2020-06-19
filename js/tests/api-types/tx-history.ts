type Deposit = {
    "tx_id": string,
    "hash": string,
    "eth_block": number,
    "pq_id": number,
    "tx": {
        "account_id": number,
        "priority_op": {
            "amount": string,
            "from": string,
            "to": string,
            "token": string,
        },
        "type": "Deposit"
    },
    "success": null,
    "fail_reason": null,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
};

type FullExit = {
    "tx_id": string,
    "hash": string,
    "eth_block": number,
    "pq_id": number,
    "tx": {
        "priority_op": {
            "token": string,
            "account_id": number,
            "eth_address": string,
        },
        "withdraw_amount": string,
        "type": "FullExit"
    },
    "success": null,
    "fail_reason": null,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
};

type Transfer = {
    "tx_id": string,
    "hash": string,
    "eth_block": null,
    "pq_id": null,
    "tx": {
        "accountId": number,
        "amount": string,
        "fee": string,
        "from": string,
        "nonce": number,
        "signature": {
            "pubKey": string,
            "signature": string
        },
        "to": string,
        "token": string,
        "type": "Transfer"
    },
    "success": boolean,
    "fail_reason"?: string,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
};

type Subscription = {
    "tx_id": string,
    "hash": string,
    "eth_block": null,
    "pq_id": null,
    "tx": {
        "accountId": number,
        "amount": string,
        "fee": string,
        "from": string,
        "nonce": number,
        "startDate": number,
        "endDate": number,
        "signature": {
            "pubKey": string,
            "signature": string
        },
        "to": string,
        "token": string,
        "type": "Subscription"
    },
    "success": boolean,
    "fail_reason"?: string,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
};

type ChangePubKey = {
    "tx_id": string,
    "hash": string,
    "eth_block": null,
    "pq_id": null,
    "tx": {
        "account": string,
        "accountId": number,
        "ethSignature"?: string,
        "newPkHash": string,
        "nonce": number,
        "type": string,
    },
    "success": boolean,
    "fail_reason"?: string,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
}

type Withdraw =   {
    "tx_id": string,
    "hash": string,
    "eth_block": null,
    "pq_id": null,
    "tx": {
      "amount": string,
      "accountId": number,
      "fee": string,
      "from": string,
      "nonce": number,
      "signature": {
        "pubKey": string,
        "signature": string
      },
      "to": string,
      "token": string,
      "type": "Withdraw"
    },
    "success": boolean,
    "fail_reason"?: string,
    "commited": boolean,
    "verified": boolean,
    "created_at": string,
};

export type Interface = (Deposit | Transfer | Subscription | Withdraw | ChangePubKey | FullExit)[];
