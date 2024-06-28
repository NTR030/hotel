<template>
  <section class="header">
    <h1>
      <img src="../../public/logo.png" alt="logo" class="logo" />
    </h1>

    <form class="search" @submit.prevent>
      <input type="search" class="search_input" placeholder="Search..." />
      <button type="submit" class="search_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="search_button_svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>

    <div class="user">
      <img class="user_img" />
      <p class="user_name">testName</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 1.2rem;
  height: 8rem;
  @include flexBox(space-between, center);

  @media only screen and (max-width: $bp-smallest) {
    flex-wrap: wrap;
    height: 11rem;
  }
}

h1 {
  @include flexBox;
}

.logo {
  height: 4.4rem;
  width: auto;
}

.search {
  width: 30rem;
  height: 3rem;
  @include flexBox;

  position: relative;

  @media only screen and (max-width: $bp-smallest) {
    order: 1;
    flex: 0 0 100%;
  }

  &_input {
    flex-basis: 100%;
    height: 100%;
    border-radius: 15px;
    border: var(--line-dark);
    padding-left: 1.6rem;
    background-color: var(--color-grey-light-2);

    &:focus {
      outline: none;
    }
  }

  &_button {
    height: 2.4rem;
    background-color: var(--color-grey-light-2);
    border: 0;

    position: absolute;
    top: 50%;
    right: 7%;
    transform: translateY(-50%);

    &_svg {
      height: 2.4rem;
      stroke: var(--color-grey-light-4);
    }
  }
}

.user {
  @include flexBox;
  gap: 0.6rem;

  &_img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    border: var(--line-dark);
    background-color: var(--color-primary);
  }

  &_name {
    font-size: 1.7rem;
    max-width: 8rem;
    white-space: nowrap; /* 禁止换行 */
    overflow: hidden; /* 隐藏超出部分 */
    text-overflow: ellipsis; /* 使用省略号代替溢出的文本 */
  }
}
</style>
