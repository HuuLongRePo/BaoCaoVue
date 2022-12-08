<template>
    <div>
        <TheHeader />
        <slot></slot>
        <TheFooter />
    </div>
</template>
<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
export default{
    components: { TheFooter, TheHeader }
}
</script>