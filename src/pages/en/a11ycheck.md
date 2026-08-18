---
title: Easy Checks for Web Accessibility
description: Quick accessibility checks covering page structure, keyboard navigation, images, multimedia, and forms.
toggle: Vérifications faciles pour l'accessibilité du Web
subject:
  - howTos
tags:
  - testYourProducts
---

## General

### The page has a title that describes the page content and purpose.

Ensure the page title is descriptive and provides an accurate summary of the page content. This can be set using the `<title>` tag within the `<head>` section of your HTML document.

<figure>

<img src="/img/a11ycheck/tag-in-title.png" alt="Good example showing the title structure of a webpage.">

<figcaption>

The inspect element window highlights the title tag, which references the title displayed at the top of the webpage. An arrow points from the HTML tag to the matching title on the webpage.

</figcaption>
</figure>

### Using semantic HTML to mark up the structure of the page and represent the information, rather than relying on custom CSS.

Check the code to see if correct HTML elements are used to structure the content based on each element's meaning, and not its appearance. Examples: Headings should use semantic HTML like `<h1>` instead of using CSS to style the text to look like an `<h1>`, and lists should use semantic list HTML like `<ul>` and `<ol>` instead of using bullets to style the text to look like a list.

### The page has accurate and informative headings that are structured using `<h1>` - `<h6>` heading tags without skipping hierarchical levels.

Use an automated accessibility checker like [Accessibility Insights for Web](https://accessibilityinsights.io/downloads/) or use [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) to check heading hierarchy and structure issues and ensure headings are accurate and informative. For more informations, consult [Quick Assess in Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/getstarted/quickassess/)

<figure>

<img src="/img/a11ycheck/heading-structure-en.jpg" alt="Good example of a well-organized heading structure.">

<figcaption>

A well-structured heading hierarchy using `<h1>`, `<h2>`, and `<h3>` tags, represented using a tree view.

</figcaption>
</figure>

### Pages remain functional and readable when text is magnified to 200% of its initial size.

Zoom the page to 200% on a 1280 by 1024 viewport, and make sure that no content or functionality is lost, or that any text is clipped, truncated, or obscured.

<figure>

<img src="/img/a11ycheck/responsive-design-en.jpg" alt="An example of text resizing issue.">

<figcaption>

The label text does not fit within the search input field, causing the text to be truncated.

</figcaption>
</figure>

### Page content reflow does not cause loss of content or functionality and does not require horizontal scrolling when the viewport width is set to 320px.

Use a mobile devices simulator such as [Toggle device toolbar in Chrome Dev Tools to verify](https://developer.chrome.com/docs/devtools/device-mode). Open the developer tools in your browser and use responsive design mode. Set the viewport width to 320px by narrowing the browser window or by zooming in so that the viewport width is now 320px. To do this when starting with a 1280px viewport width at 100% browser zoom, zoom in to 400%. Ensure no text is clipped or content disappears.

<figure>

<img src="/img/a11ycheck/reflow-design.png" alt="An Example of content with zoomed-in borders and scrollbars.">

<figcaption>

Zoomed-in text with scrollbars highlighted. Arrows point to the horizontal scrollbar and the zoomed-in content's borders to show the relationship between these elements.

</figcaption>
</figure>

### The primary language of the page is set using `lang` attribute and using a standard language code. (e.g. `<html lang="en">` or `<html lang="fr">`).

Identify passages or phrases in a language different from the main language of the page. Then, check the code to make sure that any changes in language are marked using the `lang` attribute.

<figure>

<img src="/img/a11ycheck/lang-attribute-page.png" alt="Example of a lang attribute.">

<figcaption>

The lang attribute is highlighted within the inspect element window, showing that this is an English page with the "en" lang attribute applied.

</figcaption>
</figure>

### All text elements and non-text elements have sufficient color contrast between the foreground and background color.

Use the Colour Contrast Analyzer tool or an [online contrast checker](https://webaim.org/resources/contrastchecker/)

- Text and images of text should have a contrast ratio of at least 4.5:1 between any text (and images of text) and the background behind the text.
- Non-textual elements should have a minimum contrast ratio of 3:1 with adjacent colours.

<figure>

<img src="/img/a11ycheck/contrast-checker-en.jpg" alt="An example of a contrast checker tool interface.">

<figcaption>

A page where a button with a pink background and white text is highlighted. The pink and white color combination is being tested using a colour contrast analyser tool, with alerts notifying the user that this combination fails to meet the necessary contrast ratio.

</figcaption>
</figure>

### Inline language changes are marked up and have valid `lang` attribute values. (e.g. `lang="en"` or `lang="fr"`).

Identify passages or phrases in a language different from the main language of the page. Then, check the code to make sure that any changes in language are marked using the `lang` attribute.

<figure>

<img src="/img/a11ycheck/lang-attribute.png" alt="An example of the inspect element displaying the HTML lang attribute.">

<figcaption>

An inspect element view showing a `lang` attribute applied to a specific tag, differentiating it from the main language of the webpage. The `lang` attribute is highlighted in red, with an arrow pointing to the corresponding text associated with this tag on the webpage.

</figcaption>
</figure>

### The purpose of each link can be understandable from the link text.

Check to see if link labels give a clearer idea of what user can expect to find by clicking on the link.

<figure>

<img src="/img/a11ycheck/link-purpose-en.jpg" alt="Examples of accessible and inaccessible links.">

<figcaption>

Two examples of hyperlink text, with one example labelled accessible ("Read more about Tax Calculation") and the other inaccessible ("Read more"). The link tag for each has been highlighted in the inspect element window.

</figcaption>
</figure>

## Keyboard

### The navigation order of focusable elements (e.g., links, form elements, modal dialogs, etc.) is logical and intuitive, preserving the meaning and operability of the content.

Navigate through the page using Tab or Shift + Tab to ensure that the tabbing order makes sense according to the content on the webpage. Best practices recommend that the tab order follows the reading order of the webpage for improved accessibility.

<figure>

<img src="/img/a11ycheck/tab-order-en.jpg" alt="An example illustrating accessible and inaccessible tab orders on a webpage.">

<figcaption>

Instructions on structuring the tab order of a webpage. Two examples are presented: one demonstrating an accessible and logical tab sequence, and the other showcasing an inaccessible, disorganized sequence.

</figcaption>
</figure>

### All focusable elements show a visual focus indicator when in focus and do not disappear while tabbing.

Navigate through the page using Tab or Shift + Tab to ensure that focusable elements have a clear, visible indicator that identifies visual focus.

<figure>

<img src="/img/a11ycheck/focus-indicator-en.jpg" alt="Examples of focus visibility on buttons.">

<figcaption>

Two examples of buttons demonstrating a principle of accessibility. The first example shows a button where the focus is visible when focused, making it accessible. In the second example, the focus is not visible, making the button inaccessible.

</figcaption>
</figure>

### The page has a keyboard-accessible method to bypass repetitive content.

Using the keyboard keys, check if there is a list of links to skip blocks of repeated material.

Example: The first interactive item on the page is a link (titled Skip to Main Content) to the beginning of the main content. Activating the link sets focus to the main content.

<figure>

<img src="/img/a11ycheck/skip-to-main-content-en.png" alt="Example of a 'Skip to main content' link.">

<figcaption>

A tag link highlighted in the inspect element window with an arrow pointing to the top of the webpage, indicating the corresponding "Skip to main content" link which enables users to skip to the main content.

</figcaption>
</figure>

### Keyboard access and control are available for all interactive components that have mouse access and control.

Ensure that all elements such as links, form fields, buttons, and media player controls are accessible and operable using only the keyboard keys.

- Use the `Tab` key to navigate in a linear direction through focusable elements like links, form controls, and buttons.
- Use the `Enter` key (and sometimes `Space`) to select an element.
- Use the Arrow keys to move within certain elements, element groups, and widgets, such as form select elements, radio button groups, and sets of tabs.

<figure>

<img src="/img/a11ycheck/tab-order-website-en.jpg" alt="An example of keyboard navigation on a user interface, showing the tab order.">

<figcaption>

A user interface displaying multiple elements such as selectable fields, buttons, and links, with arrows indicating the tabbing sequence between elements.

</figcaption>
</figure>

## Images and Multimedia

### Informative images have a text alternative that serves the equivalent purpose.

Check the code to see if the image has `alt` attribute and ensure its value contains appropriate alternative text that describes the purpose of the image in a way that adequately substitutes for the image.

<figure>

<img src="/img/a11ycheck/informative-image.png" alt="An example of alternative text showing the symbol of the Government of Canada.">

<figcaption>

Within the inspect element window, an arrow points to the alternative text of an image, describing a symbol of the Government of Canada. This demonstrates how alternative text provides a brief and meaningful description of the image for accessibility.

</figcaption>
</figure>

### Decorative images are coded in such a way that screen readers can ignore them.

Check the code to see if the image has `alt` attribute and ensure the value is empty (`alt=""`).

<figure>

<img src="/img/a11ycheck/decorative-image-en.jpg" alt="Example of HTML code for decorative images.">

<figcaption>

The inspect element window displaying HTML code for three decorative images. The sections of code demonstrating that each image's alt text is empty have been highlighted in green.

</figcaption>
</figure>

### Pre-recorded multimedia (video) content has captions.

Look to see if captions are available for both video and audio content, either through open captions (captions that are always on and that cannot be turned off) or closed captions (look for a closed captions button or a way to turn on captions).

<figure>

<img src="/img/a11ycheck/captions-en.jpg" alt="An example of a video with captions.">

<figcaption>

A screencapture of a video displaying captions that correspond to the host's speech. Displayed within the video is an image of the 'Job Bank Canada' website

</figcaption>
</figure>

## Forms

### All form elements (e.g. text fields, checkboxes, radio buttons, drop-down menus etc.) have descriptive and meaningful labels.

Use an automated accessibility checker like [Accessibility Insights for Web - Fast Pass](https://accessibilityinsights.io/downloads) or use [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) in Chrome or Firefox. Running a scan of the page will automatically detect any errors.

<figure>

<img src="/img/a11ycheck/form-labels-en.jpg" alt="Example of descriptive form labels (e.g. text fields, checkboxes, radio buttons, drop-down menus etc.).">

<figcaption>

A form page with the inspect element window to its right. Arrows point to each descriptive label field.

</figcaption>
</figure>

### Labels or instructions are provided when content requires user input.

Check the code to see if any fields are marked as required. If an asterisk (*) symbol is used to indicate a required form field, instructions must also be provided to define the meaning of the symbol at the top of the form.

<figure>

<img src="/img/a11ycheck/required-field-instructions-en.jpg" alt="Example of form instructions for required fields.">

<figcaption>

A form legend with a label indicating that the fields are required.

</figcaption>
</figure>

### Error messages clearly identify where the issue occurred (e.g., field name) and what needs to be corrected.

Check to see if error messages are easy to understand and provide clear instructions on how they can be resolved.

Example: "Please enter your name" is not as helpful as "Please enter your first name".

<figure>

<img src="/img/a11ycheck/validation-error-en.jpg" alt="Example of error message displayed on a form.">

<figcaption>

An arrow pointing to an error message indicating that a field cannot be left empty and instructing the user to enter a value. The error text above the input field is highlighted in red.

</figcaption>
</figure>
