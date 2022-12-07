
<template>
    <div>
        <h3>Computed</h3>
        <ul>
            <li>Computed sẽ tính toán lại mỗi khi các biến phụ thuộc trong nó thay đổi</li>
            <li>Tận dụng computed để tính toán các dữ liệu có sẵn thì sẽ cải thiện được performance app</li>
            <li>Computed ta không được thêm cặp dấu () đằng sau khi gọi ra nội suy {{ }}, tức là computed cũng không thể
                nhận tham
                số đầu vào như methods</li>
            <li>Nên dùng với các dữ liệu có sẵn trong data của component</li>
            <li>Điều tuyệt vời của computed là nó sẽ được cached. Nếu các các biến phụ thuộc không thay đổi thì khi sử
                dụng
                nó sẽ chỉ mất thời gian tính 1 lần, những lần sau kết quả sẽ được sử dụng lại từ lần trước.</li>
        </ul>
        <h3>Methods</h3>
        <ul>
            <li>Methods sẽ được tính toán bất kì khi nào nó được gọi</li>
            <li>Methods có thể có tham số hoặc không</li>
        </ul>
        <h3>Data</h3>
        <p>Đối với data khai báo là một function trả về object.</p>
        <ButtonData />
    </div>




</template>
<script>
import ButtonData from '@/components/LearnVue/ButtonData.vue'

export default {
    components:{
        ButtonData
    }
}
</script>