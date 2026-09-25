import { BrandMark } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";
import { InfoCard } from "@/components/ui/info-card";

const curriculumCards = [
  {
    eyebrow: "0~2세",
    title: "표준보육과정",
    description:
      "영아의 일상과 놀이에서 발견되는 배움을 연령별로 이해해요.",
    tone: "mint" as const,
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M5 18.5c3.2-1.1 5.5-.6 7 1.5V6.5C10.5 4.8 8.2 4.3 5 5.3v13.2Zm14 0c-3.2-1.1-5.5-.6-7 1.5V6.5c1.5-1.7 3.8-2.2 7-1.2v13.2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    eyebrow: "3~5세",
    title: "누리과정",
    description:
      "유아가 놀이의 주인이 되어 탐색하고 표현하는 과정을 살펴봐요.",
    tone: "yellow" as const,
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M12 4.5a4 4 0 0 0-2.3 7.3c.8.6 1.3 1.4 1.3 2.2h2c0-.8.5-1.6 1.3-2.2A4 4 0 0 0 12 4.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M10 17h4m-3 2h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line/80 bg-background/90 backdrop-blur">
        <div className="page-shell flex min-h-20 items-center justify-between gap-6">
          <BrandMark />
          <ButtonLink href="#curriculum" variant="ghost" className="hidden sm:flex">
            교육과정 둘러보기
          </ButtonLink>
        </div>
      </header>

      <main className="flex-1">
        <section className="page-shell grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow">
              <span className="size-2 rounded-full bg-sun" aria-hidden="true" />
              놀이로 자라는 오늘
            </p>
            <h1 className="mt-5 max-w-2xl text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.08] font-extrabold tracking-[-0.06em]">
              아이의 놀이를 읽는
              <span className="block text-brand">따뜻한 교육 안내서</span>
            </h1>
            <p className="body-copy mt-6 max-w-xl text-lg">
              누리과정과 표준보육과정을 어렵지 않게 이해하고, 아이의
              하루에 맞는 놀이 아이디어를 찾아보세요.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#curriculum">교육과정 살펴보기</ButtonLink>
              <ButtonLink href="#areas" variant="secondary">
                5개 영역 알아보기
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
            <div className="absolute -top-5 -left-4 size-20 rotate-12 rounded-[2rem] bg-sun-soft" />
            <div className="absolute -right-3 -bottom-5 size-24 rounded-full bg-sky" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-brand-soft p-7 shadow-soft sm:p-10">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_12px_32px_rgba(54,81,68,0.08)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sun-soft px-3 py-1 text-xs font-bold text-brand-strong">
                    오늘의 배움
                  </span>
                  <span className="text-2xl">🌱</span>
                </div>
                <p className="mt-8 text-sm font-bold text-brand">자연탐구</p>
                <p className="mt-2 text-2xl leading-snug font-extrabold tracking-[-0.03em]">
                  햇살 아래에서
                  <br />나뭇잎을 관찰해요
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="h-2 flex-1 rounded-full bg-brand" />
                  <span className="h-2 flex-1 rounded-full bg-sun" />
                  <span className="h-2 flex-1 rounded-full bg-peach" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="curriculum"
          className="border-y border-line/70 bg-surface-soft py-16 lg:py-20"
        >
          <div className="page-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">교육과정 한눈에 보기</p>
              <h2 className="section-title mt-3">아이의 나이에 맞춰 시작해요</h2>
              <p className="body-copy mt-4">
                두 교육과정의 공통된 방향과 연령별 특징을 명확하게
                구분했습니다.
              </p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {curriculumCards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="page-shell py-16 lg:py-20">
          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-10">
            <p className="eyebrow">함께 이어지는 5개 영역</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "신체운동·건강",
                "의사소통",
                "사회관계",
                "예술경험",
                "자연탐구",
              ].map((area, index) => (
                <span
                  key={area}
                  className={`rounded-full px-4 py-2.5 text-sm font-bold ${
                    [
                      "bg-brand-soft",
                      "bg-sun-soft",
                      "bg-sky",
                      "bg-peach",
                      "bg-surface-soft",
                    ][index]
                  }`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="page-shell flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <BrandMark />
          <p>아이의 놀이와 배움을 함께 바라봅니다.</p>
        </div>
      </footer>
    </div>
  );
}
