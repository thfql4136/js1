/* $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition:true
  }); */

  $('.grid').imagesLoaded( function() {  //이미지가 로드 된 후에 masonry가 작동되어라, .gird(내 이미지들) .imagesLoaded(다 불러드리면) function() { 이부분을 실행한다
    // console.log($(this));
     $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition:true
    }); 
  });

  