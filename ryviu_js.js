  // function myFunction(){
  //       console.log("hello")
  //       alert("hello wordl")
  //       document.getElementById('demo').style.display='block'
  //   }
    function myFunction(){
      // 0 Vấn đề khi click: 
      // Nếu đang hiển thị thì "Ẩn" || Nếu đang ẩn thì "Hiện"
      // => 1 Yêu cầu: Phải Kiểm tra được {ẩn, hiển thị}
      // 2 => Lấy được trạng thái display của khối xử lý
      // => Tra
      // document.getElementById('demo').style.display='block'
      console.log( document.getElementById('demo').style.display)
      // xử lí khi khối demo không hiển thị
      if (document.getElementById('demo').style.display=="") {
      document.getElementById("demo").style.display="block"
      }
      else if(document.getElementById('demo').style.display=="none"){
          document.getElementById("demo").style.display="block"
      }
      else{
          document.getElementById('demo').style.display="none"
      }
  }