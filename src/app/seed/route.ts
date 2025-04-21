import bcrypt from "bcryptjs";
import {
  dummyChatHistory,
  dummySpendings,
  users,
} from "../lib/placeholder-data";
import sql from "../lib/database-setup";

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedSpendings() {
  await sql`
    CREATE TABLE IF NOT EXISTS spendings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      amount INT NOT NULL,
      category VARCHAR(255) NOT NULL,
      description TEXT,
      date DATE NOT NULL,
      CONSTRAINT fk_user_spending FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  const insertedSpendings = await Promise.all(
    dummySpendings.map(async (spending) => {
      return sql`
        INSERT INTO spendings (id, user_id, amount, category, description, date)
        VALUES (
          ${spending.id},
          ${spending.user_id},
          ${spending.amount},
          ${spending.category},
          ${spending.description},
          ${spending.date}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedSpendings;
}

async function seedHistory() {
  await sql`
    CREATE TABLE IF NOT EXISTS history (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_user_history FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  const insertedHistories = await Promise.all(
    dummyChatHistory.map(async (entry) => {
      return sql`
        INSERT INTO history (id, user_id, question, answer, created_at)
        VALUES (
          ${entry.id},
          ${entry.userId},
          ${entry.question},
          ${entry.answer},
          ${entry.timestamp}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedHistories;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedSpendings(),
      seedHistory(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
