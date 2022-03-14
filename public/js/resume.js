
      // get the element
 let element = document.getElementById('mike');

// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
	if (confirm("Do you want to download Mike Parker's Resume? If not click cancel to open pdf in your browser")) {
  // Save it!
  element.setAttribute("href", "Mike Resume.pdf");
  element.setAttribute("download", "Mike Parker's Resume");
  console.log('Thing was saved to the database.');
} else {
  // Do nothing!
  element.setAttribute("href", "Mike Resume.pdf");
  element.setAttribute("target", "_blank");
  element.removeAttribute("download");
}
});


