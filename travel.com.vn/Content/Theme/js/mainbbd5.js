(function($){"use strict";jQuery(document).ready(function($){LoadMore(".comments .comment");LoadMore(".wrap-results .wrap-result");LoadMore(".promotion-search-result__result .promotion-search-result__result__item");$("#sidebarCollapse").on("click",function(){$("#sidebar").toggleClass("active");$(this).toggleClass("active");});$(".setting-item .toggle-edit-form").on("click",function(){let ele=$(this).parents("div.row.setting-item").find(".edit-form");if(ele.hasClass("active")){ele.removeClass("active");$(this).text("Chỉnh sửa");}else{$(".edit-form").removeClass("active");$(".setting-item .toggle-edit-form").text("Chỉnh sửa");ele.addClass("active");$(this).text("Huỷ");}});$(".edit-form-submit").on("click",function(){let ele=$(this).parents("div.row.setting-item");ele.find(".edit-form").removeClass("active");ele.find(".display-form .toggle-edit-form").text("Chỉnh sửa");});$(".location-select").select2();$("#navbarSideCollapse").on("click",function(){$("#navbarsExampleDefault").toggleClass("open");});$("#toggle-profile-menu").on("click",function(){$(".profile-links").slideToggle();});if($(".short-summary").length){$(".top-bar").ready(function(){var clientHeight=document.getElementById("full-summary").clientHeight;if(clientHeight){$("#full-summary").css("margin-bottom",-clientHeight);}});$(".top-bar").on("click",function(){var ele=$(".full-summary").css("margin-bottom");var clientHeight=document.getElementById("full-summary").clientHeight;if(clientHeight){if(parseInt(ele)==-clientHeight){$("#full-summary").css("margin-bottom","0");$(".top-bar i").css("transform","rotate(180deg)");}else{$("#full-summary").css("margin-bottom",-clientHeight);$(".top-bar i").css("transform","rotate(0deg)");}}});$(".price-detail").on("click",function(){var ele=$(".full-summary").css("margin-bottom");var clientHeight=document.getElementById("full-summary").clientHeight;if(clientHeight){if(parseInt(ele)==-clientHeight){$("#full-summary").css("margin-bottom","0");$(".price-detail i").css("transform","rotate(180deg)");}else{$("#full-summary").css("margin-bottom",-clientHeight);$(".price-detail i").css("transform","rotate(0deg)");}}});}
if($(".slide-gallery")[0]){$(".slide-gallery").slick({slidesToShow:5,slidesToScroll:1,arrows:true,dots:false,autoplay:false,prevArrow:"",nextArrow:'<i class="fal fa-angle-right"></i>',responsive:[{breakpoint:768.98,settings:{slidesToShow:3,slidesToScroll:1,arrows:false,dots:false,},},],});}
$(".explore-tour-slide").slick({slidesToShow:5,slidesToScroll:1,infinite:false,centerMode:false,centerPadding:35,arrows:false,dots:false,prevArrow:"",nextArrow:"",responsive:[{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:false,centerMode:false,},},],});if($(".destination-slide")[0]){$(".destination-slide").slick({slidesToShow:2,slidesToScroll:1,arrows:false,dots:false,prevArrow:"",nextArrow:"",infinite:false,responsive:[{breakpoint:768.98,settings:{slidesToShow:3,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},],});}
$(".tour-slide").each(function(){$(this).slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,prevArrow:"",nextArrow:"",infinite:false,responsive:[{breakpoint:768.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},],});});$(".tour-slide").not(".slick-initialized").slick();if($(".combo-slide")[0]&&$("body").width()<768.98){$(".combo-slide").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,prevArrow:"",nextArrow:"",infinite:false,responsive:[{breakpoint:768.98,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,centerMode:false,dots:false,},},],});}
if($(".news-slide")[0]&&$("body").width()<768){$(".news-slide").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,prevArrow:"",nextArrow:"",infinite:false,});}
if($(".travel-tips-slide")[0]&&$("body").width()<768){$(".travel-tips-slide").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,prevArrow:"",nextArrow:"",infinite:false,});}
if($(".image-inner")[0]&&$("body").width()<768){$(".image-inner").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:true,autoplay:false,prevArrow:"",nextArrow:"",infinite:false,});}
if($(".products")[0]&&$("body").width()<768){$(".products").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,autoplay:false,prevArrow:"",nextArrow:"",infinite:false,});}
$(".promotion-slide").slick({slidesToShow:3,slidesToScroll:1,autoplay:true,autoplaySpeed:2000,infinite:true,centerMode:false,dots:true,arrows:false,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,arrows:false,centerMode:true,dots:true,},},{breakpoint:512,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,arrows:false,centerMode:true,dots:false,},},],});$(document).on("show.bs.tab",'.explore-tour__list button[data-bs-toggle="tab"]',function(){$(".explore-tour-slide").slick("refresh");});$(document).on("mouseover",".megamenu .menu-tab-items li",function(){var index=$(this).index();$(this).siblings().removeClass("active");$(this).addClass("active");$(".menu-tab-panels>div").removeClass("active");$(".menu-tab-panels>div").each(function(){if($(this).index()==index){$(this).addClass("active");}});});$(document).on("click",".payment-item .check",function(){$(".payment-item").removeClass("active");$(this).parents(".payment-item").addClass("active");});$(document).on("click",".tab-panels .goup-btn a",function(e){e.preventDefault();$(".tab-panels .goup-btn a").removeAttr("checked");$(this).attr("checked","checked");$(".tab-panels .choose-panel").removeClass("open");if($(this).index()==0){$(".tab-panels .choose-panel").removeClass("open");$(".tab-panels .choose-panel.choose-room").addClass("open");}
if($(this).index()==1){$(".tab-panels .choose-panel").removeClass("open");$(".tab-panels .choose-panel.choose-service").addClass("open");}});$(document).on("click",".tour-detail .block >h2,.tour-detail .block >h3",function(){$(".block .inner").removeClass("active");$(this).next().slideToggle();});$(document).on("click",".tour-detail .section-09 article h3",function(){$(".tour-detail .section-09 article .panel").removeClass("active");console.log($(this).next().addClass("active"));});$(document).on("click",".flight-hotel-detail .section-03 .right .group-convenient > ul > li",function(){$(this).find("div").slideToggle();});$(document).on("click",".tab-items li",function(){var index=$(this).index();$(".tab-items li").removeClass("active");$(this).addClass("active");$(".tab-panels>div").removeClass("active");$(".tab-panels>div").each(function(){if($(this).index()==index){$(this).addClass("active");}});});$(document).on("click",".day .wrapper .date-center",function(e){e.preventDefault();let index=$(this).closest(".day").index();$(".day .wrapper .date-center").removeClass("active");$(this).addClass("active");$(".timeline-section>div").removeClass("active");$(".timeline-section>div").each(function(){if($(this).index()==index){$("html,body").animate({scrollTop:$(this).offset().top,},800);}});});$(document).on("click",".change-number .btn-click",function(){var qty=$(this).parents(".change-number").find(".number");var val=parseInt(qty.text());if(Number.isNaN(val)){val=0;}
if($(this).hasClass("plus")){qty.text(parseInt(val+1));}else{if(val>=1){qty.text(parseInt(val-1));}}});$(document).on("click",".vmb-item .view-more",function(e){e.preventDefault();$(this).parents(".vmb-item").toggleClass("active");});$(document).on("click",".transport-hotel .transport-hotel-order-arrow",function(e){e.preventDefault();$(this).parents(".transport-hotel").toggleClass("active");});$(document).on("click",".restaurant .transport-hotel-order-arrow",function(e){e.preventDefault();$(this).parents(".restaurant").toggleClass("active");});$(".input-date").datepicker({dateFormat:"dd-mm-yy",});if($(".daterange")[0]){$(".daterange").daterangepicker({opens:"left",startDate:moment().format("DD/MM/YYYY"),endDate:moment().format("DD/MM/YYYY"),locale:{format:"DD/MM/YYYY",},},function(start,end,label){console.log("A new date selection was made: "+
start.format("DD/MM/YYYY")+
" to "+
end.format("DD/MM/YYYY"));});$(".daterange").on("apply.daterange",function(ev,picker){$(this).val(picker.startDate.format("DD/MM/YYYY")+
" - "+
picker.endDate.format("DD/MM/YYYY"));});$(".daterange").on("cancel.daterange",function(ev,picker){$(this).val("");});}
if($(".daterange-modify")[0]){$(".daterange-modify").daterangepicker({opens:"left",startDate:moment().format("DD/MM/YYYY"),endDate:moment().format("DD/MM/YYYY"),locale:{format:"DD/MM/YYYY",},},function(start,end,label){console.log("A new date selection was made: "+
start.format("DD/MM/YYYY")+
" to "+
end.format("DD/MM/YYYY"));});$(".daterange-modify").on("apply.daterange",function(ev,picker){$(this).val(picker.startDate.format("DD/MM/YYYY")+
" - "+
picker.endDate.format("DD/MM/YYYY"));});$(".daterange-modify").on("cancel.daterange",function(ev,picker){$(this).val("");});}
if($("#datepicker1")[0]){$("#datepicker1").datepicker({altField:"#alternate1",altFormat:"DD, d MM, yy",});}
if($("#datepicker2")[0]){$("#datepicker2").datepicker({altField:"#alternate2",altFormat:"DD, d MM, yy",});}
if($("#datepicker3")[0]){$("#datepicker3").datepicker({altField:"#alternate3",altFormat:"DD, d MM, yy",});}
if($("#datepicker4")[0]){$("#datepicker1").datepicker({altField:"#alternate4",altFormat:"DD, d MM, yy",});}
if($("#slider-range")[0]){$("#slider-range").slider({range:true,min:0,max:10000000,step:100000,values:[0,1000000],slide:function(event,ui){$("#amount").val(ui.values[0]+"đ - "+ui.values[1]+"đ");},});$("#amount").val($("#slider-range").slider("values",0)+
"đ - "+
$("#slider-range").slider("values",1)+
"đ");}
$(document).on("click",".filter-rate label",function(e){e.preventDefault();$(".filter-rate input[name=rate]").removeAttr("checked");$(this).prev().attr("checked","checked");});$(document).on("click",".button-check button",function(e){e.preventDefault();$(this).parent().find("button,select").removeAttr("checked");$(this).attr("checked","checked");});$(document).on("change",".choose-othor-room",function(e){e.preventDefault();$(this).parent().find("button").removeAttr("checked");$(this).attr("checked","checked");});$(document).on("click",".notice-info",function(e){e.preventDefault();$(".customer-notice").addClass("active");$(".mash-layout").addClass("active");});$(document).on("click",".mash-layout",function(e){e.preventDefault();$(".customer-notice").removeClass("active");$(".mash-layout").removeClass("active");});$(document).on("click",".input-text",function(){$(".menu-search").toggleClass("active");});$(document).click(function(e){$(".search-form").not($(".search-form").has($(e.target))).children(".menu-search").removeClass("active");});$("#top").click(function(){$("body,html").animate({scrollTop:0,},1500);return false;});function LoadMore(item){if(!$(item)[0]){return;}
var total=parseInt($(item).length);var loaded=parseInt($("#loadMore").attr("loaded"));var step=parseInt($("#loadMore").attr("step"));var proges=(loaded/total)*100;$(".loadmore-title .loaded").text(loaded);$(".loadmore-title .total").text(total);$(".loadmore-bar span").css("width",proges+"%");$(item).slice(0,loaded).show();$("#loadMore").on("click",function(e){e.preventDefault();if(loaded>=total){$("#loadMore").text("Đã hết");}else{loaded+=step;$(item+":hidden").slice(0,step).slideDown();$(".loadmore-bar span").css("width",(loaded/total)*100+"%");$("#loadMore").attr("loaded",loaded);$(".loadmore-title .loaded").text(loaded);if($(item+":hidden").length==0){$("#load").fadeOut("slow");}
$("html,body").animate({scrollTop:$(this).offset().top,},1500);}});}
function renderTestimonial(){$(".home-page__testimonial .testimonial-item .testimonial-item__content h6").each(function(){var string=$(this).text().trim().toLowerCase();var uppercaseString=string.charAt(0).toUpperCase()+string.slice(1);return $(this).text(uppercaseString);});}});})(jQuery);