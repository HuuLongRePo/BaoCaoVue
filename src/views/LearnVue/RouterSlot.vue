<template>
    <div>
        <h3>Router & Slot</h3>
        <ul>
            <li>Slot sử dụng để tạo ra các component khung với nội dung có thể thay đổi</li>
            <span>LayoutUser.vue</span>
            <p v-html="codemau1"></p>
            <span>App.vue</span>
            <p v-html="codemau2"></p>

            <li>Router cho phép ta có thể dễ dàng điều hướng giữa các trang mà không cần phải tải lại toàn bộ trang.
            </li>
            <span>Cài đặt</span>
            <p v-html="codemau"></p>
            <span>router/index.js</span>
            <p v-html="codemau3"></p>
            <span>Router Link TheHeader.vue</span>
            <p v-html="codemau4"></p>
            <span>App.vue</span>
            <p v-html="codemau5"></p>

        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            codemau: '<textarea rows="3" cols="50" disabled>vue init webpack vue-router\ncd vue-router \nnpm run dev</textarea>',
            codemau1: '<textarea rows="7" cols="50" disabled><template>\n    <div>\n        <TheHeader />\n             <slot></slot>\n        <TheFooter />\n    </div>\n</template></textarea>',
            codemau2: '<textarea rows="7" cols="50" disabled><template>\n    <div>\n        <LayoutUser>\n              <HelloWorld />\n        <LayoutUser />\n    </div>\n</template></textarea>',
            codemau3: '<textarea rows="26" cols="150" disabled>import { createRouter, createWebHistory } from "vue-router";\nimport HomeView from "../views/HomeView.vue";\n\nconst router = createRouter({\n  history: createWebHistory(import.meta.env.BASE_URL),\n  routes: [\n    {\n      path: "/",\n      name: "home",\n      component: HomeView,\n      meta:{\n        layout:"User"\n      }\n    },\n    {\n      path: "/about",\n      name: "about",\n      component: () => import("../views/AboutView.vue"),\n      meta:{\n        layout:"User"\n      }\n    }\n  ],\n});\n\nexport default router;</textarea>',
            codemau4: '<textarea rows="3" cols="50" disabled>import { RouterLink } from "vue-router";\n<RouterLink to="/">Home</RouterLink>\n<RouterLink to="/about">About</RouterLink></textarea>',
            codemau5: '<textarea rows="7" cols="50" disabled><template>\n    <component :is="layout">\n      <main>\n        <RouterView />\n      </main>\n    </component>\n</template></textarea>',

        }
    }
}

</script>

