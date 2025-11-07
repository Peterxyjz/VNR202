## 🚀 Tổng quan Dự án: "Hành trình Đổi Mới"

**Mô tả:** Xây dựng một trang web "bảo tàng số" kết hợp nền tảng học tập tương tác, trình bày về lịch sử các kỳ Đại hội Đảng Cộng sản Việt Nam từ VII đến XIII.

**Công nghệ (Tech Stack):**

- **Frontend/Backend:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Core Features:**
  1.  **Nội dung Lịch sử (Tĩnh):** Hiển thị nội dung chi tiết của 7 kỳ Đại hội, được render tĩnh (SSG) từ file `data/vnr202_content.json`.
  2.  **Quiz (Tương tác Tĩnh):** Cung cấp các bài trắc nghiệm cho từng Đại hội, đọc dữ liệu từ file `data/vnr202_quiz.json`.
  3.  **Forum Q&A (Động):** Một diễn đàn ẩn danh cho phép người dùng đặt câu hỏi và trả lời.
  4.  **Hệ thống "Guest":** Không cần đăng nhập. Sử dụng `localStorage` để lưu `guestId` (UUID) nhằm quản lý reactions (mỗi trình duyệt chỉ react 1 lần).
  5.  **Tương tác Database:** Sử dụng **Server Actions** của Next.js để giao tiếp với database PostgreSQL qua Prisma (cho việc tạo câu hỏi, trả lời, và reactions).

---

## 📂 Cấu trúc Thư mục Dự án

```
/du-an-dai-hoi
|
|-- /app                   # Thư mục App Router chính
|   |
|   |-- / (Trang chủ)
|   |   |-- page.tsx         # Trang chủ (Chứa Timeline ngang "Dòng chảy Đổi Mới")
|   |
|   |-- /dai-hoi           # Các trang chi tiết về Đại hội
|   |   |-- /[id]          # Trang động [id] sẽ là: vii, viii, ix...
|   |       |-- page.tsx     # Template hiển thị nội dung chi tiết của một Đại hội
|   |
|   |-- /dong-chay-chu-de  # Các trang chủ đề (Timeline dọc)
|   |   |-- /cong-nghiep-hoa
|   |   |   |-- page.tsx
|   |   |-- /kinh-te-thi-truong
|   |   |   |-- page.tsx
|   |   |-- /xay-dung-dang
|   |       |-- page.tsx
|   |
|   |-- /quiz              # 🌟 Khu vực Quiz
|   |   |-- page.tsx         # Trang chủ Quiz (hiển thị các card chọn Đại hội)
|   |   |-- /[id]          # Trang làm quiz động [id] sẽ là: vii, viii...
|   |       |-- page.tsx     # Trang tải component Quiz (là 'use client')
|   |
|   |-- /forum             # 🌟 Khu vực Forum Q&A
|   |   |-- page.tsx         # Trang chính (danh sách các câu hỏi)
|   |   |-- /ask           # Trang để đặt câu hỏi mới
|   |   |   |-- page.tsx     # Chứa component form đặt câu hỏi ('use client')
|   |   |-- /[questionId]  # Trang chi tiết một câu hỏi
|   |       |-- page.tsx     # Hiển thị câu hỏi gốc và các câu trả lời
|   |
|   |-- /gioi-thieu        # Trang giới thiệu (về nhóm, về project)
|   |   |-- page.tsx
|   |
|   |-- /components        # 📁 Các component UI dùng chung
|   |   |-- /ui            # (Tùy chọn) Các component nhỏ: Button, Card, Input...
|   |   |-- Navbar.tsx     # Thanh điều hướng chính
|   |   |-- Footer.tsx     # Chân trang
|   |   |-- QuizClient.tsx # Component ('use client') xử lý logic làm quiz
|   |   |-- QuestionForm.tsx # Component ('use client') cho form đặt câu hỏi
|   |   |-- AnswerForm.tsx   # Component ('use client') cho form trả lời
|   |   |-- ReactionButtons.tsx # Component ('use client') xử lý react (👍, 💡)
|   |
|   |-- /lib               # 📁 Thư viện, hàm hỗ trợ
|   |   |-- prisma.ts      # Khởi tạo Prisma client (để dùng chung)
|   |   |-- actions.ts     # 🚀 Chứa các Server Actions (xử lý form, reaction)
|   |   |-- data-loaders.ts # Các hàm đọc dữ liệu (ví dụ: đọc file quiz.json)
|   |
|   |-- /hooks             # 📁 Các React hooks tùy chỉnh
|   |   |-- useGuest.ts    # Hook ('use client') để lấy guestId từ localStorage
|   |
|   |-- layout.tsx         # Layout chung (chứa <html>, <body>, Navbar, Footer)
|   |-- globals.css        # File CSS global (import Tailwind)
|
|-- /prisma                # 📁 Cấu hình Prisma và Database
|   |-- schema.prisma      # File định nghĩa schema (models Question, Answer, Reaction)
|   |-- migrations         # Thư mục chứa các file migration SQL
|
|-- /data                  # 📁 Chứa dữ liệu tĩnh
|   |-- vnr202_content.json # (Gợi ý) Dữ liệu trích xuất từ PDF
|   |-- vnr202_quiz.json   # File JSON câu hỏi quiz bạn đã cung cấp
|
|-- /public                # 📁 Tài nguyên tĩnh (ảnh, video)
|   |-- images/
|   |-- videos/
|   |-- favicon.ico
|
|-- .env.local             # 🔑 Biến môi trường (chứa chuỗi kết nối PostgreSQL)
|-- .gitignore
|-- next.config.mjs        # Cấu hình Next.js
|-- package.json
|-- postcss.config.js      # Cấu hình PostCSS (cần cho Tailwind)
|-- tailwind.config.ts     # Cấu hình Tailwind CSS
|-- tsconfig.json          # Cấu hình TypeScript
```

---

## 📝 Phases Triển khai (Từng bước)

Đây là các yêu cầu kỹ thuật cho từng phần của dự án, dựa trên cấu trúc file chúng ta đã thống nhất.

### Bước 1: Thiết lập Database và Môi trường

**Phase:**

1.  Cài đặt **Prisma**: `pnpm install prisma --save-dev` và `pnpm install @prisma/client`.
2.  Khởi tạo Prisma: `npx prisma init --datasource-provider postgresql`.
3.  Cập nhật file `.env.local` với chuỗi `DATABASE_URL` của PostgreSQL.
4.  Sao chép **schema.prisma** (chúng ta đã định nghĩa) vào file `prisma/schema.prisma` (bao gồm models `Question`, `Answer`, `Reaction` với các trường `guestName`, `guestId`).
5.  Chạy `npx prisma db push` (hoặc `migrate dev`) để đồng bộ schema với database PostgreSQL.
6.  Tạo file `app/lib/prisma.ts` để khởi tạo và export một Prisma client duy nhất.

### Bước 2: Layout Chung và Hook `useGuest`

**Phase:**

1.  Tạo `app/layout.tsx`: Thiết lập thẻ `<html>`, `<body>`. Import `globals.css` (đã cấu hình Tailwind).
2.  Tạo component `app/components/Navbar.tsx`: Chứa các link điều hướng chính (`/`, `/quiz`, `/forum`, `/gioi-thieu`). Import và sử dụng nó trong `layout.tsx`.
3.  Tạo hook `app/hooks/useGuest.ts`:
    - Đây là component `'use client'`.
    - Sử dụng `useState` và `useEffect`.
    - Trong `useEffect`, kiểm tra `localStorage.getItem('guestId')`.
    - Nếu không có, tạo một `uuidv4()` (cần cài `pnpm install uuid @types/uuid`), lưu vào `localStorage`, và set vào state.
    - Nếu có, set vào state.
    - Hook này trả về `{ guestId: string | null }`.

### Bước 3: Trang chủ (`/app/page.tsx`) - Timeline Ngang

**Phase:**

1.  Tạo component `app/page.tsx` (Server Component).
2.  **Fetch dữ liệu:** Đọc file `data/vnr202_content.json`. Lấy ra danh sách các "key" (VII, VIII,...) và các thông tin `title`, `time` của mỗi Đại hội.
3.  **UI (Tailwind):** Thiết kế một **Timeline ngang** (horizontal timeline) có thể cuộn (`overflow-x-auto`).
4.  Mỗi mục trên timeline là một component Card, hiển thị `title` và `time`.
5.  Toàn bộ Card được bọc trong thẻ `<Link>` của Next.js, trỏ đến trang chi tiết (ví dụ: `href="/dai-hoi/VII"`).

### Bước 4: Trang Chi tiết Đại hội (`/app/dai-hoi/[id]/page.tsx`)

**Phase:**

1.  Tạo trang động `app/dai-hoi/[id]/page.tsx`.
2.  **Tạo trang tĩnh (SSG):** Export hàm `generateStaticParams()`:
    - Đọc các "key" (VII, VIII,...) từ `vnr202_content.json`.
    - Return một mảng các object `params` (ví dụ: `[{ id: 'VII' }, { id: 'VIII' }, ...]`).
3.  **Fetch dữ liệu:** Trong component, lấy `params.id`. Đọc file `vnr202_content.json` và lấy ra object dữ liệu tương ứng (ví dụ: `const data = contentData[params.id]`).
4.  **UI (Tailwind):** Hiển thị nội dung:
    - Dùng `data.heroImage` và `data.title` làm header.
    - Hiển thị `data.context` (Bối cảnh).
    - Hiển thị `data.contentHighlights` (Điểm nổi bật) dưới dạng các Thẻ (Card) hoặc bullet points.
    - Hiển thị `data.fullContentSummary` (Nội dung chính).
    - Hiển thị `data.significance` (Ý nghĩa).
    - Nhúng video từ `data.media.videoUrl` bằng thẻ `<video controls>`.

### Bước 5: Trang Quiz (`/app/quiz/[id]/page.tsx`)

**Phase:**

1.  Tạo trang động `app/quiz/[id]/page.tsx`.
2.  **Fetch dữ liệu (Server-side):** Đọc file `data/vnr202_quiz.json`.
3.  Sử dụng `params.id` để lọc (ví dụ: `data.find(item => item.DaiHoi === params.id)`). Lấy ra mảng `Questions`.
4.  **Tạo `app/components/QuizClient.tsx`** (đánh dấu `'use client'`):
    - Component này nhận `questions` (mảng câu hỏi) làm prop.
    - Sử dụng `useState` để quản lý: `currentQuestionIndex (number)`, `selectedAnswer (string)`, `showResult (boolean)`, `score (number)`.
5.  **UI/Logic (`QuizClient.tsx`):**
    - Hiển thị 1 câu hỏi tại một thời điểm (`questions[currentQuestionIndex]`).
    - Khi người dùng chọn một đáp án (Option A, B, C, D), set nó vào `selectedAnswer`.
    - Khi `selectedAnswer` thay đổi, hiển thị ngay lập tức:
      - Đáp án đúng (ví dụ: tô màu xanh lá).
      - Nếu chọn sai, tô màu đỏ cho lựa chọn của họ.
      - **Hiển thị giải thích:** `question.SourceText`.
    - Hiển thị nút "Câu tiếp theo" (chỉ kích hoạt sau khi đã chọn đáp án).
    - Khi hết câu hỏi, `setShowResult(true)` và hiển thị tổng điểm.
6.  Trên trang `page.tsx`, import và render `<QuizClient questions={...} />`.

### Bước 6: Server Actions (`/app/lib/actions.ts`)

**Phase:**

1.  Tạo file `app/lib/actions.ts` và thêm `'use server'` ở đầu file.
2.  Import `prisma` từ `lib/prisma.ts` và `revalidatePath` từ `next/cache`.
3.  **Tạo hàm `createQuestion(formData: FormData)`:**
    - Lấy dữ liệu từ `formData`: `title`, `content`, `guestName`, `guestId`, `daiHoiTag`.
    - Dùng `prisma.question.create(...)` để lưu vào database.
    - Gọi `revalidatePath('/forum')`.
    - Sử dụng `redirect('/forum')` (hoặc redirect về trang câu hỏi mới).
4.  **Tạo hàm `createAnswer(formData: FormData)`:**
    - Lấy dữ liệu: `content`, `guestName`, `guestId`, `questionId`.
    - Dùng `prisma.answer.create(...)`.
    - Gọi `revalidatePath('/forum/[questionId]')` (thay `[questionId]` bằng ID thật).
5.  **Tạo hàm `toggleReaction(formData: FormData)`:**
    - Lấy dữ liệu: `guestId`, `emoji`, `questionId` (hoặc `answerId`).
    - **Logic:**
      - Dùng `prisma.reaction.findFirst(...)` để kiểm tra xem `guestId` này đã react `emoji` này cho `questionId` (hoặc `answerId`) này chưa.
      - Nếu **tồn tại (existingReaction)**: Dùng `prisma.reaction.delete({ where: { id: existingReaction.id } })`.
      - Nếu **không tồn tại**: Dùng `prisma.reaction.create(...)`.
    - Gọi `revalidatePath` cho trang chi tiết câu hỏi.

### Bước 7: Trang Forum (Danh sách) (`/app/forum/page.tsx`)

**Phase:**

1.  Đây là một Server Component (mặc định).
2.  **Fetch dữ liệu:**
    - Dùng `prisma.question.findMany({ ... })`.
    - Sử dụng `orderBy: { createdAt: 'desc' }`.
    - Sử dụng `include: { _count: { select: { answers: true } }, reactions: true }` để lấy số lượng câu trả lời và danh sách reactions.
3.  **UI (Tailwind):**
    - Render một nút `<Link href="/forum/ask">Đặt câu hỏi mới</Link>`.
    - Map qua danh sách câu hỏi đã fetch.
    - Mỗi item là một Card, hiển thị: `question.title`, `question.guestName`, `_count.answers` (số câu trả lời), và tổng số reactions.
    - Bọc Card này trong `<Link href={\`/forum/${question.id}\`}>`.

### Bước 8: Trang Forum (Đặt câu hỏi) (`/app/forum/ask/page.tsx`)

**Phase:**

1.  Tạo component `'use client'` `app/components/QuestionForm.tsx`.
2.  **Form UI:** Tạo một form HTML với các trường:
    - `input` cho `guestName` (Tên hiển thị).
    - `input` cho `title` (Tiêu đề).
    - `textarea` cho `content` (Nội dung chi tiết).
    - `select` cho `daiHoiTag` (chọn chủ đề: VII, VIII, IX,... Chung).
    - Một `input type="hidden"` cho `guestId`.
3.  **Logic Client:**
    - Import `useGuest` hook để lấy `guestId`.
    - Dùng `useEffect` để gán `guestId` vào value của input ẩn.
    - Import `createQuestion` từ `lib/actions.ts`.
    - Gán Server Action vào form: `<form action={createQuestion}>`.
4.  Trên trang `page.tsx`, import và render `<QuestionForm />`.

### Bước 9: Trang Forum (Chi tiết) (`/app/forum/[questionId]/page.tsx`)

**Phase:**

1.  Đây là trang Server Component.
2.  **Fetch dữ liệu:**
    - Lấy `params.questionId`.
    - Dùng `prisma.question.findUniqueOrThrow({ ... })`.
    - Sử dụng `include` lồng nhau: `{ reactions: true, answers: { include: { reactions: true }, orderBy: { createdAt: 'asc' } } }`.
3.  **UI (Tailwind):**
    - **Phần 1 (Câu hỏi):** Hiển thị `question.title`, `question.content`, `question.guestName`.
    - **Phần 2 (Reactions cho câu hỏi):**
      - Tạo component `'use client'` `app/components/ReactionButtons.tsx`.
      - Component này nhận props: `targetId` (là `questionId`) và `initialReactions` (mảng `question.reactions`).
      - Component này dùng `useGuest()` để lấy `guestId`.
      - Component này có các nút (👍, 💡, 🤔). Mỗi nút là một `<form action={toggleReaction}>` chứa các input ẩn (guestId, targetId, emoji).
      - _Render `<ReactionButtons ... />` ngay dưới câu hỏi._
    - **Phần 3 (Form trả lời):**
      - Tạo component `'use client'` `app/components/AnswerForm.tsx`.
      - Tương tự `QuestionForm`, nhưng chỉ có `guestName`, `content`, và các input ẩn (`guestId`, `questionId`).
      - Sử dụng Server Action `createAnswer`.
      - _Render `<AnswerForm questionId={question.id} />`._
    - **Phần 4 (Danh sách trả lời):**
      - Map qua `question.answers`.
      - Hiển thị `answer.content`, `answer.guestName`.
      - Dưới mỗi câu trả lời, _render lại `<ReactionButtons ... />`_ (lần này truyền `targetId={answer.id}` và `initialReactions={answer.reactions}`).
