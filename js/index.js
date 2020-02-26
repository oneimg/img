$('.dvimg').click(function () {  
  if ($(this).is('.selected'))    
    $(this).removeClass('selected');
  else
    $(this).addClass('selected'); 
});

$('.reselect').click(function () {  
  if ($('.selected').length!=0)    
    $('.selected').removeClass('selected');
});

$('.send').click(function () {
    var arr=$('.selected');
    var data;
    if(arr.length!=0){
        for(var i=0;i<arr.length;i++){
            var str=$(arr[i]).attr('name');
            if(data)
                data=data+','+str;
            else
                data=str;
        }
    }
    if(data=='SSR_2'){
        alert("请选择另一个角色!");
        return;
    }

    $('.showf').addClass('hidden');
    $('.hideshow').removeClass('hidden');
    $('.reseach').empty();

    $.post("search",{"_token":$('meta[name="_token"]').attr('content'),'data':data},function(data){
        $('.hideshow').addClass('hidden');
        $('.reseach').append(data);
    })
});