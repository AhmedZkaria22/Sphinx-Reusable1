# <h1> Reusable Polygon Element </h1>

> By: **Ahmed Zakaria**

### Folder Tree
* polygon.css
* polygon.js

### Polygon Element HTML
 * .Polygon-container
   * div
     * img or h1
     * div
       * .polygonParent
         * .polygonBorder
         * .polygonShadow
         * .polygonContent
           * p or ul or both ...as you like 

### createPolygon Function Parameters
Parameter              | Explanation
-------------          | -------------
polygonParentId        | polygon element wrapper - id 
imgSrc                 | polygon head h1 img
h1Content              | polygon head h1 content
h1Sp1Stork             | polygon head h1 first span - stork color
h1Sp2Color             | polygon head h1 second span - color
headImg                | polygon head img
polygonValue           | polygon clip-path value
contentSelf            | polygon content
contentFontSize        | polygon content - font size
contentBack            | polygon content - background color
polygonParentWidth     | .polygonParent - width
polygonParentHeight    | .polygonParent - height
polygonBorderBack      | .polygonBorder - background color
polygonShadowBack      | .polygonShadow - background color
polygonShadowColor     | .polygonShadow - box-shadow color

### How to use ?
1. import Reusable Polygon css and js file
2. type html wrapper element and call createPolygon function as folowing
  * "<div id="Polygon-container-2" class="Polygon-container"></div>"
  * <script>
      createPolygon(
          'Polygon-container-2',
          'resources/images/what.png',
          'What does it mean?', '#30c7c9', '#c0e5de',
          null,
          '0 0, 97% 10%, 99% 88%, 2% 91%',
          `<p class="folder-font box-content" style="color:#30c7c9;">
              self-esteem – when you feel good about yourself and the things you do
          </p>`, '1.7rem', 'white',
          'calc(100% - 20px) !important', '18rem',
          '#01babd',
          'white', '#cdced073'
      );
    </script>


  ![alt text](https://drive.google.com/file/d/1BuRZcMLRZPFX8ciP-XWyuHMFXMHIcHqg/view?usp=sharing)
  
  ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

## Notes :
 - Polygon Element able to update with css
 - Polygon Element need to edit before, after, positions, media to visable clear

> - *don't hesitate to ask for anything not understand , you are welcome🙂*
