import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  listRoot: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  paperRoot: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paperChildContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
});

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <Paper className={classes.paperRoot} elevation={4}>
          <Typography variant="headline" component="h3">
            Shopping Cart
          </Typography>
          <Typography component="p">
            Review your cart. When you're ready, head to checkout.
          </Typography>
          <div className={classes.paperChildContainer} >
            <Card className={classes.card}>
              <CardContent>
                {/* we would map over the div enclosing Table
                passing in data from the store in place of hard-coded data*/}
                <div className={classes.tableRoot}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Color</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Corvette</TableCell>
                        <TableCell>2018</TableCell>
                        <TableCell>$1000</TableCell>
                        <TableCell>Red</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small">Remove From Cart</Button>
              </CardActions>
            </Card>
          </div>
            <div className={classes.listRoot}>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Subtotal" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Tax" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Total" />
                </ListItem>
              </List>
            </div>
        </Paper>
      </div>
    );
  }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
