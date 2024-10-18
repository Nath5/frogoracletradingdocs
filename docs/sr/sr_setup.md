---
sidebar_position: 2
---

# Setup

## Adding the indicator

To add the indicator to your charts, ensure you have the chart view open in TV.

1. Click the indicator button at the top of the window.
2. When the indicator pop-up appears, click the 'Invite-Only' tab on the bottom left.
3. Click on the `open space` next to the indicator name to add to your chart.


:::warning
It may take a moment for the indicator to show up, don't keep clicking or you will end up with multiple instances on your chart.
:::

<Tabs>
  <TabItem value="desktop" label="Desktop" default>
   <video src="/adding_indicator.webm" controls width="100%" type="video/webm"></video>
  </TabItem>
  <TabItem value="mobile" label="Mobile">
   <video src="/adding_indicator_mobile.mp4" controls type="video/webm" style={{height: '800px'}}></video>
  </TabItem>
</Tabs>


## Time-Frame Constraints

The indicator is designed to work on time frames of 5m to 1D. You will still see some lines on the 3m but many will be missing. Below 3m most lines will not load. With continuous contracts like crypto or futures, time-frames below 15m may fail to load all levels. It is always a good idea to start with 30m and work your way down to ensure you are not missing anything.

![image](_media/setup/constraints_timeframe.png ':size=600')


## Price Scale 

:::danger[This is a critical step do not skip it!]

The levels will cause the chart to scale improperly as TV tries to fit them all on the screen. To fix this, ensure “Scale price chart only” is selected. To bring up this menu on desktop, right click on the price scale ( see video below ). On mobile, long click on the price scale.
:::

<video src="/line_scaling_example.webm" controls width="100%" type="video/webm"></video>