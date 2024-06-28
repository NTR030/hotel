<template>
  <section class="sidebar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/hotels">Hotel</router-link>
      </li>
      <li>
        <router-link to="/order">Order</router-link>
      </li>
    </ul>

    <div class="legal">&copy;2024 by lijie. All rights reserved.</div>
  </section>
</template>

<style lang="scss" scoped>
.sidebar {
  flex-basis: 20%;
  background-color: var(--color-grey-dark-1);

  @media only screen and (max-width: $bp-largest) {
    flex-basis: 5%;
  }
}

ul {
  list-style: none;
  margin-top: 2.5rem;

  @media only screen and (max-width: $bp-largest) {
    @include flexBox(space-around);
    margin: 0;
  }
}

li {
  cursor: pointer;
  @include flexBox;
  height: 5rem;

  @media only screen and (max-width: $bp-largest) {
    flex: 1;
  }

  &:hover {
    background-color: var(--color-primary-light);
  }
}

li a {
  color: var(--color-grey-light-1);
  text-transform: uppercase;
  @include flexBox;
  height: 100%;
  width: 100%;
}

.legal {
  color: var(--color-grey-light-1);
  padding: 1.2rem 2rem;
  @include flexBox;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 45rem;

  @media only screen and (max-width: $bp-largest) {
    display: none;
  }
}
</style>
