import { Logo } from '@/components/logo'
import { Link } from 'react-router-dom' 

const links = [
    
]

export default function FooterSection() {
    return (
        <footer class="bg-blue-200 text-gray-300 px-6 md:px-12 lg:px-24 py-12">
  <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
    
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-black">
      <div class="flex flex-col space-y-2 g-font">
        <a href="#" class="hover:text-white">Home</a>
        <a href="#" class="hover:text-white">Changelog</a>
        <a href="#" class="hover:text-white">Contact</a>
      </div>
      <div class="flex flex-col space-y-2 g-font">
        <a href="#" class="hover:text-white">X/Twitter</a>
        <a href="#" class="hover:text-white">LinkedIn</a>
      </div>
      <div class="flex flex-col space-y-2 g-font">
        <a href="#" class="hover:text-white">Terms</a>
        <a href="#" class="hover:text-white">Privacy</a>
      </div>
    </div>

   
    <div class="max-w-md w-full g-font">
      <h3 class="text-black font-semibold mb-2">Newsletter <span class="font-normal">(rare, but good)</span></h3>
      <p class="text-sm text-gray-400 mb-4">
        Insights, launches, and behind-the-scenes plays from top creators.
        Useful ideas you can learn from — only when there’s something good to share.
      </p>
      <form class="flex">
        <input
          type="email"
          placeholder="Enter email"
          class="flex-1 bg-neutral-900 text-white px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-md g-font"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  
  <div class="mt-12 text-center text-sm text-gray-900 g-font">
     © 2025 — Knowledge, thoughtfully made.
  </div>
</footer>

    )
}
