import Image from "next/image";
import {
  ArrowRight,
  Award,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  PlaneTakeoff,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const reserveUrl = "https://www.coei.com/info/consult/reserve.php";
const branchUrl = "https://www.coei.com/info/branches/domestic.php?BranchNo=31";
const naverUrl = "https://naver.me/xrzgIYvx";

const universityCountries = [
  {
    country: "미국",
    text: "커뮤니티 컬리지, 주립대, 편입, 조건부 입학까지 학생 성향에 맞춘 경로를 설계합니다.",
  },
  {
    country: "영국",
    text: "파운데이션, 학부, 석사 예비과정, 전공별 진학 전략을 현실적인 일정으로 정리합니다.",
  },
  {
    country: "캐나다",
    text: "컬리지, 공립대, Co-op 과정과 졸업 후 진로까지 함께 고려해 상담합니다.",
  },
  {
    country: "호주",
    text: "어학, 디플로마, 학부, 대학원 진학과 비자 흐름을 한 번에 점검합니다.",
  },
];

const programItems = [
  {
    icon: Languages,
    title: "어학연수",
    text: "도시, 학교 분위기, 예산, 숙소, 개강일을 비교해 목적에 맞는 어학연수 플랜을 제안합니다.",
  },
  {
    icon: School,
    title: "조기유학",
    text: "학생의 학업 성향과 보호자 계획을 기준으로 학교 선택, 지역, 생활 관리 포인트를 정리합니다.",
  },
  {
    icon: PlaneTakeoff,
    title: "캠프",
    text: "방학 기간, 안전 관리, 영어 노출도, 액티비티 구성을 비교해 맞춤형 캠프를 안내합니다.",
  },
  {
    icon: FileCheck2,
    title: "비자 상담",
    text: "국가별 준비 서류, 재정 증빙, 인터뷰 여부, 일정 리스크를 사전에 체크합니다.",
  },
];

const processItems = [
  "목표 국가와 학업 목적 확인",
  "성적, 영어 점수, 예산, 일정 진단",
  "학교와 과정 후보 비교",
  "입학 지원 및 서류 준비",
  "비자, 출국 OT, 현지 적응 안내",
];

const reviews = [
  {
    title: "출국 전 준비가 든든했어요",
    text: "서류 준비부터 OT까지 필요한 내용을 빠짐없이 짚어줘 출국 전 불안이 많이 줄었다는 후기가 많습니다.",
  },
  {
    title: "답변이 빠르고 설명이 쉬워요",
    text: "처음 유학을 준비하는 학생과 보호자도 이해할 수 있게 국가별 차이와 절차를 차분히 설명합니다.",
  },
  {
    title: "수속 흐름을 끝까지 챙겨줘요",
    text: "상담 이후에도 지원, 비자, 출국 전 체크리스트까지 이어지는 관리에 만족했다는 반응이 이어집니다.",
  },
];

const stats = [
  { value: "17년차", label: "유학 상담 경력" },
  { value: "5000건+", label: "누적 수속 횟수" },
  { value: "520+", label: "방문자·블로그 후기" },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-brand-red">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-brand-red/20 sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-brand-red text-white shadow-button hover:bg-red-700"
      : "border border-neutral-300 bg-white text-brand-dark hover:border-brand-dark";

  return (
    <a className={`${base} ${styles} ${className}`} href={href} {...props}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
          <a href="#top" className="flex items-center gap-3" aria-label="맨 위로 이동">
            <Image
              src="/assets/chongro-logo-transparent.png"
              width={240}
              height={72}
              alt="종로유학원"
              className="h-auto w-28 sm:w-36"
              priority
            />
            <span className="hidden border-l border-neutral-200 pl-3 text-sm font-black text-brand-dark sm:inline">
              대구지사
            </span>
          </a>
          <div className="hidden items-center gap-1 text-sm font-extrabold text-neutral-600 md:flex">
            <a className="rounded-lg px-3 py-2 hover:bg-neutral-100" href="#expert">
              전문가
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-neutral-100" href="#countries">
              국가 상담
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-neutral-100" href="#process">
              절차
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-neutral-100" href="#contact">
              문의
            </a>
          </div>
          <ButtonLink href="#contact" className="min-h-10 px-4 py-2 text-sm">
            상담 문의
          </ButtonLink>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-[94svh] bg-brand-paper pt-28 sm:pt-32 lg:flex lg:items-center"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-white/70" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 hidden h-2/3 w-2/5 bg-brand-red lg:block" aria-hidden="true" />
        <div className="absolute right-0 top-24 hidden h-[calc(100%-6rem)] w-[48%] bg-white lg:block" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-12 lg:grid-cols-[1fr_0.88fr] lg:items-end lg:pb-0">
          <div className="max-w-3xl pb-4 lg:pb-20">
            <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-red-100 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-red shadow-sm sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Chongro Overseas Educational Institute
            </p>
            <h1 className="text-4xl font-black leading-[1.08] text-brand-dark sm:text-6xl lg:text-7xl">
              대구에서 시작하는
              <span className="block text-brand-red">해외 대학·유학 상담</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 sm:text-xl sm:leading-9">
              17년차 유학 전문가 최재봉 상담팀장이 미국, 영국, 캐나다, 호주 대학 진학부터
              어학연수, 조기유학, 캠프, 비자까지 현실적인 로드맵을 제안합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={reserveUrl} className="w-full sm:w-auto" target="_blank" rel="noreferrer">
                상담 예약하기 <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="tel:01085294318" variant="secondary" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                전화 상담
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 sm:max-w-2xl">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <dt className="text-xs font-bold text-neutral-500">{item.label}</dt>
                  <dd className="mt-1 text-2xl font-black text-brand-dark sm:text-3xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:max-w-none lg:self-end">
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-white lg:translate-y-8">
              <Image
                src="/assets/choi-jaebong-upscaled.png"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                alt="최재봉 종로유학원 대구지사 상담팀장"
                className="scale-[1.22] object-cover object-center"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-4 z-20 rounded-lg border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur sm:left-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-red">
                Consultant
              </p>
              <p className="mt-1 text-lg font-black text-brand-dark">최재봉 상담팀장</p>
              <p className="text-sm font-bold text-neutral-600">종로유학원 대구지사</p>
            </div>
          </div>
        </div>
      </section>

      <section id="expert" className="section-anchor bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-brand-red">
              17년차 유학 전문가
            </p>
            <h2 className="text-3xl font-black leading-tight text-brand-dark sm:text-5xl">
              상담부터 출국 준비까지 흐름을 아는 전문가와 시작하세요.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-neutral-700 sm:text-lg">
            <p>
              유학 상담은 학교 이름을 나열하는 일이 아니라 학생의 목표, 성적, 영어 수준,
              예산, 가족의 계획을 함께 놓고 가능한 선택지를 좁혀가는 과정입니다.
            </p>
            <p>
              최재봉 상담팀장은 대학 진학, 어학연수, 조기유학 상담 경험을 바탕으로
              지원 가능성, 일정, 서류, 비자 준비를 한 번에 이해할 수 있도록 안내합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="countries" className="section-anchor bg-brand-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="University Pathway"
            title="미국·영국·캐나다·호주 해외 대학 진학 상담"
            description="국가별 입학 제도와 졸업 후 진로, 비용, 영어 준비 기간을 비교해 학생에게 가장 현실적인 진학 경로를 찾습니다."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {universityCountries.map((item) => (
              <article key={item.country} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark">{item.country}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Study Abroad Programs"
            title="어학연수, 조기유학, 캠프, 비자까지 한 번에 상담"
            description="학교 선택만큼 중요한 생활, 숙소, 안전, 서류, 출국 준비까지 단계별로 점검합니다."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                  <Icon className="mb-5 h-8 w-8 text-brand-red" />
                  <h3 className="text-xl font-black text-brand-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-red-300">
              British Council Certified
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              영국문화원 인증 자격 보유
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/10 p-6">
              <Award className="mb-4 h-8 w-8 text-brand-gold" />
              <h3 className="text-xl font-black">UK Agent & Counsellor Training</h3>
              <p className="mt-3 leading-7 text-neutral-300">
                영국 유학 상담에 필요한 기본 구조와 학생 안내 기준을 갖춘 상담 역량을 강조합니다.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/10 p-6">
              <ShieldCheck className="mb-4 h-8 w-8 text-brand-gold" />
              <h3 className="text-xl font-black">검증된 상담 기준</h3>
              <p className="mt-3 leading-7 text-neutral-300">
                학교 선택, 지원 일정, 비자 준비에서 확인해야 할 요소를 체계적으로 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-anchor bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Consulting Process"
            title="상담 프로세스"
            description="막연한 유학 고민을 국가, 과정, 일정, 서류, 출국 준비 순서로 정리합니다."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {processItems.map((item, index) => (
              <article key={item} className="rounded-lg border border-neutral-200 bg-brand-paper p-5">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-black text-brand-red">STEP {index + 1}</span>
                  <ClipboardCheck className="h-5 w-5 text-neutral-500" />
                </div>
                <h3 className="text-lg font-black leading-snug text-brand-dark">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Reviews"
            title="후기로 확인하는 대구지사 상담 경험"
            description="네이버 방문자 리뷰와 블로그 후기에 자주 보이는 장점을 핵심만 정리했습니다."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex gap-1 text-brand-gold" aria-label="별점">
                  {[0, 1, 2, 3, 4].map((item) => (
                    <Star key={item} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-black text-brand-dark">{review.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{review.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold text-neutral-700">
              방문자 리뷰 76건, 블로그 리뷰 444건 기준으로 상담 경험을 요약했습니다.
            </p>
            <ButtonLink href={naverUrl} variant="secondary" target="_blank" rel="noreferrer">
              네이버 후기 보기 <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-brand-red py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-white/75">
              KakaoTalk CTA
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              카카오톡으로 빠르게 상담을 시작하세요.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              카카오톡 ID <strong className="text-white">cjbong23</strong>으로 문의하거나 아래 폼을 남기면
              대구지사 상담팀이 순서대로 확인합니다.
            </p>
          </div>
          <ButtonLink href="#contact" variant="secondary" className="bg-white">
            <MessageCircle className="h-5 w-5" />
            문의 남기기
          </ButtonLink>
        </div>
      </section>

      <section id="contact" className="section-anchor bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-brand-red">
              Contact
            </p>
            <h2 className="text-3xl font-black leading-tight text-brand-dark sm:text-5xl">
              지금 상담 가능한 일정과 국가를 남겨주세요.
            </h2>
            <div className="mt-8 space-y-4">
              <a className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4" href="tel:01085294318">
                <Phone className="mt-1 h-5 w-5 text-brand-red" />
                <span>
                  <strong className="block text-brand-dark">전화 상담</strong>
                  <span className="text-neutral-600">010-8529-4318</span>
                </span>
              </a>
              <a className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4" href={branchUrl}>
                <MapPin className="mt-1 h-5 w-5 text-brand-red" />
                <span>
                  <strong className="block text-brand-dark">대구지사</strong>
                  <span className="text-neutral-600">대구광역시 중구 중앙대로 383 2층</span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
                <MessageCircle className="mt-1 h-5 w-5 text-brand-red" />
                <span>
                  <strong className="block text-brand-dark">카카오톡</strong>
                  <span className="text-neutral-600">cjbong23</span>
                </span>
              </div>
            </div>
          </div>

          <form
            action={reserveUrl}
            method="get"
            target="_blank"
            className="rounded-lg border border-neutral-200 bg-brand-paper p-5 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-brand-dark">이름</span>
                <input
                  name="name"
                  required
                  className="h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10"
                  placeholder="홍길동"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-brand-dark">연락처</span>
                <input
                  name="phone"
                  required
                  className="h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10"
                  placeholder="010-0000-0000"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-brand-dark">관심 국가</span>
                <select
                  name="country"
                  className="h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  <option>미국</option>
                  <option>영국</option>
                  <option>캐나다</option>
                  <option>호주</option>
                  <option>기타</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-brand-dark">상담 분야</span>
                <select
                  name="program"
                  className="h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  <option>해외 대학 진학</option>
                  <option>어학연수</option>
                  <option>조기유학</option>
                  <option>캠프</option>
                  <option>비자 상담</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-black text-brand-dark">문의 내용</span>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10"
                placeholder="희망 출국 시기, 현재 학년/학력, 준비 중인 시험, 궁금한 점을 적어주세요."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-5 py-3 text-base font-black text-white shadow-button transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-brand-red/20"
            >
              상담 예약 페이지로 보내기 <Send className="h-5 w-5" />
            </button>
            <p className="mt-4 text-sm leading-6 text-neutral-500">
              제출 시 종로유학원 공식 상담 예약 페이지가 새 창으로 열립니다.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-brand-dark px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Image
              src="/assets/chongro-logo-transparent.png"
              width={240}
              height={72}
              alt="종로유학원"
              className="h-auto w-36 brightness-0 invert"
            />
            <p className="mt-3 text-sm text-neutral-400">
              최재봉 상담팀장 · 종로유학원 대구지사
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-300 sm:text-right">
            <span>대구광역시 중구 중앙대로 383 2층</span>
            <span>Tel. 010-8529-4318 · Kakao. cjbong23</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
