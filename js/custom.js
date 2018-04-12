$(function(){
	var shrinkHeader=100;
	$(window).scroll(function(e){
		var scroll=getCurrentScroll();
		if(scroll>=shrinkHeader){
			$('.h_new').addClass('fixed');
		}else{
			$('.h_new').removeClass('fixed');
		}
	});
	
	var start=new Date();
	start.setFullYear(start.getFullYear()-100);
	var end=new Date();
	end.setFullYear(end.getFullYear()-18);
});
function getCurrentScroll(){
	return window.pageYOffset||document.documentElement.scrollTop;
}
$('.nav-container').click(function(e){
	e.stopImmediatePropagation();
	$('.mainmenu').toggleClass('nav-open');
	$('.nav-container').toggleClass('change');
});
$('.mainmenu ul li a').click(function(){
	$('.mainmenu').removeClass('nav-open');$('.nav-container').toggleClass('change');});var acc=document.getElementsByClassName("accordion");var i;for(i=0;i<acc.length;i++){acc[i].onclick=function(){this.classList.toggle("activeAcc");var panelAccordion=this.nextElementSibling;if(panelAccordion.style.maxHeight){panelAccordion.style.maxHeight=null;}else{panelAccordion.style.maxHeight=panelAccordion.scrollHeight+"px";}}}$(document).ready(function(e){$('.btn').click(function(event){$('#request-book').addClass('open');});$('.price-pop-close').click(function(event){$('#request-book').removeClass('open');});$('.enter-school').click(function(event){$('.searchDetail').slideDown();});$('#filter-btn').click(function(event){$('#all-filter').addClass('open');});$('.filter-close').click(function(event){$('#all-filter').removeClass('open');});$('#map-btn').click(function(event){$('#world-map').addClass('open');});$('.map-close').click(function(event){$('#world-map').removeClass('open');});$("#slider-range").slider({range:true,min:0,max:5000,values:[100,1000],slide:function(event,ui){$('#min_price').val(ui.values[0]);$('#max_price').val(ui.values[1]);$("#amount").val("$"+ui.values[0]+" - $"+ui.values[1]);},stop:function(event,ui){searchbyprice();}});$("#amount").val("$"+$("#slider-range").slider("values",0)+"  -  $"+$("#slider-range").slider("values",1));

/*$(".owlNext").click(function(){$(this).parent().find('.owl-carousel').trigger('next.owl.carousel');})
$('.owlPrev').click(function(){$(this).parent().find('.owl-carousel').trigger('prev.owl.carousel');})
$("#slider3").owlCarousel({items:1,loop:true,dots:false,stagePadding:0,margin:0});$("#slider4").owlCarousel({items:2,loop:true,nav:true,stagePadding:20,dots:false,margin:0,responsive:{0:{items:1},600:{items:1},992:{items:2}}});$("#slider5").owlCarousel({items:4,loop:true,nav:true,stagePadding:15,dots:false,margin:0,responsive:{0:{items:1},600:{items:3},992:{items:4}}});$(".owl-prev").text(" ");$(".owl-next").text(" ");*/

$('.toggle').click(function(e){e.preventDefault();var $this=$(this);if($this.next().hasClass('show')){$this.next().removeClass('show');$this.next().slideUp(350);}else{$this.parent().parent().find('li .inner').removeClass('show');$this.parent().parent().find('li .inner').slideUp(350);$this.next().toggleClass('show');$this.next().slideToggle(350);}});});function pop(div_id){$('#snPopupVal').val(1);$('#frmhomesearch :input').prop('disabled',true);$('#frmsearch :input').prop('disabled',true);$('#bookdetail :input').prop('disabled',true);if($("#"+div_id).length>0){$('.header-bg .container').addClass('hideCont');$("#"+div_id).addClass('showPop');$('.ontop').css('display','block');$('.ontop').addClass('showPopOver');if(typeof $.fn.fullpage!='undefined'){}else{$('body').css({'overflow':'hidden'});}}}function hide(div_id){$('#snPopupVal').val(0);$('#frmhomesearch :input').prop('disabled',false);$('#frmsearch :input').prop('disabled',false);$('#bookdetail :input').prop('disabled',false);if($("#"+div_id).length>0){if($("#"+div_id).hasClass('showPop')){$("#"+div_id).removeClass('showPop');$('.ontop').removeClass('showPopOver');$('.header-bg .container').removeClass('hideCont');if(typeof $.fn.fullpage!='undefined'){}else{$('body').css({'overflow':'scroll'});}}}window.location.hash='';}document.onkeydown=function(evt){evt=evt||window.event;if(evt.keyCode==27){parent.hide('popup-group');hide('popup-group');$('#frmhomesearch :input').prop('disabled',false);$('#frmsearch :input').prop('disabled',false);$('#bookdetail :input').prop('disabled',false);}};$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},1000,function(){var $target=$(target);$target.focus();if($target.is(":focus")){return false;}else{$target.attr('tabindex','-1');$target.focus();};});}}});$(document).ready(function(){$('.nav-icon').click(function(){$('.mobile-menu').toggleClass('my-profile');});$('.mobile-menu li a').click(function(){$('.mobile-menu').removeClass('my-profile');});});$(window).resize(function(){});function openTab(evt,tabName){document.domain=ssDomain;var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("tabcontent");for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none";}tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){tablinks[i].className=tablinks[i].className.replace(" active","");}document.getElementById(tabName).style.display="block";evt.currentTarget.className+=" active";}function notifyAlertMessage(ssMessage,type){$.notify(ssMessage,{className:type,clickToHide:true,autoHide:true,autoHideDelay:5000,arrowShow:true,arrowSize:5,position:"top center",globalPosition:"center",elementPosition:"top center",globalPosition:"top center",style:"bootstrap",showAnimation:"slideDown",showDuration:400,hideAnimation:"slideUp",hideDuration:200,gap:2});}