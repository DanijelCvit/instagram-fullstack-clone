<template>
  <div class="dropdown">
    <button
      class="btn"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <a
          data-bs-toggle="modal"
          :data-bs-target="`#editModal${post.slug}`"
          class="dropdown-item"
          href="#"
          >Edit</a
        >
      </li>
      <li>
        <a
          data-bs-toggle="modal"
          :data-bs-target="`#deleteModal${post.slug}`"
          class="dropdown-item"
          href="#"
          >Delete</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped></style>
