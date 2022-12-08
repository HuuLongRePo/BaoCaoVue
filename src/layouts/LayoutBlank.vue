<template>
    <div>
        <h1>HEADER BLANK</h1>
        <RouterLink to="/">Home</RouterLink>
        <slot></slot>
        <h1>FOOTER BLANK</h1>
    </div>
</template>
<script>
import { RouterLink } from "vue-router";
</script>