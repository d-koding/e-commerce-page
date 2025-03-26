'use client';

import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils'; // Utility for className concatenation (from shadcn/ui)

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: CogIcon },
  { name: 'Product Listing', href: '/dashboard/product-listing', icon: UserIcon },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full p-4 bg-gray-50 border-r border-gray-200">
      {/* Sidebar Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">My Dashboard</h2>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-200 transition',
                isActive && 'bg-gray-200 text-gray-900 font-medium'
              )}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Separator and Footer Section */}
      <div className="mt-auto">
        <Separator className="my-4" />
        <div className="text-sm text-gray-500">
          <p>© 2025 My Dashboard</p>
        </div>
      </div>
    </nav>
  );
}