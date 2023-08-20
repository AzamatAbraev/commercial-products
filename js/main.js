function displayContent(event, contentNameID) {
  let content = document.getElementsByClassName("contentClass");
  let totalCount = content.length;

  // Loop through the content class
  // and hide the tabs first
  for (let count = 0; count < totalCount; count++) {
    content[count].style.display = "none";
  }

  let links = document.getElementsByClassName("linkClass");
  totalLinks = links.length;

  // Loop through the links and
  // remove the active class
  for (let count = 0; count < totalLinks; count++) {
    links[count].classList.remove("active");
  }

  // Display the current tab
  document.getElementById(contentNameID).style.display = "block";

  // Add the active class to the current tab
  event.currentTarget.classList.add("active");
}


$(".eh").each(function () {
  var $this = $(this);
  var equalHeightSelectors = $this.data("eh");
  $.each(equalHeightSelectors, function (index, value) {
    var min_height = 0;
    var $children = $this.find(value);
    $children.each(function () {
      var $el = $(this);
      if ($el.height() > min_height) {
        min_height = $el.height();
      }
    });
    $children.height(min_height);
  });
});