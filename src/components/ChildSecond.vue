<template>
    <div>
        Component Child Second gửi
        <input type="text" v-model="sendmsg">
        <p>data v-model :{{ sendmsg }}</p>
        <button @click="updateMsgS">Send to Child</button>
    </div>
</template>
<script >
export default {
    data() {
        return {
            sendmsg: ""
        }
    },
    methods: {
        updateMsgS() {
            (this.sendmsg) ? this.$emit('updateMsg', this.sendmsg) : this.$emit('updateMsg', "Opps! Hãy điền thông tin")
            
        }
    }
}


</script>