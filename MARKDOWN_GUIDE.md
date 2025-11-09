# 📝 Hướng dẫn sử dụng Markdown trong VNR202

## Giới thiệu

Hệ thống VNR202 hỗ trợ **Markdown** để định dạng nội dung trong file JSON. Điều này giúp bạn dễ dàng tạo nội dung có format đẹp mắt mà không cần viết HTML.

## 🎯 Các tính năng Markdown được hỗ trợ

### 1. **Text Formatting (Định dạng chữ)**

#### In đậm (Bold)

```markdown
**Đây là chữ in đậm**
```

Kết quả: **Đây là chữ in đậm**

#### In nghiêng (Italic)

```markdown
_Đây là chữ in nghiêng_
```

Kết quả: _Đây là chữ in nghiêng_

#### Kết hợp

```markdown
**Đây là chữ _vừa đậm vừa nghiêng_**
```

Kết quả: **Đây là chữ _vừa đậm vừa nghiêng_**

---

### 2. **Xuống hàng (Line Breaks)**

Sử dụng `\n` để xuống hàng:

```json
{
  "description": "Dòng thứ nhất\nDòng thứ hai\nDòng thứ ba"
}
```

Kết quả:

```
Dòng thứ nhất
Dòng thứ hai
Dòng thứ ba
```

---

### 3. **Headings (Tiêu đề)**

```markdown
# Tiêu đề cấp 1

## Tiêu đề cấp 2

### Tiêu đề cấp 3

#### Tiêu đề cấp 4
```

**Lưu ý**: Không nên dùng heading trong các trường ngắn như `description`. Chỉ dùng trong `fullContentSummary`.

---

### 4. **Lists (Danh sách)**

#### Danh sách không đánh số (Unordered List)

```markdown
- Item 1
- Item 2
- Item 3
  - Sub-item 3.1
  - Sub-item 3.2
```

Kết quả:

- Item 1
- Item 2
- Item 3
  - Sub-item 3.1
  - Sub-item 3.2

#### Danh sách đánh số (Ordered List)

```markdown
1. Bước đầu tiên
2. Bước thứ hai
3. Bước thứ ba
```

Kết quả:

1. Bước đầu tiên
2. Bước thứ hai
3. Bước thứ ba

---

### 5. **Links (Liên kết)**

```markdown
[Văn bản hiển thị](https://example.com)
```

Kết quả: [Văn bản hiển thị](https://example.com)

**Lưu ý**: Link sẽ tự động mở trong tab mới.

---

### 6. **Code (Mã)**

#### Inline Code

```markdown
Sử dụng `code` để highlight từ khóa
```

Kết quả: Sử dụng `code` để highlight từ khóa

#### Code Block

````markdown
```
function example() {
  console.log("Hello World");
}
```
````

---

### 7. **Blockquotes (Trích dẫn)**

```markdown
> Đây là một trích dẫn quan trọng
> có thể nhiều dòng
```

Kết quả:

> Đây là một trích dẫn quan trọng
> có thể nhiều dòng

---

### 8. **Horizontal Rule (Đường kẻ ngang)**

```markdown
---
```

Kết quả:

---

---

## 📖 Ví dụ thực tế

### Ví dụ 1: Content Highlights

```json
{
  "contentHighlights": [
    {
      "title": "6 nhiệm vụ trọng tâm",
      "description": "**Đại hội XII** xác định 6 nhiệm vụ:\n\n1. Xây dựng, chỉnh đốn Đảng\n2. Xây dựng bộ máy tinh gọn\n3. Đổi mới mô hình tăng trưởng\n4. Phát triển văn hóa, con người\n5. Giữ vững quốc phòng, an ninh\n6. Chủ động hội nhập quốc tế"
    }
  ]
}
```

**Hiển thị**:

**Đại hội XII** xác định 6 nhiệm vụ:

1. Xây dựng, chỉnh đốn Đảng
2. Xây dựng bộ máy tinh gọn
3. Đổi mới mô hình tăng trưởng
4. Phát triển văn hóa, con người
5. Giữ vững quốc phòng, an ninh
6. Chủ động hội nhập quốc tế

---

### Ví dụ 2: Full Content Summary

```json
{
  "fullContentSummary": [
    "## Văn kiện chính\n\n**Đại hội XIII** thông qua các văn kiện:\n\n- Báo cáo chính trị\n- Chiến lược phát triển KT-XH 2021-2030\n- Phương hướng 2021-2025\n\n> *Kiên định và phát triển sáng tạo chủ nghĩa Mác - Lênin*"
  ]
}
```

**Hiển thị**:

## Văn kiện chính

**Đại hội XIII** thông qua các văn kiện:

- Báo cáo chính trị
- Chiến lược phát triển KT-XH 2021-2030
- Phương hướng 2021-2025

> _Kiên định và phát triển sáng tạo chủ nghĩa Mác - Lênin_

---

### Ví dụ 3: Context với nhiều đoạn văn

```json
{
  "context": [
    "**Quốc tế**: Tình hình thế giới diễn biến phức tạp:\n\n- Cách mạng công nghiệp 4.0\n- Biến đổi khí hậu\n- Đại dịch COVID-19",
    "**Trong nước**: Sau *35 năm đổi mới*, Việt Nam đạt nhiều thành tựu:\n\n1. Vị thế quốc tế nâng cao\n2. Kinh tế phát triển\n3. Đời sống nhân dân cải thiện"
  ]
}
```

---

## 💡 Best Practices (Thực hành tốt nhất)

### ✅ NÊN làm:

1. **Sử dụng in đậm** cho từ khóa quan trọng:

   ```json
   "description": "**Đại hội XII** đánh dấu bước ngoặt"
   ```

2. **Sử dụng danh sách** để liệt kê:

   ```json
   "description": "3 nhiệm vụ:\n\n1. Xây dựng Đảng\n2. Phát triển kinh tế\n3. Hội nhập quốc tế"
   ```

3. **Xuống hàng** giữa các đoạn:

   ```json
   "description": "Đoạn 1\n\nĐoạn 2\n\nĐoạn 3"
   ```

4. **Sử dụng blockquote** cho trích dẫn:
   ```json
   "description": "> \"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh\""
   ```

### ❌ KHÔNG nên làm:

1. **Không** dùng HTML trực tiếp:

   ```json
   "description": "<b>Sai</b>" // ❌
   "description": "**Đúng**"  // ✅
   ```

2. **Không** dùng heading cấp cao trong mô tả ngắn:

   ```json
   "description": "# Tiêu đề" // ❌ (quá to)
   "description": "**Tiêu đề**" // ✅
   ```

3. **Không** quên xuống 2 dòng khi muốn tạo đoạn mới:
   ```json
   "description": "Dòng 1\nDòng 2"    // ❌ (sát nhau)
   "description": "Dòng 1\n\nDòng 2"  // ✅ (có khoảng cách)
   ```

---

## 🎨 Style tự động

Hệ thống tự động điều chỉnh style dựa vào context:

### Text trên nền sáng (mặc định)

- Text: màu xám đậm
- Link: màu đỏ
- Code: background xám nhạt

### Text trên nền tối (significance section)

- Text: màu vàng/trắng
- Link: màu vàng nhạt
- Code: background trắng trong suốt

---

## 📚 Các trường hỗ trợ Markdown

Trong file `vnr202_content.json`:

| Trường                            | Hỗ trợ Markdown | Ghi chú               |
| --------------------------------- | --------------- | --------------------- |
| `title`                           | ❌              | Plain text only       |
| `time`                            | ❌              | Plain text only       |
| `location`                        | ❌              | Plain text only       |
| `context[]`                       | ✅              | Full markdown support |
| `contentHighlights[].title`       | ❌              | Plain text only       |
| `contentHighlights[].description` | ✅              | Full markdown support |
| `fullContentSummary[]`            | ✅              | Full markdown support |
| `significance[]`                  | ✅              | Full markdown support |

Trong file `vnr202_themes.json`:

| Trường               | Hỗ trợ Markdown |
| -------------------- | --------------- |
| `title`              | ❌              |
| `description`        | ✅              |
| `timeline[].snippet` | ✅              |
