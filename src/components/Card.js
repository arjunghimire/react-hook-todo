import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PCard = ({ title, description, id, handleRemove }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={`/todo/${id}`}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </Link>

        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/todo/${id}/edit`}> Edit</Link>
        </Button>
        <Button onClick={handleRemove} size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default PCard;
