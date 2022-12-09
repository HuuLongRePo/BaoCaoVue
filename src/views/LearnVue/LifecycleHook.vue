<template>
  <div>
    <h3>
      Lifecycle hook là quá trình khởi tạo đến khi kết thúc một instance, có bốn
      sự kiện chính và mỗi sự kiện được tách thành hai 2 hook được gọi trước và
      sau sự kiện đó.
    </h3>
    <ul>
      <li>Creation - Được chạy khi component của bạn được khởi tạo</li>
      <li>Mount - Được chạy khi DOM được gắn kết</li>
      <li>Update - Được gọi khi data được thay đổi</li>
      <li>Destruction - Được gọi khi component không còn sử dụng.</li>
    </ul>
    <h3>Các hook trong Vue</h3>
    <ul>
      <li>befoceCreate và created -> sử dụng setup()</li>
      <li>beforeMount -> onBeforeMount (Composition)</li>
      <li>mounted -> onMounted (Composition)</li>
      <li>update -> onUpdate(Compostion)</li>
      <li>beforeDestroy -> beforeUnmoute và onBeforeUnmoute</li>
      <li>destroyed -> unMouted và onUnMounted</li>
    </ul>
    <h3>Đối với setup</h3>
    <ul>
      <li>Nếu viết setup() trong export default thì cần có return những biến và hàm đã khai báo</li>
      <li>Nếu viết setup trong &lt;script setup &gt; &lt;/script&gt; thì không cần return mà gọi sử dụng bình thường</li>
      <li>Data khai báo với ref() hoặc reactive() đối với object để đảm bảo được tính phản ứng của dữ liệu </li>
      <li>Khi dùng ref, reactive hay onMounted,onBeforeMount,watchEffect hoặc watch tại &lt;script setup &gt; &lt;/script&gt; ta cần import {} from "vue"</li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onUpdated, onBeforeUpdate } from "vue";
export default {
  name: "Lifecycle",
  setup() {
    // const abcd = "avdcasdfadsf";
    // console.log(abcd); created
    const root = ref(null);
    const count = ref(0);
    onBeforeMount(() => {
      // console.log(root.value) // null
    });
    onMounted(() => {
      // console.log(root.value) //div.container
    });
    const val = ref(0);
    onBeforeUpdate(() => {
      console.log(count.value);
    });
    onUpdated(() => {
      console.log(count.value);
      console.log(val.value);
    });
    return {
      count,
      val,
      root,
    };
  },
  data() {
    return {
      message: "hello",
      create: "",
      // count: 1,
    };
  },
  beforeCreate() {
    // console.log(this.message); //Chưa log được message
    this.message = "message được khởi tạo lần đầu và sử dụng bình thường"; //khởi tạo biến mới và sử dụng bình thường
    // console.log(this.message);
    // this.message2 = "xin chao msg2"; //khởi tạo biến mới và sử dụng bình thường
    // this.create = "xin chao create"
    // console.log(this.create);//có thể log ra được nhưng chưa render component và chưa mounted với DOM
  },
  created() {
    // console.log(this.message);//Lúc này message được khởi tạo là hello từ data
    // console.log(this.message2);
    // this.create = "xin chao create"
    // console.log(this.create);//khởi tạo biến mới và sử dụng bình thường
  },
  beforeMount() {
    // console.log(this.$el); //undefined vì nó chưa được render nhưng compoent đã được compile
  },
  mounted() {
    // console.log(this.$el); // log được kết quả $el
  },
};
</script>
