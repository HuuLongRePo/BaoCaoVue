<template>
    <div id="components-demo">
        <button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>
    </div>
</template>
<script>


export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>