<template>
    <div>
        Component Child nhận: {{msg}}
    </div>
</template>
<script >
import { onMounted } from 'vue';


export default{
    props: { 
    msg: String 
},


  setup(props) {
    console.log(props.msg)
    onMounted(() => {
        console.log(5443252345);
    })
  }
}

</script>