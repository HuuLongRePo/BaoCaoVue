<template>
    <div style=" display: flex; justify-content: center; align-items: center; height: 100vh; ">
        <div class="ui label big">
            ID: {{ state.user.id }} <br />
            Name: {{ state.user.name }}
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    setup() {
        let user = { id: 0, name: "Joe" };
        let state = reactive({ user });

        setTimeout(() => {
            state.user = {
                id: 20,
                name: "Raja",
            };
        }, 2000);

        return {
            state,
        };
    },
};
</script>
