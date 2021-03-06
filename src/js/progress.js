document.addEventListener('DOMContentLoaded', function() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 &&
    !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    document.body.insertAdjacentHTML('afterbegin',
      '<div id="_progress-bar" style="background-color:#4cb;height:5px;position:fixed;top:0;transition:0.1s ease all;width:0;z-index:20;"></div>');

    var progressBar = document.getElementById('_progress-bar');
    var windowHeight;
    var totalBodyHeight;
    var scrollPosition;
    var percentage;

    window.addEventListener('scroll', function() {
      windowHeight = window.innerHeight;
      totalBodyHeight = document.body.clientHeight;
      scrollPosition = document.body.scrollTop;
      percentage = 100 * (scrollPosition / (totalBodyHeight - windowHeight));
      progressBar.style.width = percentage + '%';
    });
  }
});
