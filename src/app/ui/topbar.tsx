"use client";

import { useState } from "react";
import { logoutAction } from "../lib/api/auth";
import Logo from "./icons/logo";

export default function TopBar() {
  const [showIntroModal, setShowIntroModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutAction();
    } catch (e: any) {
      console.error("Logout failed:", e);
    }
    window.location.href = "/login?fromLogout=true";
  };

  return (
    <>
      <header className="h-15 md:h-18 fixed w-full z-20 border-b border-gray-200 bg-white">
        <div className="w-full h-full px-4 md:px-8 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse">
            <Logo width="20px" height="20px" />
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-primary-600 hover:cursor-default">
              Monni
            </span>
          </div>
          <div className="flex flex-row md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <button
              type="button"
              onClick={() => setShowIntroModal(true)}
              className="text-sm cursor-pointer hover:underline mr-7"
            >
              Giới thiệu
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className={`text-white bg-primary hover:bg-secondary font-medium rounded-full px-3 md:px-5 py-2.5 text-center cursor-pointer`}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      {showIntroModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 opacity-60 bg-black"
            onClick={() => setShowIntroModal(false)}
          ></div>
          <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-lg p-6 z-20">
            <h2 className="text-xl font-semibold mb-4">Giới thiệu</h2>
            <div className="text-gray-700 text-sm mb-4 space-y-2">
              <p>
                Tớ là Monni - trợ lý tài chính cá nhân, giúp bạn ghi lại và theo
                dõi các khoản chi tiêu hằng ngày 💰
              </p>

              <p>Với tớ, bạn có thể:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 list-none">
                <li>📝 Ghi lại các khoản chi tiêu</li>
                <li>✏️ Cập nhật hoặc xóa các giao dịch đã ghi trước đó</li>
                <li>
                  📊 Xem tổng chi tiêu theo khoảng thời gian (ngày, tuần, tháng,
                  hoặc tùy chọn)
                </li>
                <li>🔍 Xem chi tiết các khoản chi theo danh mục hoặc mô tả</li>
              </ul>

              <p>
                Ví dụ, bạn chỉ cần nói:{" "}
                <em>“Hôm nay mua cà phê 25.000, gửi xe 5.000”</em> — tớ sẽ tự
                động ghi lại giúp bạn 😊
              </p>
            </div>

            <div className="flex justify-end mt-2">
              <button
                onClick={() => setShowIntroModal(false)}
                className="text-sm bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
