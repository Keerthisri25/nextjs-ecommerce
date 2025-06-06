'use client'
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className=" shadow">
      <div className="flex justify-between items-center">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer py-2 text-gray-700 hover:text-blue-600 focus:outline-none text-white"
          >
            Products ▾
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-40 md:w-[600px] bg-white border rounded-lg shadow-lg p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
              <div>
                <h4 className="font-semibold mb-2 text-black">Popular Categories</h4>
                <ul>
                  <li className="py-1 hover:text-blue-500 cursor-pointer text-black"><Link href="/product-listing">Apparels</Link></li>
                  <li className="py-1 hover:text-blue-500 cursor-pointer text-black"><Link href="/product-listing">Accessories</Link></li>
                  <li className="py-1 hover:text-blue-500 cursor-pointer text-black"><Link href="/product-listing">Gadgets</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
