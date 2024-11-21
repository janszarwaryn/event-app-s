import { hash } from 'bcryptjs';
import * as fs from 'fs';
import * as path from 'path';

const users = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    name: 'Administrator',
    role: 'ADMIN'
  },
  {
    id: '2',
    username: 'user1',
    password: 'user123',
    name: 'Regular User 1',
    role: 'USER'
  },
];

async function hashPasswords() {
  const hashedUsers = await Promise.all(
    users.map(async (user) => ({
      ...user,
      password: await hash(user.password, 12)
    }))
  );

  fs.writeFileSync(
    path.join(process.cwd(), 'config', 'users.json'),
    JSON.stringify({ users: hashedUsers }, null, 2)
  );

  console.log('Users file created with hashed passwords!');
}

hashPasswords();
