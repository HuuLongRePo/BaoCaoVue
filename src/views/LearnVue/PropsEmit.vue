

<template>
    <div>
        <h3>Props & Emit</h3>
        <ul>
            <li>Props nhận dữ liệu được gửi tới từ component cha. Tại component com không thể trực tiếp thay đổi dữ liệu props và trả ngược lại cho component cha</li>
            <li>Emit gửi dữ liệu đến compoent cha thông qua 1 sự kiện tuỳ chỉnh Custom Event</li>
        </ul>
        <ChildSecond @updateMsg="updateMsgR"/>
        <Child :msg="sendmsg"/>
    </div>
</template>
<script>

import Child from '@/components/Child.vue';
import ChildSecond from '@/components/ChildSecond.vue';


export default {
    data() {
        return {
            sendmsg:"Heloo Child"
        };
    },
    methods: {
        updateMsgR(data){
            this.sendmsg = data
        }
    },
    components: { ChildSecond, Child, Child, ChildSecond }
}
</script>