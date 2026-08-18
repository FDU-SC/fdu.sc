<script setup lang="ts">
type TeamMember = {
  name: string
  nickname: string
  email: string
  role: string
  focus: string[]
  motto: string
  avatar?: string
  accent: string
}

const members: TeamMember[] = [
  {
    name: '张文治',
    nickname: 'AkiraSalvare',
    email: 'akira@fdu.sc',
    role: '队长',
    focus: ['算子', 'DevOps', '推理全栈'],
    motto: 'Nya~',
    avatar: '/avatar/akira.jpg',
    accent: '#f5abb9'
  },
  {
    name: '成员姓名',
    nickname: 'cuda-runner',
    email: 'cuda.runner@fdusc.org',
    role: 'GPU 优化',
    focus: ['CUDA', '算子优化', '异构计算'],
    motto: '让吞吐、延迟和可读性同时说得过去。',
    accent: '#2b9645'
  },
  {
    name: '成员姓名',
    nickname: 'mpi-link',
    email: 'mpi.link@fdusc.org',
    role: '并行程序设计',
    focus: ['MPI', 'OpenMP', '通信优化'],
    motto: '先把瓶颈量出来，再谈优化。',
    accent: '#44b8da'
  },
  {
    name: '成员姓名',
    nickname: 'bench-lab',
    email: 'bench.lab@fdusc.org',
    role: 'Benchmark / 工程支持',
    focus: ['Benchmark', 'CI', '可复现实验'],
    motto: '稳定的基线，是每次冲刺的起点。',
    accent: '#db3577'
  }
]

</script>

<template>
  <main class="fdusc-members">
    <section class="members-hero" aria-labelledby="members-title">
      <p class="members-eyebrow">Team Members</p>
      <h1 id="members-title">战队成员</h1>
    </section>

    <section class="members-grid" aria-label="战队成员列表">
      <article
        v-for="member in members"
        :key="member.email"
        class="member-card"
        :style="{ '--member-accent': member.accent }"
      >
        <div class="member-header">
          <img
            v-if="member.avatar"
            class="member-avatar"
            :src="member.avatar"
            :alt="`${member.name} 的头像`"
            loading="lazy"
          >
          <div v-else class="member-avatar member-avatar-fallback" aria-hidden="true">
            {{ member.nickname.slice(0, 2).toUpperCase() }}
          </div>

          <div class="member-heading">
            <p class="member-role">{{ member.role }}</p>
            <h2>{{ member.name }}</h2>
            <p class="member-nickname">@{{ member.nickname }}</p>
          </div>
        </div>

        <p class="member-motto">{{ member.motto }}</p>

        <dl class="member-meta">
          <div>
            <dt>邮箱</dt>
            <dd>
              <a :href="`mailto:${member.email}`">{{ member.email }}</a>
            </dd>
          </div>
          <div>
            <dt>方向</dt>
            <dd>{{ member.focus.join(' / ') }}</dd>
          </div>
        </dl>

        <div class="member-tags" aria-label="技术标签">
          <span v-for="item in member.focus" :key="item">{{ item }}</span>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.fdusc-members {
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 24px 88px;
}

.members-hero {
  padding-bottom: 44px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.members-eyebrow {
  margin: 0 0 12px;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
}

.members-hero h1 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 48px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: 0;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 36px;
}

.member-card {
  --member-accent: var(--vp-c-brand-1);
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--member-accent);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.member-card:hover {
  border-color: var(--member-accent);
  background: var(--vp-c-bg);
  transform: translateY(-2px);
}

.member-header {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
}

.member-avatar {
  width: 72px;
  height: 72px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  background: var(--vp-c-bg);
  object-fit: cover;
}

.member-avatar-fallback {
  display: grid;
  place-items: center;
  border-color: color-mix(in srgb, var(--member-accent) 42%, var(--vp-c-divider));
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--member-accent) 18%, transparent), transparent),
    var(--vp-c-bg);
  color: var(--member-accent);
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.member-heading {
  min-width: 0;
}

.member-role {
  margin: 0 0 6px;
  color: var(--member-accent);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
}

.member-heading h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  letter-spacing: 0;
}

.member-nickname {
  margin: 6px 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
}

.member-motto {
  min-height: 56px;
  margin: 22px 0 0;
  color: var(--vp-c-text-1);
  font-size: 16px;
  line-height: 1.75;
}

.member-meta {
  display: grid;
  gap: 12px;
  margin: 22px 0 0;
  padding: 18px 0 0;
  border-top: 1px solid var(--vp-c-divider);
}

.member-meta div {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 14px;
}

.member-meta dt {
  color: var(--vp-c-text-3);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.6;
}

.member-meta dd {
  min-width: 0;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.member-meta a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.member-meta a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.member-tags span {
  padding: 4px 10px;
  border: 1px solid color-mix(in srgb, var(--member-accent) 28%, var(--vp-c-divider));
  border-radius: 999px;
  background: color-mix(in srgb, var(--member-accent) 9%, transparent);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
}

@media (max-width: 860px) {
  .members-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .fdusc-members {
    padding: 40px 24px 56px;
  }

  .members-hero {
    padding-bottom: 30px;
  }

  .members-hero h1 {
    font-size: 36px;
  }

  .member-card {
    padding: 20px;
  }

  .member-header {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 16px;
  }

  .member-avatar {
    width: 64px;
    height: 64px;
  }

  .member-heading h2 {
    font-size: 21px;
  }

  .member-motto {
    min-height: 0;
  }
}
</style>
