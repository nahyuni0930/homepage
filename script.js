const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "메뉴 열기");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  if (!navigation) return;
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";

  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "메뉴 닫기" : "메뉴 열기");
  navigation.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const areaData = {
  health: {
    icon: "🏃",
    title: "몸을 움직이며 건강하게 자라요",
    description:
      "감각을 활용하고 신체를 움직이는 놀이를 통해 자신의 몸을 긍정적으로 인식하고 안전한 생활 습관을 길러요.",
    activity: "음악에 맞춰 몸으로 표현하기",
  },
  language: {
    icon: "💬",
    title: "듣고 말하며 생각을 나눠요",
    description:
      "표정과 몸짓, 말과 이야기에 관심을 갖고 자신만의 방법으로 생각과 느낌을 표현해요.",
    activity: "그림책을 보고 이어서 이야기하기",
  },
  social: {
    icon: "🤝",
    title: "나와 다른 사람을 존중해요",
    description:
      "나의 감정을 이해하고 또래와 함께 놀이하며 서로 배려하고 더불어 살아가는 경험을 쌓아요.",
    activity: "친구와 함께 블록 마을 만들기",
  },
  art: {
    icon: "🎨",
    title: "아름다움을 느끼고 표현해요",
    description:
      "자연과 생활 속 아름다움을 발견하고 소리, 움직임, 미술 재료로 자유롭게 표현하는 즐거움을 느껴요.",
    activity: "자연물로 우리 반 작품 만들기",
  },
  nature: {
    icon: "🔎",
    title: "호기심을 따라 탐구해요",
    description:
      "주변의 사물과 자연을 자세히 살펴보고 비교하고 예측하면서 스스로 궁금증을 해결해 가요.",
    activity: "크기와 모양이 다른 나뭇잎 분류하기",
  },
};

const areaTabs = document.querySelectorAll(".area-tab");
const areaIcon = document.querySelector(".area-detail-icon");
const areaTitle = document.querySelector("#area-title");
const areaDescription = document.querySelector("#area-description");
const areaActivity = document.querySelector("#area-activity");

areaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = areaData[tab.dataset.area];
    if (!selected) return;

    areaTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    if (areaIcon) areaIcon.textContent = selected.icon;
    if (areaTitle) areaTitle.textContent = selected.title;
    if (areaDescription) areaDescription.textContent = selected.description;
    if (areaActivity) areaActivity.textContent = selected.activity;
  });
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const ageFilter = document.querySelector("#age-filter");
const activityAreaFilter = document.querySelector("#area-filter");
const filterReset = document.querySelector("#filter-reset");
const activityCount = document.querySelector("#activity-count");
const emptyState = document.querySelector("#empty-state");
const emptyReset = emptyState?.querySelector("button");
const playCards = [...document.querySelectorAll(".play-card")];

function applyActivityFilters() {
  if (!ageFilter || !activityAreaFilter || playCards.length === 0) return;

  const selectedAge = ageFilter.value;
  const selectedArea = activityAreaFilter.value;
  let visibleCount = 0;

  playCards.forEach((card) => {
    const matchesAge = selectedAge === "all" || card.dataset.age === selectedAge;
    const matchesArea =
      selectedArea === "all" || card.dataset.area === selectedArea;
    const isVisible = matchesAge && matchesArea;

    card.classList.toggle("filtered-out", !isVisible);
    card.setAttribute("aria-hidden", String(!isVisible));
    if (isVisible) visibleCount += 1;
  });

  if (activityCount) {
    activityCount.innerHTML = `<strong>${visibleCount}개</strong>의 놀이를 찾았어요`;
  }
  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

function resetActivityFilters() {
  if (!ageFilter || !activityAreaFilter) return;
  ageFilter.value = "all";
  activityAreaFilter.value = "all";
  applyActivityFilters();
  ageFilter.focus();
}

ageFilter?.addEventListener("change", applyActivityFilters);
activityAreaFilter?.addEventListener("change", applyActivityFilters);
filterReset?.addEventListener("click", resetActivityFilters);
emptyReset?.addEventListener("click", resetActivityFilters);

const resourceFilterButtons = [
  ...document.querySelectorAll("[data-resource-filter]"),
];
const resourceItems = [...document.querySelectorAll(".resource-item")];
const resourceCount = document.querySelector("#resource-count");

resourceFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedAudience = button.dataset.resourceFilter;
    let visibleCount = 0;

    resourceFilterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    resourceItems.forEach((item) => {
      const isVisible =
        selectedAudience === "all" || item.dataset.audience === selectedAudience;
      item.classList.toggle("filtered-out", !isVisible);
      item.setAttribute("aria-hidden", String(!isVisible));
      if (isVisible) visibleCount += 1;
    });

    if (resourceCount) {
      resourceCount.innerHTML = `<strong>${visibleCount}개</strong>의 자료가 있어요`;
    }
  });
});

document.querySelector("#print-resources")?.addEventListener("click", () => {
  window.print();
});

let printDetailStates = [];

window.addEventListener("beforeprint", () => {
  const printableDetails = [
    ...document.querySelectorAll(".resource-item:not(.filtered-out) details"),
  ];
  printDetailStates = printableDetails.map((detail) => detail.open);
  printableDetails.forEach((detail) => {
    detail.open = true;
  });
});

window.addEventListener("afterprint", () => {
  const printableDetails = [
    ...document.querySelectorAll(".resource-item:not(.filtered-out) details"),
  ];
  printableDetails.forEach((detail, index) => {
    detail.open = printDetailStates[index] ?? false;
  });
  printDetailStates = [];
});
