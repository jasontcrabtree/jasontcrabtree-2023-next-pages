'use server';

import { createPool } from '@vercel/postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';

interface User {
  email: string;
  password: string;
  id: string;
  length?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
}

let pool = createPool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

export async function getUser(email: string): Promise<User | null> {
  const query = 'SELECT * FROM "dashboarduser" WHERE email = $1';
  const { rows } = await pool.query(query, [email]);
  return rows[0] || null;
}

export async function createUser(
  email: string,
  password: string,
  name = null
): Promise<User> {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  const createdAt = new Date();
  const updatedAt = createdAt;

  const query =
    'INSERT INTO "dashboarduser" (name, email, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *';

  const { rows } = await pool.query(query, [
    name,
    email,
    hash,
    createdAt,
    updatedAt,
  ]);
  return rows[0];
}

const updateUser = async (
  id: string,
  email: string,
  password: string
): Promise<User> => {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  const updatedAt = new Date();

  const query = `
    UPDATE dashboarduser
    SET email = $1, password = $2, updated_at = $3
    WHERE id = $4
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [email, hash, updatedAt, id]);
  return rows[0];
};
