let registeredUsers = [
        {
            username: "Orel",
            password: "22222222",
            photo: "orel.jpg",
            nickname: "Orel",
            data: [{
                contactName: "David",
                photo: "face5.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
                messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
                lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "Omer",
                photo: "face13.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face4.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }]
        },
        {
            username: "David",
            password: "22222222",
            photo: "face5.webp",
            nickname: "MR D",
            data: [{
                contactName: "Orel",
                photo: "orel.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
                messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
                lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "Omer",
                photo: "face13.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face4.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }]
        },
        {
            username: "Sarah",
            password: "22222222",
            photo: "face.jpg",
            nickname: "Sarah",
            data: [{
                contactName: "Orel",
                photo: "orel.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
                messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
                    {sender: "server", type: "text", value: "I'm great, i'm in Paris"},
                    {sender: "server", type: "text", value: "Here's a pic!"},
                    {sender: "server", type: "image", value: "ParisSelfie.jpg"},
                    {sender: "client", type: "text", value: "That's great"},
                    {sender: "client", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "client", type: "text", value: "Check out this cool video"},
                    {sender: "client", type: "video", value: "video.mp4"},
                    {sender: "server", type: "text", value: "Haha so funny!"}]
            }, {
                contactName: "David",
                photo: "face5.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "Omer",
                photo: "face13.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face4.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }]
        },
        {
            username: "Omer",
            password: "22222222",
            photo: "face13.jpg",
            nickname: "Omer",
            data: [{
                contactName: "Orel",
                photo: "orel.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
                messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
                lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "David",
                photo: "face5.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face4.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }]
        },
        {
            username: "Jil",
            password: "22222222",
            photo: "face10.jpg",
            nickname: "Jil",
            data: [{
                contactName: "Orel",
                photo: "orel.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
                messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
                lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                messages: [{sender: "server", type: "text", value: "watch this!"},
                    {sender: "server", type: "video", value: "video.mp4"},
                    {sender: "client", type: "text", value: "That's great!"},
                    {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                    {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                    {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
            }, {
                contactName: "David",
                photo: "face5.webp",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
                messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
            }, {
                contactName: "Bob",
                photo: "face9.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }, {
                contactName: "Alice",
                photo: "face4.jpg",
                lastMessageTime: new Date().toLocaleString(),
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }]
        },
    {   username: "Alice",
        password: "22222222",
        photo: "face4.jpg",
        nickname: "Alice",
        data: [{
            contactName: "Orel",
            photo: "orel.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
            messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
            lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
            messages: [{sender: "server", type: "text", value: "watch this!"},
                {sender: "server", type: "video", value: "video.mp4"},
                {sender: "client", type: "text", value: "That's great!"},
                {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
        }, {
            contactName: "David",
            photo: "face5.webp",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
            messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
        }, {
            contactName: "Bob",
            photo: "face9.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "client", type: "text", value: ""},
            messages: []
        }, {
            contactName: "Jil",
            photo: "face10.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "client", type: "text", value: ""},
            messages: []
        }]
    },
    {   username: "Bob",
        password: "22222222",
        photo: "face9.jpg",
        nickname: "Bob",
        data: [{
            contactName: "Orel",
            photo: "orel.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "server", type: "text", value: "Haha so funny!"},
            messages: [{sender: "client", type: "text", value: "Hey, how are you?"},
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
            lastMessage: {sender: "server", type: "text", value: "Orel? is David near-bye?"},
            messages: [{sender: "server", type: "text", value: "watch this!"},
                {sender: "server", type: "video", value: "video.mp4"},
                {sender: "client", type: "text", value: "That's great!"},
                {sender: "server", type: "record", value: "HaveAGreatTime.m4a"},
                {sender: "server", type: "text", value: "Orel? is David near-bye?"},
                {sender: "client", type: "image", value: "ParisSelfie.jpg"},]
        }, {
            contactName: "David",
            photo: "face5.webp",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "server", type: "text", value: "Why aren't you answering?"},
            messages: [{sender: "server", type: "text", value: "Why aren't you answering?"}]
        }, {
            contactName: "Jil",
            photo: "face10.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "client", type: "text", value: ""},
            messages: []
        }, {
            contactName: "Alice",
            photo: "face4.jpg",
            lastMessageTime: new Date().toLocaleString(),
            lastMessage: {sender: "client", type: "text", value: ""},
            messages: []
        }]
    }
    ]
;
export default registeredUsers;