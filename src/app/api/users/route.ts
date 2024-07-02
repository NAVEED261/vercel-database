import { NextResponse } from "next/server";
import { db, UsersTable } from "./lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

// export async function GET(request: Request) {
//   //method 2
//   let client=await db.connect()
//   let users=await client.query(`SELECT * FROM users;`)
//   // method 1
//     // const users = await sql`SELECT * FROM users;`;
//     return NextResponse.json(users.rows[1].username);
//   }
export async function GET(request: Request) {
  let users = await db.select().from(UsersTable); //DRIZZLE ORM

  return NextResponse.json(users);
}
export async function POST(request: Request) {
  let body = await request.json();
  await db.insert(UsersTable).values(body); //DRIZZLE QUREY
  revalidateTag: ("fatima")

  return NextResponse.json("");
}
export async function PUT(request: Request) {
  let body = await request.json();
  await db.update(UsersTable).set(body).where(eq(UsersTable._id, body._id)); //DRIZZLE QUREY
  revalidateTag: {
  }
  return NextResponse.json("");
}
export async function DELETE(request: Request) {
  let body = await request.json();
  await db.delete(UsersTable).where(eq(UsersTable._id, body._id)); //DRIZZLE QUREY
  revalidateTag: {
  }
  return NextResponse.json("");
}
