var addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},comets=["images/comet.svg","images/comet-1.svg"],createComet=function(e){var t=document.createElement("img");return addClass(t,"comet"),t.src=comets[e],document.body.appendChild(t),t},getDocSize=function(){var e=window,t=document,n=t.documentElement,o=t.getElementsByTagName("body")[0],a=e.innerWidth||n.clientWidth||o.clientWidth,m=t.body,r=Math.max(m.scrollHeight,m.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight);return[a,r]},random=function(e,t){return Math.floor(Math.random()*t+e)},spawnComent1=function(){var e=createComet(0),t=getDocSize(),n=random(1,Math.max(t[1]-1002,2)),o=random(10,100);e.style.top=""+n+"px",e.style.left="-100px",TweenLite.to(e,o,{top:""+(n+1e3)+"px",left:""+(t[0]+100)+"px",onComplete:function(e){console.log("complete!"),e.parentNode.removeChild(e)},onCompleteParams:[e]})},spawnComent2=function(){var e=createComet(1),t=getDocSize(),n=random(1,Math.max(t[1]-1202,2)),o=random(10,100);e.style.top=""+n+"px",e.style.left=""+(t[0]+100)+"px",TweenLite.to(e,o,{top:""+(n+1200)+"px",left:"-100px",onComplete:function(e){console.log("complete!"),e.parentNode.removeChild(e)},onCompleteParams:[e]})},runner1=function(){var e=random(5e3,5e4);setTimeout(function(){spawnComent1(),runner1()},e)};spawnComent1(),runner1();var runner2=function(){var e=random(5e3,5e4);setTimeout(function(){spawnComent2(),runner2()},e)};spawnComent2(),runner2();