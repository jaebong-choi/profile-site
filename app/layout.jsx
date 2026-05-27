import "./globals.css";

export const metadata = {
  title: "최재봉 상담팀장 | 종로유학원 대구지사",
  description:
    "17년차 유학 전문가 최재봉 상담팀장의 해외 대학 진학, 어학연수, 조기유학, 캠프, 비자 상담 안내 페이지입니다.",
  openGraph: {
    title: "최재봉 상담팀장 | 종로유학원 대구지사",
    description:
      "미국, 영국, 캐나다, 호주 대학 진학과 어학연수, 조기유학, 캠프, 비자까지 1:1 맞춤 상담.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
