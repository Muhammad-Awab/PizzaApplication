
  $(function(){ 
    $(".begin").click(function () {

      $("#carouselExampleDark").carousel('cycle');
    });
    $(".pause").click(function () {

      $("#carouselExampleDark").carousel('pause');
    });
  });


   $(function(){
     $('#showBtn').click(function(){
       $('#exampleModal').modal('show') ;
     })
   });
  // const myModal = document.getElementById('exampleModal')
  // const myInput = document.getElementById('showBtn')

  // myInput.addEventListener('click', () => {
  //   $('#exampleModal').modal('show')
  // })
  // const myModal1 = document.getElementById('exampleModal1')
  // const myInput1 = document.getElementById('showBtn1')

  // myInput1.addEventListener('click', () => {
  //   $('#exampleModal1').modal('show')
  // })
  