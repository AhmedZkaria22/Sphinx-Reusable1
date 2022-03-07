const createPolygon = ( polygonParentId,
    imgSrc,
    h1Content, h1Sp1Stork, h1Sp2Color,
    headImg,
    polygonValue,
    contentSelf, contentFontSize, contentBack, contentColor, 
    polygonParentWidth, polygonParentHeight,
    polygonBorderBack,
    polygonShadowBack, polygonShadowColor 
) => {    
    const polygonParent = document.getElementById(`${polygonParentId}`);

    const polygonSelf = `
    <div style="padding-inline: 10px;">
    ${ 
       headImg !== null && h1Content !== null ?
       `<img src="${headImg}">       
       <h1 class="squada-font squada-font2 box-title">
       <img src="${imgSrc}" style="width:55px; vertical-align:bottom; margin-top:8px" />
       <span style="-webkit-text-stroke: 10px ${h1Sp1Stork};"> ${h1Content} </span>
       <span style="color:${h1Sp2Color};"> ${h1Content} </span>
       </h1>`
       :
       headImg !== null && h1Content === null ? `<img src="${headImg}">` 
       :        
       h1Content !== null && headImg === null ? 
       `<h1 class="squada-font squada-font2 box-title">
       <img src="${imgSrc}" style="width:55px; vertical-align:bottom; margin-top:8px" />
       <span style="-webkit-text-stroke: 10px ${h1Sp1Stork};"> ${h1Content} </span>
       <span style="color:${h1Sp2Color};"> ${h1Content} </span>
       </h1>` 
       : '<span style="display: none"></span>' 
    }

    <div>
        <div class="polygonParent"  style="width: ${polygonParentWidth}; height: ${polygonParentHeight}">
            <div class="polygonBorder" style="background-color: ${polygonBorderBack}; clip-path: polygon(${polygonValue});"></div>
            <div class="polygonShadow" style="background-color: ${polygonShadowBack}; box-shadow: inset ${polygonShadowColor} -12px -15px 20px 15px; clip-path: polygon(${polygonValue});"></div>
            <div class="polygonContent" style="font-size: ${contentFontSize}; background-color: ${contentBack}; clip-path: polygon(${polygonValue}); "> ${contentSelf} </div>
        </div>    
    </div>
    </div>`;

            
    polygonParent.innerHTML += polygonSelf; 
}
        
