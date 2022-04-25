let registeredUsers = [
        {
            username: "Orel",
            password: "22222222",
            photo: "orel.jpg",
            nickname: "Orel",
            data: [{
                contactName: "David Monheit",
                photo: "face4.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "server", type: "text", value: "Haha so funny!"}
            ,
                messages: [ {sender: "client", type: "text", value: "Hey, how are you?"},
                    {sender: "server", type: "text", value: "I'm great, i'm in Paris"},
                    {sender: "server", type: "text", value: "Here's a pic!"},
                    {sender: "server", type: "image", value: "ParisSelfie.jpg"},
                    {sender: "client", type: "text", value: "That's great"},
                    {sender: "client", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "client", type: "text", value: "Check out this cool video"},
                    {sender: "client", type: "video", value: "video.mp4"},
                {sender: "server", type: "text", value: "Haha so funny!"}]
            }, {
                contactName: "Sarah",
                photo: "face.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "Omer",
                photo: "face5.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face7.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face13.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Henry",
                photo: "face8.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Bart",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Mike",
                photo: "face10.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Jack",
                photo: "face11.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage:{sender: "client", type: "text", value: ""},
                messages: []
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