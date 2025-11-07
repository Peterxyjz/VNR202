"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export function useGuest() {
  const [guestId, setGuestId] = useState<string | null>(null);

  useEffect(() => {
    // Chỉ chạy trên client-side
    const storedGuestId = localStorage.getItem("guestId");

    if (storedGuestId) {
      // Nếu đã có guestId trong localStorage, sử dụng nó
      setGuestId(storedGuestId);
    } else {
      // Nếu chưa có, tạo mới một UUID và lưu vào localStorage
      const newGuestId = uuidv4();
      localStorage.setItem("guestId", newGuestId);
      setGuestId(newGuestId);
    }
  }, []);

  return { guestId };
}
