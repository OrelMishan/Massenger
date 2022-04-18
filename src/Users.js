let registeredUsers = [
        {
            username: "Orel",
            password: "22222222",
            photo: "face3.png",
            nickname: "goooooooo",
            data: [{
                contactName: "ddd",
                photo: "face1.png",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "server", type: "video", value: "video.mp4"},
                messages: [{sender: "client", type: "image", value: "face.jpg"},
                    {sender: "server", type: "image", value: require("./send.png")},
                    {sender: "client", type: "text", value: "ffffffffffffffffffffffffffffffffffffff"},
                    {sender: "server", type: "video", value: "video.mp4"}]
            }, {
                contactName: "fff",
                photo: "face2.png",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: "fffff"},
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "image", value: require("./send.png")},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "ggg",
                photo: "face3.png",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: "fffff"},
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "jjj",
                photo: "face.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: "fffff"},
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }]
        },
        {
            username: "David", password: "111", data: [{
                contactName: "ddd",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "fff",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "ggg",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "jjj",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }]
        },
        {
            username: "John", password: "333", data: [{
                contactName: "ddd",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "fff",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "ggg",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "jjj",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }]
        },
        {
            username: "Barry", password: "444", photo: "./gotcha.jpeg",
            data: [{
                contactName: "ddd",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "fff",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "ggg",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "jjj",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }]
        },
        {
            username: "Jil", password: "555", data: [{
                contactName: "ddd",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "fff",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "ggg",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }, {
                contactName: "jjj",
                messages: [{sender: "client", type: "image", value: "send.png"},
                    {sender: "server", type: "text", value: "send.png"},
                    {sender: "client", type: "text", value: "fffff"}]
            }]
        }
    ]
;
export default registeredUsers;