export default function Footer() {
  return (
    <footer className="border-t bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span className="font-bold text-2xl">TaskMaster</span> {/* Increased from text-lg to text-2xl */}
          <p className="text-lg text-gray-400">© {new Date().getFullYear()} TaskMaster. All rights reserved.</p> {/* Increased from text-sm to text-lg */}
        </div>
        <div className="flex items-center gap-4 text-lg"> {/* Increased from text-sm to text-lg */}
          <span className="text-gray-400 hover:text-white cursor-pointer">Terms</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">Privacy</span>
        </div>
      </div>
    </footer>
  );
}