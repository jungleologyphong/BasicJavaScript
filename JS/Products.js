var app=angular.module("myApp",[]);
var HideOrShow =angular.module("HideOrShow",['ngAnimate']);
app.controller("myController",function($scope){
$scope.search='';
$scope.clickMe = function (){
var s = 0;
    if($scope.tinhTongTien()<=0){
        alert("BẠN CHƯA CHỌN SỐ LƯỢNG SẢN PHẨM, XIN MỜI THỬ LẠI !!!");
        window.location.reload();
    }else{
        alert(" BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG !!!");
        window.location.reload();
    }
};
$scope.click = function (clicked) {
$scope.IsDisPlay = clicked == false ? true : true;
alert(" BẠN ĐÃ XÁC NHẬN MUA SẢN PHẨM, XIN CHỌN SỐ LƯỢNG TƯƠNG ỨNG VỚI TRANH MUỐN MUA !!!");
};
$scope.tinhTongTien = function(){
    var s = 0;
    $scope.products.forEach(p => {
        if(p.isBuy){
        s=s+p.SoLuong*p.DonGia;
        }
    });
    return s;
}
$scope.products = [
    {
        "ID" :2, 
        'SoLuong' : 0,
        "Image" : "images/17.jpg",
        "Money" : "Giá : 2.000.000 VNĐ",
        'DonGia' : 2000000,
        "Name" : "Tranh Nhà Mái Đỏ",
        'isBuy' : false
    },
    {
        "ID" :5,
        'SoLuong' : 0,
        "Image" : "images/18.jpg",
        "Money" : "Giá : 2.500.000 VNĐ",
        'DonGia' : 2500000,
        "Name" : "Tranh Nhà Ven Sông",
        'isBuy' : false
    },
    {
        "ID" :1,
        'SoLuong' : 0,
        "Image" : "images/19.jpg",
        "Money" : "Giá : 3.500.000 VNĐ",
        'DonGia' : 3500000,
        "Name" : "Tranh Người Đi Trong Mưa",
        'isBuy' : false
    },
    {
        "ID" :3,
        'SoLuong' : 0,
        "Image" : "images/20.jpg",
        "Money" : "Giá : 2.500.000 VNĐ",
        'DonGia' : 2500000,
        "Name" : "Tranh Tháp BigBen",
        'isBuy' : false
    },
    {
        "ID" :6,
        'SoLuong' : 0,
        "Image" : "images/21.jpg",
        "Money" : "Giá : 2.000.000 VNĐ",
        'DonGia' : 2000000,
        "Name" : "Tranh Tháp Eiffel",
        'isBuy' : false
    },
    {
        "ID" :4,
        'SoLuong' : 0,
        "Image" : "images/22.jpg",
        "Money" : "Giá : 2.000.000 VNĐ",
        'DonGia' : 2000000,
        "Name" : "Tranh Tháp BigBen 2",
        'isBuy' : false
    },
    {
        "ID" :7,
        'SoLuong' : 0,
        "Image" : "images/23.jpg",
        "Money" : "Giá : 3.000.000 VNĐ",
        'DonGia' : 3000000,
        "Name" : "Tranh Cô Gái Và Hoa 10 Giờ",
        'isBuy' : false
    },
    {
        "ID" :9,
        'SoLuong' : 0,
        "Image" : "images/24.jpg",
        "Money" : "Giá : 3.500.000 VNĐ",
        'DonGia' : 3500000,
        "Name" : "Tranh Phong Cảnh 1",
        'isBuy' : false
    },
    {
        "ID" :8,
        'SoLuong' : 0,
        "Image" : "images/25.jpg",
        "Money" : "Giá : 5.000.000 VNĐ",
        'DonGia' : 5000000,
        "Name" : "Tranh Phong Cảnh 2",
        'isBuy' : false
    },
    {
        "ID" :12,
        'SoLuong' : 0,
        "Image" : "images/26.jpg",
        "Money" : "Giá : 5.000.000 VNĐ",
        'DonGia' : 5000000,
        "Name" : "Tranh Phong Cảnh 3",
        'isBuy' : false
    },
    {
        "ID" :10,
        'SoLuong' : 0,
        "Image" : "images/27.jpg",
        "Money" : "Giá : 5.500.000 VNĐ",
        'DonGia' : 5500000,
        "Name" : "Tranh Phong Cảnh 4",
        'isBuy' : false
    },
    {
        "ID" :13, 
        'SoLuong' : 0,
        "Image" : "images/29.jpg",
        "Money" : "Giá : 4.000.000 VNĐ",
        'DonGia' : 4000000,
        "Name" : "Tranh Sơn Dầu 1",
        'isBuy' : false
    },
    {
        "ID" :15, 
        'SoLuong' : 0,
        "Image" : "images/30.jpg",
        "Money" : "Giá : 4.500.000 VNĐ",
        'DonGia' : 4500000,
        "Name" : "Tranh Sơn Dầu 2",
        'isBuy' : false
    },
    {
        "ID" :14, 
        'SoLuong' : 0,
        "Image" : "images/31.jpg",
        "Money" : "Giá : 4.000.000 VNĐ",
        'DonGia' : 4000000,
        "Name" : "Tranh Sơn Dầu 3",
        'isBuy' : false
    },
    {
        "ID" :16, 
        'SoLuong' : 0,
        "Image" : "images/32.jpg",
        "Money" : "Giá : 4.500.000 VNĐ",
        'DonGia' : 4500000,
        "Name" : "Tranh Sơn Dầu 4",
        'isBuy' : false
    },
    {
        "ID" :11,
        'SoLuong' : 0,
        "Image" : "images/28.jpg",
        "Money" : "Giá : 5.000.000 VNĐ",
        'DonGia' : 5000000,
        "Name" : "Tranh Phong Cảnh 5",
        'isBuy' : false
    }
];
})
app.filter('searchMoney', function () {
	return function (KQ, Money) {
		var Output = [];
		if (isNaN(Money)) {
			Output = KQ;
    	}
    	else {
			KQ.forEach(e => {
				if(e.DonGia >= Money){
					Output.push(e);
				}
			});
    	}
    	return Output;
	}
});
