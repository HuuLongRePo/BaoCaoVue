<template>
    <div>
        <h3>Map and Filter and Some</h3>
        <ul>
            <li>
                Some() Trả về true false với các phần tử với điều kiện của 1 hàm
                không làm thay đổi mảng ban đầu.
                Array.some(x=>x>10);
            </li>
            <li>
                Includes kiểm tra 1 giá trị có trong 1 mảng hay không trả vể true false
                Array.includes("String")
            </li>

            <li>
                Filter lọc 1 mảng thành mảng mới theo điều kiện number.filter((item)=>item>3)
            </li>
            <li>
                Map thực hiện cùng thay đổi tất cả các phần tử trên mảng array1.map(x => x * 2);
            </li>
        </ul>
        <h3>Template Strings, Spread syntax, Destructuring Assignment, Optional chaining </h3>
        <ul>
            <li>
                Template Strings cho phép nối chuỗi với biến, biểu thức mà không cần dấu + `string text ${expression}
                string text`
            </li>
            <li>
                Toán tử 3 chấm cho phép sao chép các phần tử, thuộc tính qua lại giữa các kiểu dữ liệu mảng và đối tượng
                const array = [1, 2, 3];
                const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
            </li>

            <li>
                Destructuring assignment cho phép tách các giá trị từ mảng hoặc thuộc tính từ các đối tượng thành các
                biến riêng biệt.
                const [a, b] = array;
                const { a, b } = obj;
            </li>
            <li>
                Optional Chaining sử dụng để truy cập đến các thuộc tính của đối tượng.
                Nếu đối tượng underfined hoặc null, nó sẽ trả về underfined thay vì đưa ra lỗi. adventurer.dog?.name
            </li>
        </ul>
        <h3>Promise</h3>
        <ul>
            <li>let promise = new Promise(function(resolve, reject) { }) <br>
                resolve(value) và reject(error)
            </li>
        </ul>
        <h3>localStorage, sessionStorage, Cookie </h3>
        <ul>
            <li>localStorage: Lưu trữ dữ liệu phân biệt theo domain cho đến khi nhận được lệnh xóa dữ liệu hoặc dữ liệu
                trình duyệt bị xóa. localStorage tối đa 5mb
            </li>
            <li>sessionStorage: Sẽ lưu trữ khác nhau cho mỗi tab. Tab khác không sử dụng được dữ liệu của tab này.
                sessionStorage tối đa 10mb</li>
            <li>Theo cơ chế của cookie thì bất kì một request nào gửi lên server đều gửi kèm dữ liệu cookie của domain
                đó.
                Vì vậy, với số lượng hàng trăm request đó thì có thể sẽ ảnh hưởng đến tốc độ tải trang. Cookie tối đa là
                4kb</li>
        </ul>
        <p>Cách sử dụng thì sessionStorage và localStorage gần như là giống nhau
            <code>
            if (sessionStorage) { <br>
        alert("STDIO: Yes, sessionStorage is here!");<br>
      } else {<br>
        alert("STDIO: Your browser does not support sessionStorage!");<br>
      }
        </code>
        <ul>
            <li>
                sessionStorage.setItem('domain', 'freetuts.net')
            </li>
            <li>sessionStorage.getItem('author')</li>
            <li>sessionStorage.removeItem('author');</li>
            <li>sessionStorage.clear()</li>
        </ul>
        </p>
        <p>
            Sử dụng Cookie
        <ul>
            <li>document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";</li>
            <li></li>
            <li></li>
        </ul>
        </p>

    </div>
</template>
<script >

// const abc = new Promise(function (resolve, reject) {

//     setTimeout(() => reject('How are you'), 1000); // (*)

// }).then(function (result) { // (**)

//     alert(result);
//     return 'I\'m fine thank!';

// }).then(function (result) { // (**)

//     alert(result);
//     return 'Opps!';

// })

// abc.then(function (result) { // (**)

//     alert("avbafdsfasdfasdfdasf")
//     return 'Opps!';

// })
</script>