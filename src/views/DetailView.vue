<template>
  <div class="detail">
    <p><RouterLink to="/">Back to List</RouterLink></p>
    <hr/>

    <h1>This is an Detail page</h1>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<style>
</style>
