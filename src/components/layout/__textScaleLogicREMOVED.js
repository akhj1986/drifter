/* 

THE BUTTONS TO CHANGE SCALE, orginally in header-----------------------------------------------------------------
<Wrapper row align="baseline" width="auto">
          {console.log("ScreenType", context.scale.screenType)}
          {context.scale.screenType !== "mobile" ? (
            <Header3
              margin="0"
              padding="0"
              fontSize="13px"
              color={context.theme.siteTitle}
            >
              Text:
            </Header3>
          ) : null}
          <MyButton
            onClick={context.plusScale}
            width="24px"
            height="24px"
            fontSize="16px"
            fontWeight="700"
            margin="0 0 0 2px"
            background="none"
            color={context.theme.siteTitle}
          >
            A+
          </MyButton>
          <MyButton
            onClick={context.minusScale}
            width="20px"
            height="20px"
            fontSize="14px"
            fontWeight="700"
            margin="0 0 0 0"
            background="none"
            color={context.theme.siteTitle}
          >
            A-
          </MyButton>
        </Wrapper> 
        
        
        THE FOLLOWING IS FROM THE THEME-CONTEXT AND CONTROLS THE SCALE CHANGES

        //This object sets the scale factors for resizing for accessibility purposes-----------------------------------
const scaleFactors = {
  regularScale: 1,
  largeScale: 1.25,
  extraLargeScale: 1.5
}

//This function applies the scales to the different screen sizes-----------------------------------------------------

const applyScale = (scale, screenSize) => {
  return {
    screenType: screenSize.screenType,
    outerPadding: screenSize.outerPadding,
    headerHeight: `${
      scale === 1.5 ? screenSize.headerHeight + 10 : screenSize.headerHeight
    }px`,
    headerMargin: screenSize.headerMargin,
    headerButtons: {
      offsetTop: screenSize.headerButtons.offsetTop,
      offsetRight: screenSize.headerButtons.offsetRight,
      containerWidth: screenSize.headerButtons.containerWidth
    },
    titleMargin: screenSize.titleMargin,
    navPadding: screenSize.navPadding,
    navBarHeight: `${
      scale === 1
        ? screenSize.navBarHeight
        : screenSize.navBarHeight * (scale - 0.1)
    }px`,
    siteTitleFontSize: screenSize.siteTitleFontSize,
    fontSize: `${screenSize.fontSize * scale}px`,
    navLink: `${screenSize.navLink * scale}px`,
    navLinkMargin: screenSize.navLinkMargin,
    header2: `${screenSize.header2 * scale}px`,
    header3: `${screenSize.header3 * scale}px`,
    infoText: `${screenSize.infoText * scale}px`,
    smallInfo: `${screenSize.smallInfo * scale}px`,
    footerText: `${screenSize.footerText * scale}px`,
    spacing: `${screenSize.spacing * scale}px`,
    lineHeight: `${screenSize.lineHeight * scale}rem`,
    searchHeight: screenSize.searchHeight,
    searchWidth: screenSize.searchWidth
  }
}

//This export object puts together the screen sizes and the scale factors for access within components through context
export const scales = {
  regularMobile: applyScale(scaleFactors.regularScale, mobileScaleValues),
  largeMobile: applyScale(scaleFactors.largeScale, mobileScaleValues),
  extraLargeMobile: applyScale(scaleFactors.extraLargeScale, mobileScaleValues),
  regularMedium: applyScale(scaleFactors.regularScale, mediumScaleValues),
  largeMedium: applyScale(scaleFactors.largeScale, mediumScaleValues),
  extraLargeMedium: applyScale(scaleFactors.extraLargeScale, mediumScaleValues),
  regularLargeScreen: applyScale(
    scaleFactors.regularScale,
    largeScreenScaleValues
  ),
  largeLargeScreen: applyScale(scaleFactors.largeScale, largeScreenScaleValues),
  extraLargeLargeScreen: applyScale(
    scaleFactors.extraLargeScale,
    largeScreenScaleValues
  ),
  regularExtraLargeScreen: applyScale(
    scaleFactors.regularScale,
    extraLargeScreenScaleValues
  ),
  largeExtraLargeScreen: applyScale(
    scaleFactors.largeScale,
    extraLargeScreenScaleValues
  ),
  extraLargeExtraLargeScreen: applyScale(
    scaleFactors.extraLargeScale,
    extraLargeScreenScaleValues
  )
}

------FROM THE LAYOUT COMPONENT
 const screenType = screenTypeSetter()
    setScale(() => {
      if (scaleValue === 0 && screenType === "mobile")
        return scales.regularMobile
      if (scaleValue === 1 && screenType === "mobile") return scales.largeMobile
      if (scaleValue === 2 && screenType === "mobile")
        return scales.extraLargeMobile
      if (scaleValue === 0 && screenType === "medium")
        return scales.regularMedium
      if (scaleValue === 1 && screenType === "medium") return scales.largeMedium
      if (scaleValue === 2 && screenType === "medium")
        return scales.extraLargeMedium
      if (scaleValue === 0 && screenType === "large")
        return scales.regularLargeScreen
      if (scaleValue === 1 && screenType === "large")
        return scales.largeLargeScreen
      if (scaleValue === 2 && screenType === "large")
        return scales.extraLargeLargeScreen
      if (scaleValue === 0 && screenType === "extra-large")
        return scales.regularExtraLargeScreen
      if (scaleValue === 1 && screenType === "extra-large")
        return scales.largeExtraLargeScreen
      if (scaleValue === 2 && screenType === "extra-large")
        return scales.extraLargeExtraLargeScreen
    })
  }, [scaleValue, width])

  const toggleTheme = () => {
    console.log(themeValues)
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const plusScale = () => {
    setScaleValue(scaleValue < 2 ? scaleValue + 1 : scaleValue)
  }

  const minusScale = () => {
    setScaleValue(scaleValue > 0 ? scaleValue - 1 : scaleValue)
  }
        
        */
