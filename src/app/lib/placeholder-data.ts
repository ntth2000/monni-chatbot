// dummy-data

export const chatData = [
  {
    id: 1,
    question:
      "Hey MonniGPT, mình muốn hỏi là bạn có thể giúp mình theo dõi thu nhập và chi tiêu hàng ngày không? Mình muốn ghi lại các khoản mình đã tiêu trong ngày hôm nay.",
    answer:
      "Dĩ nhiên rồi! Bạn chỉ cần nói mình đã chi bao nhiêu và vào việc gì, ví dụ như 'Hôm nay mình tiêu 150k ăn trưa'. Mình sẽ ghi lại giúp bạn ngay.",
  },
  {
    id: 2,
    question:
      "Chào bạn, mình có một khoản chi tiêu vào tuần trước nhưng quên ghi lại. Bây giờ mình có thể thêm khoản chi đó vào hệ thống không và làm sao để ghi đúng ngày?",
    answer:
      "Hoàn toàn có thể nhé! Bạn chỉ cần nói rõ ngày tháng và nội dung chi tiêu, ví dụ: 'Thứ Sáu tuần trước mình tiêu 200k uống cà phê'. Mình sẽ lưu lại đúng ngày đó.",
  },
  {
    id: 3,
    question:
      "MonniGPT ơi, bạn có thể thống kê giúp mình tổng chi tiêu trong tháng trước là bao nhiêu được không? Mình đang muốn xem lại để cân đối tài chính.",
    answer:
      "Ok luôn! Chỉ cần bạn nói rõ khoảng thời gian, ví dụ như 'tổng chi tháng 3', mình sẽ liệt kê tổng số tiền bạn đã chi và chia theo từng danh mục cho bạn.",
  },
  {
    id: 4,
    question:
      "Nếu mình ghi nhầm số tiền hoặc nhầm danh mục khi nhập chi tiêu thì mình có thể chỉnh sửa lại được không vậy? Có cần phải xóa rồi ghi lại không?",
    answer:
      "Bạn không cần xóa đâu. Chỉ cần bảo mình biết bạn muốn chỉnh gì, ví dụ: 'Sửa tiền cà phê hôm qua từ 50k thành 45k', là mình sửa ngay cho bạn.",
  },
  {
    id: 5,
    question:
      "Mình có thể xem lại toàn bộ các giao dịch đã ghi trong tuần này được không? Mình muốn rà soát lại xem có chi khoản nào dư không để điều chỉnh lại kế hoạch.",
    answer:
      "Được luôn! Bạn chỉ cần nói 'hiển thị giao dịch tuần này' hoặc cụ thể hơn như 'từ thứ 2 đến hôm nay', mình sẽ hiển thị toàn bộ chi tiêu cho bạn.",
  },
  {
    id: 6,
    question: "What currencies can I use?",
    answer:
      "Currently, MonniGPT works best with Vietnamese Dong (VND), but multi-currency support is on the way!",
  },
  {
    id: 7,
    question: "Can I edit a mistake?",
    answer:
      "Totally. You can update any amount, category, or date of a transaction.",
  },
  {
    id: 8,
    question: "What are spending categories?",
    answer:
      "They help organize your expenses. I use categories like Food, Bills, Entertainment, Transport, and more.",
  },
  {
    id: 9,
    question: "Summarize my weekly spending.",
    answer:
      "Sure! I’ll give you a quick overview of how much you spent and where your money went.",
  },
  {
    id: 10,
    question: "Is this available on my phone?",
    answer:
      "It’s a web app for now, but we plan to build mobile apps for iOS and Android soon.",
  },
  {
    id: 11,
    question: "Can I export my records?",
    answer:
      "Export features like Excel or CSV aren’t available yet, but it’s on the roadmap.",
  },
  {
    id: 12,
    question: "Is my data secure?",
    answer:
      "Yes. All your data is stored securely, and we never share it with third parties.",
  },
  {
    id: 13,
    question: "Can I ask non-finance stuff?",
    answer:
      "You can, but MonniGPT focuses on finance. I’ll politely guide the conversation back if it goes off-topic.",
  },
  {
    id: 14,
    question: "How do I set goals?",
    answer:
      "This feature isn't available yet, but it's something we’re exploring for future updates.",
  },
  {
    id: 15,
    question: "Add an expense from last Friday.",
    answer:
      "Sure. Just say what it was and how much you spent. I’ll save it with the correct date.",
  },
  {
    id: 16,
    question: "Can I see all my expenses?",
    answer:
      "Of course. You can ask to see all transactions, or filter by date, category, or amount.",
  },
  {
    id: 17,
    question: "Change a category, is that possible?",
    answer:
      "Yup! Just tell me which transaction to change and the new category you want.",
  },
  {
    id: 18,
    question: "Does MonniGPT handle multiple accounts?",
    answer:
      "Currently no, but multi-account support is one of our most requested features — coming soon!",
  },
  {
    id: 19,
    question: "I typed the wrong number. Can I fix it?",
    answer:
      "No problem! Just tell me the correct amount or transaction, and I’ll update it right away.",
  },
  {
    id: 20,
    question: "Do I need to sign up?",
    answer:
      "Yes, you’ll need an account so I can store your data and help you track it over time.",
  },
];

export const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

export const dummySpendings = [
  {
    id: "de6be3bb-b3dc-43e4-bf13-c4ad77c595fd",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 120000,
    category: "Food & Drink",
    description: "Lunch at local restaurant",
    date: "2025-04-01",
  },
  {
    id: "87405767-0f86-4e49-a42f-f1cf27c3cc20",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 55000,
    category: "Entertainment",
    description: "Movie ticket",
    date: "2025-04-02",
  },
  {
    id: "0cb7747f-eaa0-42ef-97a1-3627b63fbe18",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 25000,
    category: "Transportation",
    description: "Bus fare",
    date: "2025-04-02",
  },
  {
    id: "60aebebb-b7c3-4a76-bb3e-1268d689c42e",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 300000,
    category: "Shopping",
    description: "Bought a jacket",
    date: "2025-04-03",
  },
  {
    id: "fc0e22bb-21f6-4148-bda4-3c49ad4b292a",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 98000,
    category: "Food & Drink",
    description: "Dinner at a restaurant",
    date: "2025-04-04",
  },
  {
    id: "236c3a0a-c258-4ee9-a1e3-3f87c87b4e4e",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 15000,
    category: "Café",
    description: "Morning coffee",
    date: "2025-04-04",
  },
  {
    id: "01cb1460-2ea7-4976-8935-1b1cfe2bc123",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 180000,
    category: "Health",
    description: "General health checkup",
    date: "2025-04-05",
  },
  {
    id: "e0ebc2dc-b9e6-464e-8993-9e30d0b9d1f2",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 60000,
    category: "Transportation",
    description: "Grab ride home",
    date: "2025-04-06",
  },
  {
    id: "a2bbda10-7289-493b-83b2-e2fe45b11b15",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 100000,
    category: "Education",
    description: "Bought a skill book",
    date: "2025-04-07",
  },
  {
    id: "b34946e4-1df7-4dc5-9e4d-1b6769303bb6",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    amount: 20000,
    category: "Food & Drink",
    description: "Afternoon snack",
    date: "2025-04-08",
  },
];

export const dummyChatHistory = [
  {
    id: "e22e4f81-0df9-4e14-a899-9d8a3ff6f123",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    question: "How much did I spend last week?",
    answer: "You spent 1,200,000 VND last week.",
    timestamp: new Date("2025-04-20T10:00:00Z"),
  },
  {
    id: "91d1eabb-4e79-4f17-9c75-748fa3e54c21",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    question: "What is my biggest expense this month?",
    answer: "Your biggest expense this month is rent: 5,000,000 VND.",
    timestamp: new Date("2025-04-19T15:30:00Z"),
  },
  {
    id: "3dca3c42-8c12-4a7f-9d79-7e3dd22e4b64",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    question: "Show me a summary of April expenses.",
    answer: "In April, you spent a total of 7,800,000 VND.",
    timestamp: new Date("2025-04-18T09:15:00Z"),
  },
];
