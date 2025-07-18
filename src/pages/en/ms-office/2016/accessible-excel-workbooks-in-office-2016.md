---
title: Accessible Excel workbooks in Office 2016
description: Accessible practices for Microsoft Excel 2016 document creation.
toggle: classeurs-excel-accessibles-dans-office-2016
fontIcon: fa-file-excel
---

## Accessibility Checker

Microsoft Office (Word, Excel, Power Point) provides a built-in accessibility validator. The checker does not identify all issues, but looks for things such as: missing alternative text, duplicate slide titles, and potential reading order issues.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office2016/excel-01.jpg" alt="Screenshot of Check for Issues menu">
</div>
</div>

How to use the Accessibility Checker:

1. Activate the **File** Tab > **Info** > **Check for Issues** > **Check Accessibility**
2. Review the results in the **Accessibility Checker** pane
3. Address the listed issues. Helpful information to understand and fix the different issues is provided at the bottom of the pane

## Tables

Avoid using complex table structures in all documents. If tables include nested tables, merged cells, split cells and/or blank rows/ columns, they become difficult for screen readers to navigate . When using a table, design it to be as simple as possible. Assign meaningful names to the headers and rows to facilitate user navigation.

## Sheet tabs

Give all sheet tabs in your document unique and meaningful names. Ensure that the name given to each tab accurately describes the contents found on the worksheet. This will make it easier to navigate through the workbook. It is best to remove all blank sheets from your document.

## Fonts

Choose fonts and styles that are easy to read.

- Use sans-serif fonts with sufficient spacing between letters (Ex. Arial, Verdana, Century Gothic)
- Use fonts 11-14 points in size

### Use of colour

Use a [contrast checking tool](https://webaim.org/resources/contrastchecker/) to check the contrast of the text (foreground) relative to the background. For most text, the contrast ratio must be 4.5:1. For large, bold text (14 point bold, or 18 point regular), this requirement is relaxed to 3:1. Since it is extremely likely that the sheet will be viewed at low zoom (so as to see more of it), all text should meet 4.5:1 minimum. The WCAG AAA requirement is 7:1 – aim for this.

**Do not** use colour alone to convey meaning or emphasis in a word, cell or block of text. Patterns may be added to colour for those who are colour blind. Mandatory fields should be identified with an asterisk \* and the word “required” rather than being labelled in red.

## Non-text elements

### Alternative text

Visual elements such as photos, screenshots, icons, videos and 3D models should all include alternative text. Alt text allows people who cannot see the image understand the message and what is important. A good alt text should be concise and to the point. It should not be more than a sentence or two and should include the important information the image conveys. When creating an alt text, do not begin with “this is an image of”. Do begin with “Screenshot of” for screenshots.

To assign alternative text to images:

1. Open the context menu for the image by right-clicking or pressing the applications key
2. Activate **Format Picture**
3. Activate the **Size and Property** tool
4. Enter a title in the **Title** field. Note: This field should only be filled in if you are entering a detailed or long explanation in the Description field
5. Enter an appropriate alternative text in the **Description** field
6. If the image is meaningful, convey in words the meaning, function, or purpose communicated by the image
7. If an image conveys no information (i.e., it is decorative or redundant), enter the word “decorative” (no quotes) **in the** **Description** **field**
8. Activate the **Close** button

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office2016/excel-02.jpg" alt="Screenshot of Format Picture sidebar" />
</div>
</div>

### Charts and diagrams

Ensure complex images and charts provide long descriptions. Complex images include: schematics, plans, diagrams, or any other image that conveys a large amount of information. This is necessary as users who cannot see the complex image will not be able to sufficiently determine its value/purpose.

To add a long description to diagrams and chart:

1. Open the context menu for the chart/diagram and activate **Format Chart Area**
2. The **Format Chart Area** menu will open
3. Activate **Size and Properties**
4. Provide a meaningful long description
    1. Describe the title of the chart
    2. The role it plays in the document
    3. The relationship of elements in the correct order
5. Activate the **Close** button

See [Complex Images](https://www.w3.org/WAI/tutorials/images/complex/) for more recommendations.

## Links

People who use screen readers sometimes scan a list of links; therefore, ensure link text is meaningful within the context of the document. Link text should accurately reflect the target and purpose of the link. If link text is not provided, users will need to follow the link to determine its purpose, which can present difficulties for users of adaptive technology. An example of appropriate link text would be including the full title of the destination rather than linking to the text “Click Here”.

To add hyperlinks with meaningful text:

1. Type or paste a web address in your document
2. Select the link and open the context menu
3. Activate **Hyperlink**
4. Edit the **Text to Display field with meaningful text**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office2016/excel-03.jpg" alt="Screenshot of Insert Hyperlink dialog" />
</div>
</div>

## Additional resources

- [Microsoft: Make your Excel documents accessible to people with disabilities](https://support.office.com/en-us/article/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593)
- [Microsoft: Accessibility support for people who use a screen reader program](https://support.office.com/en-us/article/accessibility-support-for-excel-0976b140-7033-4e2d-8887-187280701bf8)
