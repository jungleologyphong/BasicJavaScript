    
        var album =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
        var currentImage=0;
        document.querySelector('.background3').addEventListener('click',function(){
          document.body.style.backgroundImage = "url('images/background3.jpg')";
        });
        document.querySelector('.background2').addEventListener('click',function(){
          document.body.style.backgroundImage = "url('images/background2.jpg')";
        });
        document.querySelector('.background1').addEventListener('click',function(){
          document.body.style.backgroundImage = "url('images/background.jpg')";
        });
          document.querySelector('#next').addEventListener('click',function(){
            if(currentImage==album.length-1){
              currentImage=0;
              document.querySelector('#number').innerHTML=currentImage+1;
            }else{
              currentImage++;
              document.querySelector('#number').innerHTML=currentImage+1;
            }
          document.querySelector('img').src=`images/${album[currentImage]}`;
          });
          document.querySelector('#pre').addEventListener('click',function(){
              currentImage--;
              document.querySelector('#number').innerHTML=currentImage+1;
            if(currentImage<0){
              currentImage = album.length-1;
              document.querySelector('#number').innerHTML=currentImage+1;
            };
          document.querySelector('img').src=`images/${album[currentImage]}`;
          });
          document.querySelector('#allnumber').innerHTML=album.length;
          document.querySelectorAll('.change').forEach(img=>{
              img.onclick =function(){
              document.querySelector('#images').src = `images/${img.dataset.img}`;
              document.querySelector('#number').innerHTML= img.dataset.num;
            };
        });
  