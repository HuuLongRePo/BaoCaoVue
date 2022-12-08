
<template>
    <div>
        <h3>V-IF và V-SHOW</h3>
        <ul>
            <li>
                v-if không render ngay ra toàn bộ các element
                mà tùy vào giá trị kiểm tra</li>
            <li>
                v-show sẽ render ra ngay từ đầu
                và chỉ quyết định có display nó hay không
            </li>

            <li>
                Nếu nội dung trong block mà ít,và trong quá trình sử dụng mà user sẽ tác động đến block nhiều thì dùng
                v-show sẽ cho tốc độ tốt hơn
            </li>
            <li>
                Nếu nội dung trong block mà nhiều cùng với nhiều xử lý hoặc nội dung của block ít thay đổi trong suốt
                vòng đời của component thì khi đó không nên dùng v-show vì lúc đó trang của chúng ta sẽ nặng làm giảm
                performance và ta cần nghĩ đến dùng v-if
            </li>
        </ul>

        <h3>Ngoài ra còn có V-ElSE và V-ELSE-IF</h3>
        <ul>
            <li>v-else-if kiểm tra, ràng buộc thêm điều kiện và đưa thực hiện chức năng cho từng điều kiện </li>
            <li>Ta có thể sử dụng nhiều lần v-else-if sau v-if đầu tiên</li>
            <li>v-else đi liền với v-if hoặc là liền sau v-else-if cuối cùng để chỉ các trường hợp còn lại</li>
        </ul>
        <h3>Điều khiển việc tái sử dụng phần tử với key</h3>
        <p v-html="codemau5"></p>
        <h3>:STYLE và :CLASS</h3>
        <ul>
            <li>:style và :class sử dụng để điều khiển bind css trên 1 thành phần nào đó
                Bên cạnh đó các bạn cũng có thể bind class trực tiếp vào component
                kiểu như <span v-html="codemau1"></span></li>
            <li>hasError là true hoặc false</li>
            <li>Có thể dùng camelCase hoặc kebab-case (đặt trong dấu nháy nếu là kebab-case) đối với tên thuộc tính CSS
            </li>
            <li>Object được bind cũng không bắt buộc phải khai báo trong template:</li>
            <p v-html="codemau3"></p>
            <li>Cú pháp mảng của v-bind:style giúp bạn áp dụng nhiều object style cho cùng một phần tử web:</li>
            <p v-html="codemau4"></p>
        </ul>

        <h3>V-FOR</h3>
        <ul>
            <li>Có thể dùng v-for để duyệt qua các thuộc tính của một object hoặc duyệt qua các phần tử của mảng</li>
            <li>Có thể kết hợp v-if và v-for</li>
            <p v-html="codemau6"></p>
            <li>Ví dụ trên sẽ chỉ render những todo chưa hoàn thành.</li>

        </ul>
        <h3>V-HTML</h3>
        <ul>
            <li>Hiển thị dữ liệu ra dưới dạng append cả HTML code (như hàm html trong jquery hoặc innerHTML trong
                javascript). </li>
            <p v-html="codemau2"></p>
            <li>tag là các tag trong HTML. </li>
            <li>data là dữ liệu mà bạn muốn bind vào tag đó (dữ liệu này thường được khai báo trong data scope của
                vue.js).</li>
        </ul>
        <h3>V-MODEL</h3>
        <ul>
            <li>v-model ràng buộc dữ liệu 2 chiều lên các phần tử form input và textarea.</li>
            <input v-model="message" placeholder="Nhập thông điệp">
            <p>Thông điệp: {{ message }}</p>
        </ul>
    </div>




</template>
<script>


export default {
    name: 'App',
    data() {
        return {
            codemau1: '<textarea rows="3" cols="150" disabled><my-component :class="{active: isActive , \'text-danger\': hasError}">\n :Style \n <div v-bind:style="{ color: activeColor, fontSize: fontSize + \'px\' }"></div></textarea> ',
            codemau2: '<textarea rows="1" cols="50" disabled><tag v-html="data"></tag></textarea>',
            codemau3: '<textarea rows="10" cols="150"  disabled><div v-bind:class="classObject" v-bind:style="styleObject"></div> \n data: {\n  classObject: {\n  active: true,\n  \'text-danger\': false\n  }\n  styleObject: {\n  color: \'red\',\n  fontSize: \'13px\' \n }}</textarea>',
            codemau4: '<textarea rows="1" cols="100" disabled><div v-bind:style="[baseStyles, overridingStyles]"></div></textarea>',
            codemau5: '<textarea rows="9" cols="100" disabled><template v-if="loginType === \'username\'">\n <label>Username</label>\n  <input placeholder="Nhập username" \n key="username-input">\n</template>\n<template v-else>\n  <label>Email</label>\n  <input placeholder="Nhập địa chỉ email" key="email-input">\n</template></textarea>',
            codemau6: '<textarea rows="5" cols="100" disabled><div v-for="item in items" :key="item.id">\n  <li v-for="todo in todos" v-if="!todo.isComplete">\n    {{ todo }}\n  </li>\n</div></textarea>',
            message:''

        }
    },
    components: {

    }
}
</script>