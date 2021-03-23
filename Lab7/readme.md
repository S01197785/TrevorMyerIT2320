
body {
  background: black;
  animation: color-me-in 5s; /* other keywords like "infinite alternate" can be useful here */
}

@keyframes color-me-in {
  /* You could think of as "step 1" */
  0% {
    background: orange;
  }
  /* You could think of as "step 2" */
  100% {
    background: black;
  }
}

<img style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/5d2dddd0100bb/6509771?X-Blackboard-Expiration=1616479200000&amp;X-Blackboard-Signature=sw%2BMH%2FRjCZaP6SVNbP0UbQgAnMX3%2BQ4qahpnU%2BM2EJk%3D&amp;X-Blackboard-Client-Id=100617&amp;response-cache-control=private%2C%20max-age%3D21600&amp;response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27lab9-guy-walking.gif&amp;response-content-type=image%2Fgif&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20210323T000000Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=21600&amp;X-Amz-Credential=AKIAZH6WM4PL5SJBSTP6%2F20210323%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=065036f0ca5720af1a876cdf45940896ea248d3273548527bfbabbbff7dad4bd">

function cycleImages(){
      var $active = $('#portfolio_cycler .active');
      var $next = ($('#portfolio_cycler .active').next().length > 0) ? $('#portfolio_cycler .active').next() : $('#portfolio_cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
	  $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
	  if ($('#portfolio_cycler .active').next().length > 0) setTimeout('cycleImages()',7000);//check for a next image, and if one exists, call the function recursively
      });
    }

    $(document).ready(function(){
      // run every 7s
      setTimeout('cycleImages()', 7000);
    })
