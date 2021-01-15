// alert("Hallo pacarku aku ada pertanyaan nih buat kamu yang");
// alert("jawab jujur ya");
// alert("awas aja kalo boong");
// var nama = prompt("masukkin nama kamu dulu");
// var tes = confirm(nama + " sayang gak sama faiz");
// if(tes == true){
//     alert("faiz juga sayang sama " + nama);
// }else{
//     alert("yah baru mo dikasi mobil");
// }
// var nilai = prompt("seberapa sayang emang ?");
// alert("makasih ya udah sayang sama faiz "+ nilai);
// var nilai2 = confirm("sekarang "+nama +" kangen gak sama faiz");
// if(nilai2 == true){
//     alert("faiz juga kangen sama " + nama);
// }else{
//     alert("yah baru mo dikasi mobil");
// }
// alert("terakhir deh sayang");
// alert("klick tombol di sini");

$(document).ready(function(){


 Swal.fire({
    icon: 'warning',
    title: 'Hallo Pacarku',
    text: 'ada yang pengen aku omongin!',
    
  }).then((result) =>{
      //jawab jujur
      if(result.isConfirmed){
          Swal.fire({
            icon: 'question',
            title: 'Jawab Jujur ya',
          }).then((result) =>{
              //awas kalo boong
              if(result.isConfirmed){
                Swal.fire({
                    icon: 'error',
                    title: 'awas kalo boong',
                  }).then((result) =>{
                      //masukin nama
                      if(result.isConfirmed){
                        Swal.mixin({
                            input: 'text',  
                            showCancelButton: true,   
                          }).queue([
                            {
                              title: 'Masukin nama kamu',
                              
                            },
                          ]).then((result) => {
                            if (result.value) {
                              const answers = JSON.stringify(result.value)
                              Swal.fire({
                                title: answers +"sayang gk sama faiz",
                                confirmButtonText: 'Sayang',
                                cancelButtonText:'Amit-Amit',
                                showCancelButton: true,
                              }).then((result) =>{
                                  if(result.isConfirmed){
                                      Swal.fire({
                                          title:"faiz juga sayang sama"+answers, 
                                      }).then((result) =>{
                                          if(result.isConfirmed){
                                            Swal.fire({
                                                title: 'Seberapa Sayang Emang?',
                                                icon: 'question',
                                                input: 'range',
                                                
                                                inputAttributes: {
                                                  min: 0,
                                                  max: 100,
                                                  step: 1
                                                },
                                                inputValue: 50
                                              }).then((result) =>{
                                                  if(result.value){
                                                      const nilai = JSON.stringify(result.value)
                                                    Swal.fire({
                                                        title:'Makasih ya udah sayang aku '+nilai+"%"
                                                    }).then((result) =>{
                                                        if(result.isConfirmed){
                                                            Swal.fire({
                                                                title:'Sekarang '+answers+' kangen gak sama faiz?',
                                                                confirmButtonText: 'Kangen :(',
                                                                cancelButtonText:'Kagak lah ',
                                                                showCancelButton: true,
                                                            }).then((result) =>{
                                                                if(result.isConfirmed){
                                                                    Swal.fire({
                                                                        title:'HUHU iya aku juga Kangen sama '+answers+', makasih ya'
                                                                    }).then((result)=>{
                                                                        if(result.isConfirmed){
                                                                            Swal.fire({
                                                                                title:'terakhir deh sayang'
                                                                            }).then((result)=>{
                                                                                if(result.isConfirmed){
                                                                                    Swal.fire({
                                                                                        title:'coba teken tombol biru :)'
                                                                                    })
                                                                                    $('#tombol-cari').show();

                                                                                    $('#tombol-cari').on('click',function(){
                                                                                        $('#tombol-cari').hide();
                                                                                        $('#gambar').show();
                                                                                    })
                                                                                    
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                  }
                                              })

                                          }
                                      })
                                  }

                              })
                            }
                          })

                        
                      }
                  })
              }
          })
      }
  })














});

//    Swal.fire(
//     'Hallo pacarku?',
//     'Aku ada pertanyaan nih',
//     'buat kamu'
//   );




// Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })
