

<template>
    <div>
        <h3>@keyup, @keydown, @keypress, @click</h3>
        <ul>
            <li>@keyup được kích hoạt lần cuối khi người dùng nhả một phím</li>
            <li>@keydown được kích hoạt đầu tiên khi người dùng nhấn một phím</li>
            <li>@keypress sự kiện được kích hoạt ở giữa quá trình nhấn thả 1 phím</li>
            <li>@click bắt sự kiện click chuột</li>
            <li>Sự kiện keydownvà keyupthường được sử dụng để xử lý các phím vật lý, trong khi keypresssự kiện được sử dụng để xử lý các ký tự đang được nhập.</li>
            <li>@keypress bỏ qua delete, arrows, page up, page down, home, end, ctrl, alt, shift, esc, v.v.</li>
            <li>Sự kiện keydownvà keypresskích hoạt nhiều lần nếu người dùng nhấn và giữ một phím. Trong khi keyupchỉ kích hoạt một lần khi người dùng nhả phím.</li>
        </ul>
        <input @keypress.delete="onEvent" @click="onEvent" placeholder="click vào đây!"/>
    </div>

</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        onEvent(){
            alert('click')
        }
    }
}
</script>