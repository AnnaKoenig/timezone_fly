$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});
/*---get_Scroll_Top
----------------------------*/
var $top_checker = window.innerHeight * 6;

      
        function get_Scroll_Top(){
          return $(window).scrollTop();
        }
        
        $(window).scroll(function(e){
          var current_scroll = get_Scroll_Top();
            console.log(current_scroll,$top_checker );
          if(current_scroll >= $top_checker - $top_checker*.05){
            e.preventDefault();
            console.log('sind da')

            $('html,body').animate({
              scrollTop : window.innerHeight
            })


          }
          console.log(get_Scroll_Top());


        });
/*---sections
----------------------------*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage','4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
		sectionsColor: ['#fff', '#a08678', ' #fff','#000000', '#fff', '#a08678', '#3f565d', '#a08678'],
		autoScrolling: false,
		loopTop: false,
		loopBottom: true,
		onLeave: function(index, nextIndex, direction){
		console.log(index, nextIndex, direction)
		if(nextIndex === 9){			
			console.log('letzte Slide');
		}
		else{
			$('.active .utc').removeClass('active-utc');
		}
		$('.active .utc').addClass('active-utc onLeave');
		},
        afterLoad: function(anchorLink, index){
        	//console.log(anchorLink, index)
			$('.active .utc').addClass('active-utc afterLoad');
			
			console.log('afterLoad')},
		afterRender: function(){console.log('afterRender')},
		afterResize: function(){console.log('afterResize')}
	});
});
/*---scroll to top
----------------------------*/
var $top_checker = window.innerHeight * 6;
	function get_Scroll_Top(){
		return $(window).scrollTop();
	}
	$(window).scroll(function(e){
		var current_scroll = get_Scroll_Top();
			console.log(current_scroll,$top_checker );
		if(current_scroll >= $top_checker - $top_checker*.09){
			e.preventDefault();
			$('html,body').animate({
				scrollTop : window.innerHeight
			})
		}
		console.log(get_Scroll_Top());
	});
/*---feeds
----------------------------*/
      rssfeed_url = new Array(); 
      rssfeed_url[0]="http://www.aljazeera.com/xml/rss/all.xml";  
      rssfeed_frame_width="180"; 
      rssfeed_frame_height="250"; 
      rssfeed_scroll="on"; 
      rssfeed_scroll_step="6"; 
      rssfeed_scroll_bar="off"; 
      rssfeed_target="_blank"; 
      rssfeed_font_size="12"; 
      rssfeed_font_face=""; 
      rssfeed_border="on"; 
      rssfeed_css_url="http://feed.surfing-waves.com/css/style1.css"; 
      rssfeed_title="on"; 
      rssfeed_title_name=""; 
      rssfeed_title_bgcolor="#3366ff"; 
      rssfeed_title_color="#fff"; 
      rssfeed_title_bgimage="http://"; 
      rssfeed_footer="off"; 
      rssfeed_footer_name="rss feed"; 
      rssfeed_footer_bgcolor="#fff"; 
      rssfeed_footer_color="#333"; 
      rssfeed_footer_bgimage="http://"; 
      rssfeed_item_title_length="50"; 
      rssfeed_item_title_color="#666"; 
      rssfeed_item_bgcolor="#fff"; 
      rssfeed_item_bgimage="http://"; 
      rssfeed_item_border_bottom="on"; 
      rssfeed_item_source_icon="off"; 
      rssfeed_item_date="off"; 
      rssfeed_item_description="on"; 
      rssfeed_item_description_length="120"; 
      rssfeed_item_description_color="#666"; 
      rssfeed_item_description_link_color="#333"; 
      rssfeed_item_description_tag="off"; 
      rssfeed_no_items="0"; 
      rssfeed_cache = "248014fee6467ab78c7360150691eb43"; 
      
      //--> 
<!-- 
        rssfeed_url = new Array(); 
        rssfeed_url[0]="http://feeds.feedburner.com/general-interest-ogj";  
        rssfeed_frame_width="180"; 
        rssfeed_frame_height="250"; 
        rssfeed_scroll="on"; 
        rssfeed_scroll_step="6"; 
        rssfeed_scroll_bar="off"; 
        rssfeed_target="_blank"; 
        rssfeed_font_size="12"; 
        rssfeed_font_face=""; 
        rssfeed_border="on"; 
        rssfeed_css_url="http://feed.surfing-waves.com/css/style1.css"; 
        rssfeed_title="on"; 
        rssfeed_title_name=""; 
        rssfeed_title_bgcolor="#3366ff"; 
        rssfeed_title_color="#fff"; 
        rssfeed_title_bgimage="http://"; 
        rssfeed_footer="off"; 
        rssfeed_footer_name="rss feed"; 
        rssfeed_footer_bgcolor="#fff"; 
        rssfeed_footer_color="#333"; 
        rssfeed_footer_bgimage="http://"; 
        rssfeed_item_title_length="50"; 
        rssfeed_item_title_color="#666"; 
        rssfeed_item_bgcolor="#fff"; 
        rssfeed_item_bgimage="http://"; 
        rssfeed_item_border_bottom="on"; 
        rssfeed_item_source_icon="off"; 
        rssfeed_item_date="off"; 
        rssfeed_item_description="on"; 
        rssfeed_item_description_length="120"; 
        rssfeed_item_description_color="#666"; 
        rssfeed_item_description_link_color="#333"; 
        rssfeed_item_description_tag="off"; 
        rssfeed_no_items="0"; 
        rssfeed_cache = "7157553770eb18b15210d26781b234f4"; 
        //--> 
<!-- 
      rssfeed_url = new Array(); 
      rssfeed_url[0]="http://www.aljazeera.com/xml/rss/all.xml";  
      rssfeed_frame_width="180"; 
      rssfeed_frame_height="250"; 
      rssfeed_scroll="on"; 
      rssfeed_scroll_step="6"; 
      rssfeed_scroll_bar="off"; 
      rssfeed_target="_blank"; 
      rssfeed_font_size="12"; 
      rssfeed_font_face=""; 
      rssfeed_border="on"; 
      rssfeed_css_url="http://feed.surfing-waves.com/css/style1.css"; 
      rssfeed_title="on"; 
      rssfeed_title_name=""; 
      rssfeed_title_bgcolor="#3366ff"; 
      rssfeed_title_color="#fff"; 
      rssfeed_title_bgimage="http://"; 
      rssfeed_footer="off"; 
      rssfeed_footer_name="rss feed"; 
      rssfeed_footer_bgcolor="#fff"; 
      rssfeed_footer_color="#333"; 
      rssfeed_footer_bgimage="http://"; 
      rssfeed_item_title_length="50"; 
      rssfeed_item_title_color="#666"; 
      rssfeed_item_bgcolor="#fff"; 
      rssfeed_item_bgimage="http://"; 
      rssfeed_item_border_bottom="on"; 
      rssfeed_item_source_icon="off"; 
      rssfeed_item_date="off"; 
      rssfeed_item_description="on"; 
      rssfeed_item_description_length="120"; 
      rssfeed_item_description_color="#666"; 
      rssfeed_item_description_link_color="#333"; 
      rssfeed_item_description_tag="off"; 
      rssfeed_no_items="0"; 
      rssfeed_cache = "248014fee6467ab78c7360150691eb43"; 
        //--> 
<!-- 
      rssfeed_url = new Array(); 
      rssfeed_url[0]="http://www.themoscowtimes.com/rss/news/";  
      rssfeed_frame_width="180"; 
      rssfeed_frame_height="250"; 
      rssfeed_scroll="on"; 
      rssfeed_scroll_step="6"; 
      rssfeed_scroll_bar="off"; 
      rssfeed_target="_blank"; 
      rssfeed_font_size="12"; 
      rssfeed_font_face=""; 
      rssfeed_border="on"; 
      rssfeed_css_url="http://feed.surfing-waves.com/css/style1.css"; 
      rssfeed_title="on"; 
      rssfeed_title_name=""; 
      rssfeed_title_bgcolor="#3366ff"; 
      rssfeed_title_color="#fff"; 
      rssfeed_title_bgimage="http://"; 
      rssfeed_footer="off"; 
      rssfeed_footer_name="rss feed"; 
      rssfeed_footer_bgcolor="#fff"; 
      rssfeed_footer_color="#333"; 
      rssfeed_footer_bgimage="http://"; 
      rssfeed_item_title_length="50"; 
      rssfeed_item_title_color="#666"; 
      rssfeed_item_bgcolor="#fff"; 
      rssfeed_item_bgimage="http://"; 
      rssfeed_item_border_bottom="on"; 
      rssfeed_item_source_icon="off"; 
      rssfeed_item_date="off"; 
      rssfeed_item_description="on"; 
      rssfeed_item_description_length="120"; 
      rssfeed_item_description_color="#666"; 
      rssfeed_item_description_link_color="#333"; 
      rssfeed_item_description_tag="off"; 
      rssfeed_no_items="0"; 
      rssfeed_cache = "3172c2675d6c1a33d044c02deafc2d6c"; 
        //--> 
<!-- 
    rssfeed_url = new Array(); 
    rssfeed_url[0]="http://www.jpost.com/Rss/RssFeedsMiddleEastNews.aspx";  
    rssfeed_frame_width="180"; 
    rssfeed_frame_height="550"; 
    rssfeed_scroll="on"; 
    rssfeed_scroll_step="6"; 
    rssfeed_scroll_bar="off"; 
    rssfeed_target="_blank"; 
    rssfeed_font_size="12"; 
    rssfeed_font_face=""; 
    rssfeed_border="on"; 
    rssfeed_css_url="http://feed.surfing-waves.com/css/style1.css"; 
    rssfeed_title="on"; 
    rssfeed_title_name=""; 
    rssfeed_title_bgcolor="#3366ff"; 
    rssfeed_title_color="#fff"; 
    rssfeed_title_bgimage="http://"; 
    rssfeed_footer="off"; 
    rssfeed_footer_name="rss feed"; 
    rssfeed_footer_bgcolor="#fff"; 
    rssfeed_footer_color="#333"; 
    rssfeed_footer_bgimage="http://"; 
    rssfeed_item_title_length="50"; 
    rssfeed_item_title_color="#666"; 
    rssfeed_item_bgcolor="#fff"; 
    rssfeed_item_bgimage="http://"; 
    rssfeed_item_border_bottom="on"; 
    rssfeed_item_source_icon="off"; 
    rssfeed_item_date="off"; 
    rssfeed_item_description="on"; 
    rssfeed_item_description_length="120"; 
    rssfeed_item_description_color="#666"; 
    rssfeed_item_description_link_color="#333"; 
    rssfeed_item_description_tag="off"; 
    rssfeed_no_items="0"; 
    rssfeed_cache = "99a5768538de7fbcb1a32f64899e8208"; 
        //--> 
<!-- 
      
