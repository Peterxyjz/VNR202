import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-red-200 transition-colors">
            Hành trình Đổi Mới
          </Link>

          <div className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Trang chủ
            </Link>
            <Link
              href="/quiz"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Quiz
            </Link>
            <Link
              href="/forum"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Forum Q&A
            </Link>
            <Link
              href="/gioi-thieu"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
