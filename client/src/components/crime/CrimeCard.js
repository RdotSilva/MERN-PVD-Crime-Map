import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: "beige"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CrimeCard = ({ crime }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {crime.offense_desc}
        </Typography>
        <Typography variant="h5" component="h2">
          {crime.reported_date}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Statute: {crime.statute_code}
        </Typography>
        <Typography variant="body2" component="p">
          Address
          <br />
          <Button size="small">{crime.location}</Button>
        </Typography>
        <Typography color="textSecondary">Case: {crime.casenumber}</Typography>
      </CardContent>
    </Card>
  );
};

export default CrimeCard;
