import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
    display: "inline-block",
  },
  media: {
    height: 240,
  },
});

export default function CardPerformance({ performance, deleteOnClick }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={performance.performanceImg}
          title={performance.performanceName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {performance.performanceName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {performance.performanceArtist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {performance.performanceSummary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/*         <Button size="small" color="primary">
          Edit
        </Button> */}
        <Button size="small" color="primary" onClick={deleteOnClick}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
