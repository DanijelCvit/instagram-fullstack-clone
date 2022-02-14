<template>
  <div class="modal" tabindex="-1">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-primary">Cancel</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.modal {
    display: flex;
  position: fixed;
  z-index: 999;
  top: 0%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
