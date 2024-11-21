const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const defaultUsers = [
  {
    id: "1",
    username: "admin1",
    password: "admin123", // plain password to hash
    role: "ADMIN",
    name: "Admin User"
  },
  {
    id: "2",
    username: "admin2",
    password: "admin456", // plain password to hash
    role: "ADMIN",
    name: "Second Admin"
  },
  {
    id: "3",
    username: "user1",
    password: "user123", // plain password to hash
    role: "USER",
    name: "Regular User 1"
  },
  {
    id: "4",
    username: "user2",
    password: "user456", // plain password to hash
    role: "USER",
    name: "Regular User 2"
  },
  {
    id: "5",
    username: "user3",
    password: "user789", // plain password to hash
    role: "USER",
    name: "Regular User 3"
  }
];

async function hashPasswords() {
  try {
    const usersPath = path.join(process.cwd(), "config", "users.json");
    
    const hashedUsers = await Promise.all(
      defaultUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    fs.writeFileSync(
      usersPath,
      JSON.stringify({ users: hashedUsers }, null, 2)
    );

    console.log("✅ Passwords hashed successfully!");
    console.log("📝 Demo credentials:");
    console.log("Admin: admin1 / admin123");
    console.log("User: user1 / user123");
  } catch (error) {
    console.error("Error hashing passwords:", error);
    process.exit(1);
  }
}

hashPasswords(); 