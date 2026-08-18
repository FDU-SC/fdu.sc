<script setup lang="ts">
type ContactChannel = {
  label: string
  title: string
  description: string
  href: string
  action: string
  external?: boolean
  accent: string
}

type ContactStep = {
  index: string
  title: string
  description: string
}

const focusAreas = [
  '高性能计算竞赛',
  'MPI / OpenMP',
  'CUDA / GPU 优化',
  '性能分析与调优',
  'Linux 系统与集群',
  '工程化与可复现实验'
]

const contactChannels: ContactChannel[] = [
  {
    label: 'GitHub',
    title: 'FDU-SC Organization',
    description: '我们的公开项目、训练材料等。',
    href: 'https://github.com/FDU-SC',
    action: '访问 GitHub',
    external: true,
    accent: '#2871b1'
  },
  {
    label: 'Issue',
    title: '站点仓库反馈',
    description: '关于页面信息修正、公开资料补充或其他具体问题，可以在 fdu.sc 仓库留下说明。',
    href: 'https://github.com/FDU-SC/fdu.sc/issues',
    action: '提交 Issue',
    external: true,
    accent: '#db3577'
  },
  {
    label: 'Team',
    title: '战队成员',
    description: '浏览当前成员与方向，找到相近的技术兴趣，再带着具体问题与团队沟通。',
    href: '/team-members',
    action: '查看成员',
    accent: '#2b9645'
  }
]

const contactSteps: ContactStep[] = [
  {
    index: '01',
    title: '明确主题',
    description: '先确认你想沟通的内容：技术问题、项目协作、资料补充，或是对某个方向的具体疑问。'
  },
  {
    index: '02',
    title: '带着上下文联系',
    description: '在联系时说明背景与关注点，并附上相关的链接、代码或数据，便于我们快速理解并回应。'
  },
  {
    index: '03',
    title: '通过公开渠道跟进',
    description: '我们优先在 GitHub 上公开讨论技术细节，讨论记录会保留下来，方便后续查阅与协作。'
  }
]
</script>

<template>
  <main class="fdusc-contact">
    <section class="contact-hero" aria-labelledby="contact-title">
      <div class="contact-copy">
        <p class="contact-eyebrow">Contact Us</p>
        <h1 id="contact-title">联系 FDUSC</h1>
        <p class="contact-lead">
          如果你对高性能计算、并行程序优化、系统调优或超算竞赛感兴趣，欢迎通过下列公开渠道与复旦大学 FDUSC 超算队交流。
        </p>
      </div>

      <div class="contact-panel" aria-label="团队关注方向">
        <p>Focus Areas</p>
        <div class="focus-tags">
          <span v-for="area in focusAreas" :key="area">{{ area }}</span>
        </div>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="channels-title">
      <div class="section-heading">
        <p class="section-eyebrow">Channels</p>
        <h2 id="channels-title">联系渠道</h2>
      </div>

      <div class="channels-grid">
        <article
          v-for="channel in contactChannels"
          :key="channel.title"
          class="channel-card"
          :style="{ '--channel-accent': channel.accent }"
        >
          <p class="channel-label">{{ channel.label }}</p>
          <h3>{{ channel.title }}</h3>
          <p class="channel-description">{{ channel.description }}</p>
          <a
            class="channel-link"
            :href="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noreferrer' : undefined"
          >
            {{ channel.action }}
            <span aria-hidden="true">-></span>
          </a>
        </article>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="steps-title">
      <div class="section-heading">
        <p class="section-eyebrow">How To Reach Us</p>
        <h2 id="steps-title">沟通建议</h2>
      </div>

      <div class="steps-list">
        <article v-for="step in contactSteps" :key="step.index" class="step-row">
          <div class="step-index" aria-hidden="true">{{ step.index }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.fdusc-contact {
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 24px 88px;
}

.contact-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  gap: 48px;
  align-items: end;
  padding-bottom: 44px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.contact-copy {
  min-width: 0;
}

.contact-eyebrow,
.section-eyebrow,
.channel-label {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
}

.contact-copy h1 {
  margin: 12px 0 0;
  color: var(--vp-c-text-1);
  font-size: 48px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: 0;
}

.contact-lead {
  max-width: 700px;
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.75;
}

.contact-panel {
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background:
    linear-gradient(135deg, var(--vp-c-brand-soft), transparent 56%),
    var(--vp-c-bg-soft);
}

.contact-panel p {
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 800;
  line-height: 1.4;
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.focus-tags span {
  padding: 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
}

.contact-section {
  margin-top: 44px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 20px;
}

.section-heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 28px;
  line-height: 1.25;
  font-weight: 800;
  letter-spacing: 0;
}

.channels-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.channel-card {
  --channel-accent: var(--vp-c-brand-1);
  display: flex;
  min-width: 0;
  min-height: 260px;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--channel-accent);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.channel-card:hover {
  border-color: var(--channel-accent);
  background: var(--vp-c-bg);
  transform: translateY(-2px);
}

.channel-label {
  color: var(--channel-accent);
}

.channel-card h3 {
  margin: 12px 0 0;
  color: var(--vp-c-text-1);
  font-size: 21px;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: 0;
}

.channel-description {
  margin: 14px 0 0;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.75;
}

.channel-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  margin-top: auto;
  padding-top: 22px;
  color: var(--channel-accent);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
}

.channel-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.steps-list {
  border-top: 1px solid var(--vp-c-divider);
}

.step-row {
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr);
  gap: 28px;
  padding: 24px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.step-index {
  color: var(--vp-c-brand-1);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.35;
}

.step-content h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 20px;
  line-height: 1.35;
  font-weight: 800;
  letter-spacing: 0;
}

.step-content p {
  margin: 10px 0 0;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .contact-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }

  .channels-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .channel-card {
    min-height: 0;
  }
}

@media (max-width: 640px) {
  .fdusc-contact {
    padding: 40px 24px 56px;
  }

  .contact-hero {
    padding-bottom: 30px;
  }

  .contact-copy h1 {
    font-size: 36px;
  }

  .contact-lead {
    font-size: 16px;
  }

  .contact-panel,
  .channel-card {
    padding: 20px;
  }

  .section-heading {
    display: block;
  }

  .section-heading h2 {
    margin-top: 8px;
    font-size: 24px;
  }

  .step-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }
}
</style>
