# SPARK CDN :sparkles:

[![CDN CI](https://github.com/alyxshang/spark-cdn/actions/workflows/main.yml/badge.svg)](https://github.com/alyxshang/spark-cdn/actions/workflows/main.yml)

***A repository containing my static assets. :sparkles:***

## ABOUT :books:

This repository contains some static assets that I need for various projects. To use this repository as an ad-hoc CDN the assets are put into a directory and deployed to the "gh-pages" branch of this repository. The build script `build.sh` performs this task.

## FONTS :black_nib:

You can include any of the fonts from this "CDN" by adding this line to your HTML code:

```HTML
<link rel="stylesheet" href="https://cdn.alyxshang.boo/css/sparkfonts.css" type="text/css"/>
```

Warning: The fonts used I collected over a long period of time. If you are the creator of any of the fonts and you object to me publishing them in this way, please open an issue and let me know.

The following fonts are available:

- `Aztec`
- `Retrotype`
- `SCP-Medium`
- `SCP-Regular`
- `Onest`
- `SpyDolls`
- `RussianDollmaker`
- `SymbolFont`
- `Vogue`
- `VoodoDolls`
- `Aileron`
- `RobotoFlex`
- `Apercu`
- `Osaka`
- `CourierNew`
- `DotMatrix`
- `Raleway`
- `CircularMedium`
- `Triest`
- `Drip`
- `CormorantItalic`
- `Couture`
- `Cyberpunk`
- `FiraCode-Regular`
- `FreshLychee`
- `Garamond`
- `GaramondItalic`
- `MC`
- `Merriweather-Regular`
- `MMD`
- `OrangeSlice`
- `Ostrich`
- `OstrichThin`
- `PlayfairDisplay-Regular`
- `PSB`
- `VT323`
- `Lobster`
- `CherieBomb`
- `Blackiron`
- `Garota`
- `easy`
- `milk`
- `posi`
- `benegraphic`
- `atriskyouth`
- `Edda`
- `KingthingsExeter`
- `NeueMontrealBold`
- `NeueMontrealLight`
- `NeueMontrealMedium`
- `Mogena`
- `GICN`
- `FluroBold`

To use these fonts in your own projects specify the font you would like to use like this in your stylesheets:

```CSS
font-family: "name-of-font";
```

`name-of-font` specifies any of the names from the list above. These fonts should work across multiple browsers since this "CDN" contains the fonts in the WOFF, WOFF2, TTF, and OTF formats, respectively.

## JAVASCRIPT :gear:

This CDN also contains some Javascript code to build different types of navigation drawers. To include a link to this file in the code for your own website, include the following line of HTML in your HTML code:

```HTML
<script async src="https://cdn.alyxshang.boo/javascript/navigation.js" type="text/javascript"></script>
```

The functions this script includes are as follows:

- `slideOutHorizontalOpenNav(elementId: string)`: Slides out a navigation drawer element with the ID `elementId` horizontally.
- `slideOutHorizontalCloseNav(elementId: string)`: Closes a navigation drawer element with the ID `elementId` horizontally.
- `slideOutVerticalOpenNav(elementId: string)`: Slides out a navigation drawer element with the ID `elementId` vertically.
- `slideOutVerticalCloseNav(elementId: string)`: Closes a navigation drawer element with the ID `elementId` vertically.
- `slideOutFromCornerOpenNav(elementId: string)`: Slides out a navigation drawer element with the ID `elementId` vertically and horizontally.
- `slideOutFromCornerCloseNav(elementId: string)`: Closes a navigation drawer element with the ID `elementId` vertically and horizontally.

## IMAGES :camera:

The images in the `images` directory contain art made by me. Copying, tracing or selling these images is strictly prohibited.

## NOTE :scroll:

- *Spark CDN :sparkles:* by *Alyx Shang :black_heart:*.
- Licensed under the [FSL v1](https://github.com/alyxshang/fair-software-license).
