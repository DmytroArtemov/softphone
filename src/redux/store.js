let store = {
    _state: {
        profile: {
            "id": 1234,
            "first_name": "Dmitriy",
            "last_name": "Artemov",
            "config": {
                "display_name": "dmitriyartemov",
                "private_identity": "dmitriyartemov.inst17.client.phonexa.net",
                "public_identity": "sip:dmitriyartemov.inst17.client.phonexa.net@pbx.phonexa.net:5060",
                "password": "ceedfff2be",
                "realm": "pbx.phonexa.net",
                "websocket_url": "wss://ws.phonexa.net:4443",
                "sip_outbound_url": "udp://pbx.phonexa.net:5060",
                "ice_servers": [
                    {
                        "url": "stun:stun.l.google.com:19302"
                    }
                ]
            }
        },
        callsList: [
            {
                "id": 1,
                "contact_id": false,
                "public_id": "W_LK87H",
                "type": 2,
                "status": 2,
                "destination_type": 1,
                "phone": "206",
                "date": "2022-08-03 14:05:20",
                "contact_name": "Valerii Artemenko"
            },
            {
                "id": 2,
                "contact_id": false,
                "public_id": "A_LFD74",
                "type": 1,
                "status": 3,
                "destination_type": 2,
                "phone": "+14324326542",
                "date": "2022-05-22 07:15:30",
                "contact_name": "Yurii Horoshkov"
            },
            {
                "id": 3,
                "contact_id": false,
                "public_id": "H_FDH54",
                "type": 2,
                "status": 2,
                "destination_type": 2,
                "phone": "+18765432164",
                "date": "2022-02-05 22:47:11",
                "contact_name": "Sergey"
            }
        ],
        callProfile: {
            "id": 1,
            "contact_id": false,
            "contact_name": "Valerii Artemenko",
            "category_name": "General",
            "date": "2021-12-12 14:05:20",
            "destination_number": "206",
            "source_number": "206",
            "destination_type": 1,
            "status": 1,
            "type": 1,
            "ivr_duration": 0,
            "on_call_duration": 143,
            "total_duration": 130,
            "wait_duration": 430,
            "ivr_id": false,
            "ivr_name": false,
            "public_id": "W_LK87H",
            "queue_id": false,
            "queue_name": false
        },
        contactsList: [
            {
                "id": 1,
                "first_name": "Valerii",
                "last_name": "Artemenko",
                "favorite": false,
                "phone": "206"
            },
            {
                "id": 2,
                "first_name": "Yurii",
                "last_name": "Horoshkov",
                "favorite": true,
                "phone": "+14324326542"
            },
            {
                "id": 3,
                "first_name": "Sergey",
                "last_name": "",
                "favorite": false,
                "phone": "+18765432164"
            }
        ],
        contactProfile: {
            "id": 1,
            "first_name": "Valerii Artemenko",
            "last_name": "",
            "favorite": false,
            "phones": [
                {
                    "type": 1,
                    "number": "206",
                    "primary": false
                },
                {
                    "type": 2,
                    "number": "206",
                    "primary": true
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed');
    },
    addCalls() {
        const post = {
            "id": 4,
            "contact_id": false,
            "public_id": "W_LK87H",
            "type": 2,
            "status": 2,
            "destination_type": 1,
            "phone": "+1234567890",
            "date": "2022-08-03 14:05:20",
            "contact_name": "User"
        }
        this._state.callsList.push(post);
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;