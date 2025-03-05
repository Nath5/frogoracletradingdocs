---
sidebar_position: 4
---

# Support & Resistance Detection

The FrogOracle Trading Portal uses advanced algorithms to detect and display various types of support and resistance levels. This guide explains the different level types, how they're calculated, and how to customize their display.

## Level Types

The portal identifies and displays several types of support and resistance levels, each with its own color coding and significance.

![S/R Level Types]
_[Screenshot showing different S/R level types to be inserted here]_

### Core Level Types

#### Price-based (P) - Blue
- Identified from significant price reversals and consolidation areas
- Stronger levels have multiple touches or rejections
- Most traditional form of support and resistance
- Often represent areas where buyers or sellers have previously entered the market

#### Volume-based (V) - Purple
- Areas where significant trading volume occurred
- Often indicates institutional interest or liquidity pools
- Can act as future support/resistance due to market participant memory
- Particularly useful for identifying potential reversal zones

#### Gap-based (G) - Orange
- Derived from significant price gaps in the chart
- Can indicate strong momentum or overnight sentiment shifts
- Often act as future targets for price to "fill the gap"
- Displayed as a range (upper and lower bounds of the gap)

#### Point of Control (POC) - Green
- Price levels with the highest trading volume over a given period
- Strong psychological levels where most transactions occurred
- Often provide significant support/resistance
- Represent areas of greatest market interest and liquidity

### Additional Level Types

#### Previous Day OHLC - Teal
- Previous day's Open, High, Low, and Close levels
- Important reference points for day traders
- Often act as intraday support/resistance
- Help identify overnight sentiment changes

#### Mental Levels - Pink
- Psychologically significant price levels (round numbers, etc.)
- Automatically calculated based on the current price
- Customizable intervals for different price ranges
- Useful for identifying potential reversal or pause points

## Timeframe Analysis

Each level is calculated using different lookback periods to provide both recent and historical context:

### Daily Timeframes
- **90-day window**: More recent, potentially more relevant levels
- **120-day window**: Medium-term significant levels
- **180-day window**: Longer-term significant levels
- **240-day window**: Extended historical significant levels
- **360-day window**: Long-term historically significant levels

### Intraday Timeframes
- **5-day window**: Very recent intraday levels
- **30-day window**: Medium-term intraday levels

## Level Labels

When enabled, labels show important information about each level:

![Level Labels]
_[Screenshot of level labels to be inserted here]_

- **Price**: The exact price level
- **Level Type**: Indicator of the level type (P, V, G, POC, etc.)
- **Timeframe Period**: The analysis period used to detect the level

### Label Interaction

Labels are interactive and provide additional information:

1. **Hover**: Hover over any label to see a detailed popup with:
   - Level type description
   - Analysis period details
   - For merged levels: all contributing level types and prices
   - Percentage difference from current price

2. **Click**: On mobile devices, tap a label to open the detailed popup

![Label Popup]
_[Screenshot of label popup to be inserted here]_

## Customizing Your View

### Merge Threshold

The merge threshold controls how closely spaced levels are combined:

1. Open the Configuration panel (gear icon in the sidebar)
2. Find the "Merge Threshold" slider
3. Adjust between 0.1 and 10%:
   - Lower values (0.1-0.5%): Show more individual levels
   - Higher values (0.5-10%): Combine nearby levels

When levels are merged:
- The displayed price is the average of the merged levels
- The label shows all contributing level types
- "Ghost lines" (dotted) show the original positions of merged levels

![Merge Threshold Comparison]
_[Screenshot comparing different merge threshold settings to be inserted here]_

### Filtering Levels

Control which levels are displayed:

1. Open the Configuration panel
2. Use the toggles to:
   - Show/hide specific level types (P, V, G, POC, PDO/PDH/PDL/PDC, Mental)
   - Toggle different timeframes (90d, 120d, 180d, 240d, 360d)
   - Enable/disable all levels
   - Show/hide level labels

### Mental Level Configuration

Customize mental level display:

1. Open the Configuration panel
2. Ensure Mental levels are enabled
3. Adjust settings:
   - Number of levels to display
   - Interval settings for different price ranges:
     - Less than 1
     - 1-10
     - 10-100
     - 100-1000
     - Above 1000

This allows you to control the spacing between mental levels based on the price range of the asset.

## Color Customization

Personalize the color scheme for better visibility:

1. Open the Configuration panel
2. Select the "Look and Feel" tab
3. Click the paint brush icon next to any level type
4. Select a custom color from the color picker
5. Colors are saved to your profile and persist between sessions

![Color Customization]
_[Screenshot of color customization to be inserted here]_

## Best Practices

- Start with the default settings to understand how levels appear on your charts
- Gradually adjust the merge threshold to find your preferred level of detail
- Toggle different level types on/off to focus on specific analysis techniques
- Use mental levels for round-number support/resistance in conjunction with detected levels
- Pay special attention to areas where multiple level types converge (confluence zones)
