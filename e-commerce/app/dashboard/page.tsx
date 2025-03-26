import { neon } from '@neondatabase/serverless';

export default function DashBoardPage() {
  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);


    const comment = formData.get('comment');
    if (typeof comment !== 'string' || comment.trim() === '') {
    console.error('Invalid comment');
    return; // Or throw an error
    }
await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }

  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}