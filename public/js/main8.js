/*******함수의 실행********/

/* function abc(){
    alert("test");
};
abc();

(function abc(){
    alert("test");   
}()); */


/*******배열********/
var arr = [];
var arr1 = new Array();
arr[0] = "A";
arr[1] = "B";


var arr1 = new Array();
arr1[0] = [];
arr1[0][0] = "A";
arr1[0][1] = "a";

var arr2 = ["A", "B", "C"];
arr2[3] = "D";
arr2.push("E");   //E를 맨 마지막번에 넣어주는 것이 .push();
console.log(arr2);

var arr3 = {
    electronic:[{
        name:"TV",
        brand:"Samsung",
        color:"Black",
        position:"Living room",
        year:2015
    },{
        name:"Smart Phone",
        brand:"Apple",
        color:"Black",
        position:"My Hand",
        year:2017
    }],
    furniture:[],
    etc:[]
}
console.log(arr3.electronic[1].position);

//배열에는 문자와 숫자만 들어갈수 있는게 아니라 객체도 들어갈수 있다.
var arr3 = {
    cate : [{
    title:"Samsung tv",
    color: "White"
},{
    title:"Sony tv",
    color: "Black"
},{
    title:"LG tv",
    color: "White"
}],
    length:3
};   
console.log(arr3.cate[1].title);


var members = [];
for(var i =0; i<10; i++){
    members[i] = [];
}
members[0][0] = "홍길동";
members[0][1] = 24;
members[0][2] = "M";
members[0][3] = "010-2222-3333";
members[0][4] = "서울 종로구 233";

/*******객체(object) 개념********/
var man = [];
man[0] ={
    name: "홍길동",
    age: 24,
    gender: "M",
    tel: "010-2222-3333",
    addr: "서울 종로구 233"
}; 
man[1] ={
    name: "홍길순",
    age: 26,
    gender: "F",
    tel: "010-4444-3333",
    addr: "서울 종로구 556"
};
man[2] ={
    name: "홍길만",
    age: 19,
    gender: "M",
    tel: "010-5555-6666",
    addr: "서울 종로구 777",
    run: function(speed){   //run이라는 함수를 가지고 speed라는 인자를 갖는다/ 메소드
        alert(this.name+"은 "+speed+" 속도로 뜁니다.");
    }
};
console.log(man[0].age); //Getter 값을 가져온다라는 의미 (24)
man.age = 25;          //Setter 값을 바꾼다  
console.log(man[0].age);   //(25)

console.log(man[1]);
console.log(man[1].addr);

man[2].money = 10000;    //없는 속성을 만들어 놓고 
console.log(man[2]);      //man[2]를 출력하면 속성 추가 된다.
man[2].run(5);

man[3] = {};
man[3].name = "홍길이";
man[3].age = 28;
man[3].gender = "F";
man[3].height = 175;
console.log(man[3]);





/* var cates = {
    cate: [{
        title: "SHOP PAGES",
        sub: [{
            title: "Filters area",
            icon: "",
            link: "#"
        },{
            title: "Hidden sidebar",
            icon: "HOT",
            link: "#"
        },{
            title: "No page heading",
            icon: "",
            link: "#"
        },{
            title: "Small categories menu",
            icon: "",
            link: "#"
        },{
            title: "Masonry grid",
            icon: "",
            link: "#"
        },{
            title: "Products list view",
            icon: "",
            link: "#"
        },{
            title: "With background",
            icon: "",
            link: "#"
        },{
            title: "Category description",
            icon: "",
            link: "#"
        },{
            title: "Only categories",
            icon: "",
            link: "#"
        },{
            title: "Header overlap",
            icon: "",
            link: "#"
        },{
            title: "Default shop",
            icon: "",
            link: "#"
        }]
    
    },{

    }],
    length: 1
};
 */

 var cates = [{
     main:{
        title:"SHOP PAGES",
        icon:"",
        link:"#"
    },
     sub:[{
         title:"Filters area",
         icon:"",
         link:"#"
     },{
        title:"Hidden sidebar",
        icon:"HOT",
        link:"#"
     },{
        title:"No page heading",
        icon:"",
        link:"#"
     },{
        title:"Small categories menu",
        icon:"",
        link:"#"
     },{
        title:"Masonry grid",
        icon:"",
        link:"#"
     },{
        title:"Products list view",
        icon:"",
        link:"#"
     },{
        title:"With background",
        icon:"",
        link:"#"
     },{
        title:"Category description",
        icon:"",
        link:"#"
     },{
        title:"Only categories",
        icon:"",
        link:"#"
     },{
        title:"Header overlap",
        icon:"",
        link:"#"
     },{
        title:"Default shop",
        icon:"",
        link:"#"
     }]
 },{
    main:{
        title:"PRODUCT HOVERSEFFECTS",
        icon:"",
        link:"#"
    },
    sub:[{
        title:"Summary on hover",
        icon:"",
        link:"#"
    },{
       title:"Icons on hover",
       icon:"HOT",
       link:"#"
    },{
       title:"Icons & Add to cart",
       icon:"",
       link:"#"
    },{
       title:"Full info on image",
       icon:"",
       link:"#"
    },{
       title:"All info on hover",
       icon:"",
       link:"#"
    },{
       title:"Button on image",
       icon:"",
       link:"#"
    },{
       title:"Quick shop",
       icon:"",
       link:"#"
    },{
       title:"Tiled hover",
       icon:"",
       link:"#"
    },{
       title:"Categories hover #1",
       icon:"",
       link:"#"
    },{
       title:"Categories hover #2",
       icon:"",
       link:"#"
    }]
 },{
    main:{
        title:"PRODUCT PAGESUNLIMITED",
        icon:"",
        link:"#"
    },
    sub:[{
       title:"Default",
       icon:"",
       link:"#"
    },{
       title:"Centered",
       icon:"",
       link:"#"
    },{
        title:"Sticky description",
       icon:"",
       link:"#"
    },{
        title:"With shadow",
       icon:"",
       link:"#"
    },{
        title:"With background",
       icon:"",
       link:"#"
    },{
        title:"Accordion tabs",
       icon:"",
       link:"#"
    },{
        title:"Accordion in content",
       icon:"",
       link:"#"
    },{
        title:"Sticky add to cart",
       icon:"",
       link:"#"
    },{
        title:"With sidebar",
       icon:"",
       link:"#"
    },{
        title:"Extra content #1",
       icon:"",
       link:"#"
    },{
        title:"Extra content #2",
       icon:"",
       link:"#"
    }]
 },{
    main:{
        title:"PRODUCT IMAGES",
        icon:"",
        link:"#"
    },
    sub:[{
        title:"Thumbnails left",
       icon:"",
       link:"#"
    },{
        title:"Thumbnails bottom",
       icon:"",
       link:"#"
    },{
        title:"Sticky images",
       icon:"",
       link:"#"
    },{
        title:"One column",
       icon:"",
       link:"#"
    },{
        title:"Two columns",
       icon:"",
       link:"#"
    },{
        title:"Combined grid",
       icon:"",
       link:"#"
    },{
        title:"Images full-width",
       icon:"",
       link:"#"
    },{
        title:"Zoom image",
       icon:"",
       link:"#"
    },{
        title:"Images size - small",
       icon:"",
       link:"#"
    },{
        title:"Images size - large",
       icon:"",
       link:"#"
    },{
        title:"Without thumbnails",
       icon:"",
       link:"#"
    }]
 },{
    main:{
        title:"WOOCOMMERCE",
        icon:"",
        link:"#"
    },
    sub:[{
        title:"Simple product",
       icon:"",
       link:"#"
    },{
        title:"Variable product",
       icon:"",
       link:"#"
    },{
        title:"External product",
       icon:"",
       link:"#"
    },{
        title:"Grouped product",
       icon:"",
       link:"#"
    },{
        title:"Shopping Cart",
       icon:"",
       link:"#"
    },{
        title:"Checkout",
       icon:"",
       link:"#"
    },{
        title:"My account",
       icon:"",
       link:"#"
    },{
        title:"Wishlist",
       icon:"",
       link:"#"
    },{
        title:"Track order",
       icon:"",
       link:"#"
    },{
        title:"Custom 404 page #1",
       icon:"",
       link:"#"
    },{
        title:"Custom 404 page #2",
       icon:"",
       link:"#"
    }]
 },{
    main:{
        title:"FEATURESBEST",
        icon:"",
        link:"#"
    },
    sub:[{
        title:"360° product viewer",
       icon:"",
       link:"#"
    },{
        title:"With video",
       icon:"",
       link:"#"
    },{
        title:"With instagram",
       icon:"",
       link:"#"
    },{
        title:"With countdown timer",
       icon:"",
       link:"#"
    },{
        title:"Product presentation",
       icon:"",
       link:"#"
    },{
        title:"Variations swatches",
       icon:"",
       link:"#"
    },{
        title:"Infinit scrolling",
       icon:"NEW",
       link:"#"
    },{
        title:"Load more button",
       icon:"",
       link:"#"
    },{
        title:"Catalog mode",
       icon:"",
       link:"#"
    },{
        title:"Cookies law info",
       icon:"",
       link:"#"
    },{
        title:"Parallax scrolling",
       icon:"",
       link:"#"
    }]
 }];
console.log(cates);


/* SHOP PAGES
Filters area
Hidden sidebar
No page heading
Small categories menu
Masonry grid
Products list view
With background
Category description
Only categories
Header overlap
Default shop

PRODUCT HOVERSEFFECTS
Summary on hover
Icons on hover
Icons & Add to cart
Full info on image
All info on hover
Button on image
Standard button
Quick shop
Tiled hover
Categories hover #1
Categories hover #2

PRODUCT PAGESUNLIMITED
Default
Centered
Sticky description
With shadow
With background
Accordion tabs
Accordion in content
Sticky add to cart
With sidebar
Extra content #1
Extra content #2

PRODUCT IMAGES
Thumbnails left
Thumbnails bottom
Sticky images
One column
Two columns
Combined grid
Images full-width
Zoom image
Images size - small
Images size - large
Without thumbnails

WOOCOMMERCE
Simple product
Variable product
External product
Grouped product
Shopping Cart
Checkout
My account
Wishlist
Track order
Custom 404 page #1
Custom 404 page #2

FEATURESBEST
360° product viewer
With video
With instagram
With countdown timer
Product presentation
Variations swatches
Infinit scrollingNEW
Load more button
Catalog mode
Cookies law info
Parallax scrolling */

/*****객체 응용********/
var Man = (function(){
    /*생성자 (constructor) */
    function Man() {

    }
}());