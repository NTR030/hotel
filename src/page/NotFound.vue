<template>
  <section class="notFound">
    <p class="prompt">404</p>
    <p class="link">
      页面无法访问，<router-link to="/">点击</router-link>返回首页
    </p>
  </section>
</template>

<style lang="scss" scoped>
.notFound {
  width: 30rem;
  height: 40rem;
  margin: 10rem auto;
  @include flexBox;
  flex-direction: column;
}

.prompt {
  font-size: 16rem;
  color: var(--color-grey-light-4);
}

.link {
  font-size: 1.5rem;
  color: var(--color-grey-light-4);
}

a {
  font-size: 2rem;
  color: var(--color-primary-light);
}
</style>
