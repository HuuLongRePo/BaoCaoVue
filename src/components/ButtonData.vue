<template>
    <div id="components-demo">
        <button v-on:click="clickEvent">Bạn đã bấm {{ counts }} lần.</button>
    </div>
</template>
<script>




export default {
    data() {
        return {
            count: 0
        }
    },
    computed: {
        counts: function () {
            console.log(`${this.count} ở data`);
            console.log(localStorage.storedData);
            if(localStorage.storedData){
                this.count = Number(localStorage.storedData)
            }else{
                console.log(`${this.count} ở computed`);
            return this.count
            }
            return this.count
        }
    },
    methods: {
        clickEvent() {
            // this.count = localStorage.storedData
            this.count++
            console.log(`${this.count} ở methods`);
            localStorage.storedData = this.count;
            return this.count
        }
    }
}

</script>