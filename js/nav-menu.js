var div = document.createElement("div");

div.innerHTML = `<div class="menu-container">
<div class="menu">
    <ul>
      <li class='menu-logo desktop'><a href="index.html"><img src=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCIPrIw8BwFESUO1J7f17FOnSJX87QC1nhZ3IOWkunVbs4yLu2sIELIN_CtDtBopoyChDaBB-ZJ68cCnA4z_VA9bcT5q625vneiK63NCTCMUc5l5_NY_6_4sba9aw8xy3CaRvQyiq4BnD1cbGnVQ_A0fWZoFiz8TRJ9P9B1EpDxEyFoWdQqh-yWVX0QUx_/s320/w.pngg" alt="Tate logo" /></a></li>
      <li class='mobile'><a href="index.html">HOME</a></li>
      <li><a href="index.html" target='_blank'>HOME</a></li>
      <li><a href="official.html" target="_blank">SOCIAL MEDIA</a></li>
      <li><a href='newsletter.html'>CONTACTE ME</a>
      
      
      <li><a href=""></a></li>
      <li class='right-btn shop-btn'><a href="shop.html">SHOP</a></li>
      <li class='right-btn shop-btn'><a href="merch.topg.com\topg-shop\index.html">EXCLUSIVE</a></li>
    </ul>
</div>
</div>`;

document.currentScript.parentNode.insertBefore(
  div.firstElementChild,
  document.currentScript
);


document.addEventListener("DOMContentLoaded", () => {

  $('head').append('<link rel="stylesheet" href="css/menu-style.css" type="text/css"/>');
  $('head').append('  <link rel="stylesheet" href="css/ionicons.min.css" type="text/css">');
  
  $("#agent-btn").click(function(e) {
    Intercom('showNewMessage');
  });
});

