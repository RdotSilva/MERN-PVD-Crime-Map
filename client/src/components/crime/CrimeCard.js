import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

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

// TODO: Update styling for crime card
// Add clickable link for address to google maps

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
          <Moment format={"MM-DD-YYYY HH:mm A"}>{crime.reported_date}</Moment>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Statute: {crime.statute_code}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {crime.statute_desc}
        </Typography>
        <Typography variant="body2" component="p">
          Address
          <br />
          <Button size="small">
            <a
              href={`https://www.google.com/maps/place/${crime.location},+Providence,+RI`}
              target="_blank"
            >
              {crime.location}
            </a>
          </Button>
        </Typography>
        <Typography color="textSecondary">Case: {crime.casenumber}</Typography>
      </CardContent>
    </Card>
  );
};

export default CrimeCard;
