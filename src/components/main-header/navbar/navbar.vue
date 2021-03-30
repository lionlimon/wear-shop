<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link to="/new" class="navbar__link header-link">New arrivals</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/shop" class="navbar__link header-link">Shop</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/collections" class="navbar__link header-link">Collections</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" src="./navbar.scss"></style>