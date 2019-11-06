<template>
  <div class="wrap">
    <div class="card">
      <p>{{ data.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {},
    type: Object,
    default: () => ({})
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    background-color: #FFCB77;
    border: 2px solid #FFCB77;
    color: #FFF;
    font-weight: 600;
    border-radius: 10px;
    padding: 10px 25px;
    margin: 25px;
    max-width: 150px;
  }

  p {
    max-width: 100%;
    word-break: break-all;
  }
</style>