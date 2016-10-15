#Events homework

##Task 1 - Display Information on click

Get the data from the boxes and place them in a prettier way.
- Color it suitably according to gender. (If-else)
- It's better if you write as much of the styles in a separate css file.
 
Tip
If you're having trouble getting the value of the dropdown, you could search for "jquery check which dropdown value is checked" and open [this]( http://stackoverflow.com/questions/2780566/get-selected-value-of-a-dropdowns-item-using-jquery) helpful topic.

##Task 2 - Image Viewer
When you click on an image in the preview, the image should show enlarged in the box below the preview slide.

Guidance:
- Attach an event on each image in the preview.
- The function in the event should: 
  - Get the src attribute of the image
  - Create a new <img> element with the same src of the clicked picture.
  - Put the newly created img in the image box. Only one picture at a time should be there. 
  
You could also create the <img> element first and then only change it's src every time an image in the preview is clicked.