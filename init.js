//Only run this file if you want sample data; otherwise, it is of no use.

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp', {
        });
        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

main().then(() => {
    insertChats().catch(err => {
        console.error("Error inserting chats:", err);
        mongoose.connection.close();
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "hi babe",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "amit",
        msg: "let's catch up soon!",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "rohan",
        msg: "Have a great day!",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "mira",
        msg: "Are you coming tonight?",
        created_at: new Date()
    },
    {
        from: "ananya",
        to: "kabir",
        msg: "Loved it!",
        created_at: new Date()
    }
];

async function insertChats() {
    try {
        await Chat.insertMany(allChats);
        console.log("Chat data inserted successfully");
        mongoose.connection.close(); // Close connection after insertion
    } catch (err) {
        console.error("Error inserting chats:", err);
    }
}