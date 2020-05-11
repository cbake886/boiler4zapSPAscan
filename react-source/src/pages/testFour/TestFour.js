
import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Widget from "../../components/Widget";


function TestFour() {
  var classes = useStyles();
  // local
 

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Widget
          disableWidgetMenu
          title="testPageFour"
          className={classes.card}
          bodyClass={classes.fullHeightBody}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis sapien sit amet nisl eleifend, vel semper arcu porttitor. Phasellus ex velit, viverra sit amet ultrices quis, fermentum non diam. Nunc ut leo facilisis, commodo mi ac, porta purus. Praesent a nisl vel nisi ultrices maximus sed quis nisi. Morbi vestibulum sagittis ex non venenatis. Curabitur iaculis est libero, sed rutrum neque feugiat at. Aliquam vitae lobortis nisi. Aenean a vestibulum ligula. Vivamus feugiat lectus eget tempus sodales. Vivamus fringilla est in dolor porttitor congue. Phasellus ut ipsum magna.

In vehicula sapien eget lectus dignissim lobortis. Ut feugiat ligula eget ligula laoreet, in maximus purus venenatis. Aliquam ut ante quis nisi dictum facilisis. Nam facilisis et augue sit amet malesuada. Quisque sed feugiat lorem. In accumsan malesuada sapien vel tincidunt. Nullam condimentum, sem sed posuere bibendum, nisi nisi efficitur quam, egestas condimentum massa sapien in justo. Aliquam erat volutpat.

In in luctus leo. Aenean et vulputate dolor, eget egestas arcu. Nam eu facilisis ipsum. Sed et sagittis nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dictum nisi vitae ipsum congue bibendum eu id diam. Donec venenatis lorem id dignissim ullamcorper. Quisque metus mauris, bibendum at ultricies viverra, interdum id ex. Vestibulum mauris dui, volutpat aliquam nunc eget, aliquet pulvinar turpis. Sed molestie ullamcorper justo, vitae luctus nisi mollis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae efficitur odio. Duis suscipit in est vitae eleifend.

Sed fermentum euismod semper. Donec ultrices diam ut eros efficitur, at tempor justo posuere. Pellentesque at quam ex. Ut placerat dictum sollicitudin. Praesent maximus, lorem at semper ornare, dolor purus bibendum est, non suscipit lacus orci quis justo. Etiam vitae pharetra velit, non feugiat orci. Nam et libero lacus. Vivamus tempus consequat lectus et aliquet. Nullam suscipit ac orci sed interdum.

Curabitur leo eros, accumsan eu ornare nec, varius vitae odio. Pellentesque venenatis nulla neque, ac eleifend dui tincidunt non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla velit urna, vulputate sit amet nisi sit amet, interdum tempus enim. Aliquam erat volutpat. Vivamus gravida venenatis massa ac egestas. In posuere sem sit amet libero lobortis hendrerit. Cras tincidunt malesuada porttitor. Nam consectetur in nisl ac pulvinar. Donec quis augue sem. Nam sagittis porta ipsum nec eleifend.
          </Widget>
      </Grid>
    </Grid>
  );
}

// #######################################################################


export default TestFour;
