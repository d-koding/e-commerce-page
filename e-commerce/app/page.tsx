import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={`${lusitana.className} text-xl text-gray-900 md:text-3xl md:leading-normal`} >
      <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  )
}