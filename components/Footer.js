import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
      

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link href="/" class="flex items-center mb-4 sm:mb-0  rtl:space-x-reverse">
                <img src="maggi1.gif" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MAGGI</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="#" class="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" class="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" class="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" class="hover:underline">MAGGI</Link>. All Rights Reserved. Dev- Abhishek Roy</span>
    </div>
</footer>


    </>
  )
}

export default Footer
