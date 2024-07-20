
## Introduction

Each stock has its own personality and the indicator is designed to be flexible allowing you tune it for each chart. Learning when and how to adjust these settings can make a large impact in your success leveraging the indicator.

# Configuration

## Accessing the Settings


> To access the indicator settings you can either double click on one of the price labels or open the settings from the cog icon in the indicator drop down as seen in the video below.

[filename](_media/access_settings.webm ':include :type=video controls width=100% loop')

## Line Merging

When stocks have a very tight range there will sometimes be levels which are very close together. This is especially true if you have many different time periods enabled.  The indicator supports merging levels that are close together into a new single line.  As you can see in the before and after allowing levels to be merged can clean up a noisy chart making it easier to read.

### Show Original Source Lines ‘Ghosts’

This will display the original levels as a faint dashed dotted line. Merging the lines can help to clean up a noisy chart but it is important to remember that these new merged levels should be treated like ranges. Having the original levels show faintly helps to drive this point home.

![image](_media/ghost_settings.png ':size=600')


![image](_media/ghost_line_closeup.png ':size=600')
> 'Ghosts' have been made more opaque for this example. The default style is much fainter.  

### Merge Threshold

This values controls what is considered “Close Enough” to be merged. Behind the scenes this threshold is scaled for each ticker but that scaling isn’t always perfect. Adjusting the Merge Threshold allows the user to strike the perfect balance.

![image](_media/merge_threshold_settings.png ':size=600')

**How do you know when the 'Merge Threshold' should be adjusted?**

 The video below shows how changing the value affects the levels. At the start you will notice that there are a lot of levels that are essentially the same and are not adding new value to the chart. When the merge threshold is increased these duplicates disappear and the chart is easier to read while still retaining all the critical level information. At the end when the merge threshold is too high you will see that there has been a loss of detail where certain area are no longer captured. Striking this balance takes a bit of practice but once you have done it a few times it will become second nature.

[filename](_media/adjusting_merge_threshold_example.webm ':include :type=video controls width=100% loop')

 #### Small Caps

 For **Small** cap stocks ( Typically under $15 ) I have found the best 'Merge Threshold' normally falls between **1** and **3**

 #### Large Caps

For **Large** caps stocks ( Typically over $15 ) I have found the best 'Merge Threshold' normally falls between **.2** and **.5**

## Analysis Periods

On the backend the S/R levels are produced by analyzing different date ranges of price data. 
Stocks which exhibit significant price movement will often have very different levels assocaited with each “Analysis Length”

![image](_media/analysis_length_settings.png ':size=600')

 When a ticker is making new highs / lows, breaking out of its previous historical range, the lower timeframe analysis periods help to get more up to date levels. These shorter term levels 

> At the start of this video you can see that there is a bunch of price action above 220 where the longer analysis period levels have not caught up. By turning the 30 day levels on we can capture this price action.  

[filename](_media/showing_missing_lines_analysis_period_selection.webm ':include :type=video controls width=100% loop')

Below is an example where more granulatirty was needed. On this TSLA chart you can see that with only the 90 and 240 'Analysis Periods' enabled there are some areas of the chart that look like interesting pivots where the S/R indicator shows no lines. In this case it is worth turning on the 30 day levels to see if they help fill in the gaps.  It is often helpful to toggle the 30 day off and on for each cart to see if it fills critical price action gaps or just clusters the chart.

Missing levels             |  30 Period Levels Added
:-------------------------:|:-------------------------:
![image](_media/analysis_period_missing_levels.png )  |  ![image](_media/analysis_period_with_levels.png )

Another use case for shorter periods is if you are trying to scalp based on a large move in the last 1-4 days. In this case enabling the 5 day levels can show short term levels to day trade around.

![image](_media/5_day_analysis_length.png ':size=100%')


# Strategy

## GAP Rejection (Standalone) [GR]

* Gaps like to be filled but they also often act as resistance before getting filled.
* Gaps can be treated as strong resistance / support for reversal plays.

![image](_media/gap_rejection.png ':size=100%')
![image](_media/gap_rejection_2.png ':size=100%')

## DPOC Bounces (Standalone)

* The DPOC often acts as a strong support / resistance level and can be played as a bounce spot.
* Representing the highest volume node over the last X days this area represents where most of the shares have been traded.

![image](_media/dpoc_bounce.png ':size=100%')
