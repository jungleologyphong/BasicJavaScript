    var Check = true;
    function CheckForm(){
    //-------------------------(CHECK MA SINH VIEN)-----------------------------//
    if(document.querySelector('#MaSinhVien').value==""){
        document.querySelector('.CheckMa1').style.display = "block";
        document.querySelector('#MaSinhVien').style.backgroundColor = "yellow";
        return false;
    }else{
        document.querySelector('.CheckMa1').style.display = "none";
        document.querySelector('#MaSinhVien').style.backgroundColor = "white";
    }
    if(document.querySelector('#MaSinhVien').value<0){
        document.querySelector('.CheckMa2').style.display = "block";
        document.querySelector('#MaSinhVien').style.backgroundColor = "yellow";
        return false;
    }else{
        document.querySelector('.CheckMa2').style.display = "none";
        document.querySelector('#MaSinhVien').style.backgroundColor = "white";
    }
    //-------------------------------------------------------------------------//
    //-------------------------(CHECK HO VA TEN)------------------------------//
    if(document.querySelector('#HoVaTen').value==""){
        document.querySelector('.CheckTen1').style.display = "block";
        document.querySelector('#HoVaTen').style.backgroundColor = "yellow";
        return false;
    }else{
        document.querySelector('.CheckTen1').style.display = "none";
        document.querySelector('#HoVaTen').style.backgroundColor = "white";
    }
    if(document.querySelector('#HoVaTen').value<0){
        document.querySelector('.CheckTen2').style.display = "block";
        document.querySelector('#HoVaTen').style.backgroundColor = "yellow";
        return false;
    }else{
        document.querySelector('.CheckTen2').style.display = "none";
        document.querySelector('#HoVaTen').style.backgroundColor = "white";
    }
    //-------------------------------------------------------------------------//
    //------------------------------(CHECK EMAIL)-----------------------------//
    var CheckEmail = document.querySelector('#Email').value
    var atPosition = CheckEmail.indexOf("@");
    var dotPosition = CheckEmail.lastIndexOf(".");
    if(atPosition<1 || dotPosition<(atPosition+2) || (dotPosition+2)>=CheckEmail.length){
        document.querySelector('.ThongBaoEmail').style.display = "block";
        document.querySelector('#Email').style.backgroundColor = "yellow";
        return false;
    }else{
        document.querySelector('.ThongBaoEmail').style.display = "none";
        document.querySelector('#Email').style.backgroundColor = "white";
    }
    //-----------------------------------------------------------------------//
    //----------------------(CHECK GHI CHU [TEXTAREA])----------------------//
    if(document.querySelector('textarea').value.length >200){
        document.querySelector('.Textarea').style.backgroundColor = "yellow";
        document.querySelector('.ThongBaoTextArea').style.display = "block"
        return false;
    }else{
        document.querySelector('.Textarea').style.backgroundColor = "white";
        document.querySelector('.ThongBaoTextArea').style.display = "none";
    }
    //-------------------------------------------------------------------------//
    //--------------------------(CHECK GIOI TINH)-----------------------------//
    var CheckGender=false;
        var Gender=document.querySelectorAll('[name="Sex"]');
            Gender.forEach(Sex=>{
        if(Sex.checked){
            CheckGender = true;
            document.querySelector('.Gender').style.backgroundColor = "white";
            document.querySelector('.Sex').style.display = "none";
        }
    });
        if(CheckGender==false){
            document.querySelector('.Sex').style.display = "block";
            document.querySelector('.Gender').style.backgroundColor = "yellow";
            return false;
        }
    //-------------------------------------------------------------------------//
    //--------------------------(CHECK SO THICH)------------------------------//
    var CheckSoThich = false;
    var SoThich = document.querySelectorAll('[name="SoThich"]');
        SoThich.forEach(Element=>{
        if(Element.checked){
            CheckSoThich = true;
            document.querySelector('.SoThich').style.backgroundColor = "white";
            document.querySelector('.ThongBaoSoThich').style.display = "none";
            }
        });
        if(CheckSoThich==false){       
            document.querySelector('.ThongBaoSoThich').style.display = "block";
            document.querySelector('.SoThich').style.backgroundColor = "yellow";
            return false;
            }
    //-------------------------------------------------------------------------//
    //--------------------------(CHECK QUOC TICH)-----------------------------//
    var CheckNational = false;
    var National = document.querySelectorAll('[name="nationality"]');
        National.forEach(Nation=>{
        if(Nation.selected){
            CheckNational = true;
            document.querySelector('.National').style.backgroundColor = "white";
            document.querySelector('.ThongBaoNational').style.display = "none";
            }
        });
        if(CheckNational==false){
            document.querySelector('.ThongBaoNational').style.display = "block";
            document.querySelector('.National').style.backgroundColor = "yellow";
            return false;
        }
        if(Check==true){
            alert('CHÚC MỪNG BẠN ĐÃ ĐĂNG KÍ THÀNH CÔNG !!!')
        }
    //-------------------------------------------------------------------------//
    }