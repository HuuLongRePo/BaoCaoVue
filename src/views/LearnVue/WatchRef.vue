<template>
    <div>
        <h3>Watch</h3>
        <ul>
            <li>
                watcher được sử dụng để giám sát sự thay đổi của một đối tượng, và khi
                đối tượng thay đổi thì watcher sẽ đưa ra các hàm xử lí tương ứng
            </li>
            <p v-html="codemau3"></p>
            <li>Tên của watcher phải trùng với tên của data cần theo dõi.</li>
            <li>Và các watcher phải được đặt trong watch scope.</li>
            <li>
                Nhìn chung thì cả computed và watcher đều được thực hiện khi chúng ta
                thay đổi data bên trong nó. Và cả hai đều có thể áp dụng để thực thi một
                hành động nào đó khi có 1 biến phụ thuộc thay đổi.
            </li>
            <li>
                Tuỳ vào trường hợp sử dụng computed hoặc watch để đạt được hiệu quả tốt
                nhất.
            </li>
        </ul>
        <h3>Ref</h3>
        <p>Tham chiếu đến phản ứng của count ở setup {{ count }} và {{ vue }}</p>
        <Button label="Click++" @click="countNumber"></Button>
        <ul>
            <li>Ref lấy giá trị bên trong một biến</li>
            <li>
                Giá trị này có thể thay đổi (reactive). Mỗi ref của một biến sẽ có một
                trường value chính là giá trị của biến này
            </li>
            <li>
                Ref có thể dùng để check giá trị của 1 biến với Conditional operator vd:
                <code>const checkreact = ref(react) ? ref(react) : "false"</code> =>
                {{ checkreact }}
            </li>
            <li>
                Ref cũng được dùng để retrieve(bóc tách) các giá trị trong object ví dụ
                useFeatureX
            </li>
            <li>
                Khi dùng Ref thì ta có thể truy cập vào mọi function cũng như các thuộc
                tính khác của đối tượng mà ta gắn ref vào.
            </li>
            <span>Ref với tag input</span>
            <p v-html="codemau"></p>
            <span>Ref với component</span>
            <p v-html="codemau1"></p>
            <p v-html="codemau2"></p>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, watch,watchEffect } from "vue";

const codemau3 = '<textarea rows="3" cols="150" disabled>watch(count, () => {\n            console.log("Vừa có sự thay đổi biến Count");\n        });</textarea>'
const codemau1 = '<textarea rows="33" cols="150" disabled>// Form.vue\n<template>\n    <div>\n        <label>Email</label>\n        <input type="text" name="email" v-model="email" />\n         <label>Password</label>\n        <input type="passowrd" name="password" v-model="password" />\n         <label>Re-enter password</label>\n        <input type="passowrd" name="password" v-model="rePassword" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n\n            email: \'\', \n            password: \'\',\n            rePassword: \'\',\n        }\n    }\n    methods: {\n             validateEmail() {\n                 // Logic for validate email\n             },\n             validatePassword() {\n                // Logic \n or validate password\n            }\n    }\n}\n<\/script></textarea>'
const codemau2 = '<textarea rows="22" cols="150" disabled>// LoginModal\n<template>\n    <form>\n       <Form ref="formRef"/>\n       <button>Login</button>\n    </form>\n</template>\n\n<script>\nexport default {\n    methods: {\n       handleLogin() {\n           this.$refs.formRef.validateEmail();\n           this.$refs.formRef.validatePassword();\n            \nonst data = this.$refs.formRef.data;\n           // Login logic\n       }\n    }\n}\n\n<\/script></textarea>'
const codemau = '<textarea rows="13" cols="50" disabled><template>\n    <input ref="myInput" />\n    <button @click="logRef">Get Ref</button>\n</template>\n<script>\n export default {\n    methods: {\n             logRef() {\n                 console.log(this.$refs.myInput);\n             }\n    }\n}\n<\/script></textarea>'


function useFeatureX() {
    const framework = reactive({
        vue: "có vue",
        react: "có react",
    });

    return toRefs(framework); // chỗ này nó sẽ bóc tách vue - react 
}
const { vue, react } = useFeatureX(); // đoạn này chỉ việc gọi thôi này
const checkreact = ref(react) ? ref(react) : "false";

let count = ref(0);

function countNumber() {
    count.value++;
}
watch(count, () => {
    console.log("Vừa có sự thay đổi biến Count");
});
watchEffect(() => {
    console.log(count.value)
})
        // return {
        //     count,
        //     countNumber,
        //     vue,
        //     react,
        //     checkreact,
        //     codemau,
        //     codemau1,
        //     codemau2,
        //     codemau3
        // };


</script>
