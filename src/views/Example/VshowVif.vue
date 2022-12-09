<template>
    <div class="conditional-rendering">
        <div class="block-1" v-show="isActiveVshow == false">
            This is block V-SHOW 1
        </div>
        <div class="block-2" v-show="isActiveVshow == true">
            This is block V-SHOW 2
        </div>
        <div>
            <button @click="(isActiveVshow = !isActiveVshow)">Button</button>
        </div>
    </div>
    <div class="conditional-rendering">
        <div class="block-1" v-if="isActiveVif == false">
            This is block V-IF 1
        </div>
        <div class="block-2" v-if="isActiveVif == true">
            This is block V-IF 2
        </div>
        <div>
            <button @click="toggleActive">Button</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActiveVshow: true,
                isActiveVif: true
            }
        },
        methods: {
            toggleActive() {
                if(this.isActiveVif == true) {
                    this.isActiveVif = false
                }
                else {
                    this.isActiveVif = true
                }
            }
        }
    }
</script>