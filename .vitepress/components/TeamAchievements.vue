<script setup lang="ts">
const achievements = [
  {
    date: '2026.05',
    kicker: 'ASC26',
    title: 'First Prize & Application Innovation & Most Popular Team',
    current: true
  }
]
</script>

<template>
  <main class="fdusc-achievements">
    <section class="achievements-hero" aria-labelledby="achievements-title">
      <p class="achievements-eyebrow">Team Achivements</p>
      <h1 id="achievements-title">团队成就</h1>
    </section>

    <section class="achievements-timeline" aria-label="团队成就时间线">
      <article
        v-for="achievement in achievements"
        :key="`${achievement.date}-${achievement.title}`"
        class="timeline-entry"
        :class="{ 'is-current': achievement.current }"
      >
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-date">{{ achievement.date }}</div>
        <div class="timeline-card">
          <p class="timeline-kicker">{{ achievement.kicker }}</p>
          <h2>{{ achievement.title }}</h2>
          <p>{{ achievement.description }}</p>
        </div>
      </article>

      <article class="timeline-entry is-founding">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-date">2025.11</div>
        <div class="timeline-card">
          <p class="timeline-kicker">Foundation</p>
          <h2>战队成立</h2>
          <p>
            复旦大学 FDUSC 超算队正式成立，围绕高性能计算、并行程序优化和超算竞赛展开长期建设。
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.fdusc-achievements {
  --timeline-gutter: 164px;
  --timeline-line-left: calc(var(--timeline-gutter) + 18px);
  max-width: 960px;
  margin: 0 auto;
  padding: 72px 24px 88px;
}

.achievements-hero {
  padding-bottom: 40px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.achievements-eyebrow {
  margin: 0 0 12px;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
}

.achievements-hero h1 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 48px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: 0;
}

.achievements-timeline {
  position: relative;
  margin-top: 36px;
}

.achievements-timeline::before {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: var(--timeline-line-left);
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--vp-c-brand-1),
    var(--vp-c-divider) 52%,
    var(--vp-c-brand-soft)
  );
  content: "";
}

.timeline-entry {
  position: relative;
  display: grid;
  grid-template-columns: var(--timeline-gutter) minmax(0, 1fr);
  column-gap: 36px;
  padding-bottom: 34px;
}

.timeline-entry:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  top: 20px;
  left: var(--timeline-line-left);
  width: 16px;
  height: 16px;
  border: 3px solid var(--vp-c-bg);
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
  transform: translateX(-7px);
}

.timeline-date {
  padding-top: 16px;
  color: var(--vp-c-text-2);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  text-align: right;
}

.timeline-card {
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.timeline-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  transform: translateY(-2px);
}

.timeline-kicker {
  margin: 0 0 8px;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
}

.timeline-card h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 22px;
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: 0;
}

.timeline-card p {
  margin: 12px 0 0;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.75;
}

.timeline-entry.is-current .timeline-card {
  border-color: var(--vp-c-brand-2);
  background:
    linear-gradient(135deg, var(--vp-c-brand-soft), transparent 48%),
    var(--vp-c-bg-soft);
}

.timeline-entry.is-founding .timeline-marker {
  background: var(--vp-c-text-2);
  box-shadow: 0 0 0 4px var(--vp-c-default-soft);
}

.timeline-entry.is-founding .timeline-card {
  background: var(--vp-c-default-soft);
}

@media (max-width: 720px) {
  .fdusc-achievements {
    --timeline-gutter: 22px;
    --timeline-line-left: var(--timeline-gutter);
    padding: 40px 24px 56px;
  }

  .achievements-hero {
    padding-bottom: 30px;
  }

  .achievements-hero h1 {
    font-size: 36px;
  }

  .timeline-entry {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 10px;
    padding-left: 48px;
  }

  .timeline-date {
    padding-top: 0;
    text-align: left;
  }

  .timeline-card {
    padding: 20px;
  }

  .timeline-card h2 {
    font-size: 20px;
  }
}
</style>
