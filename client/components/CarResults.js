import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SimpleCarCard from './SimpleCarCard';

// const cars = [{
//     name: 'Corvette',
//     model: 'ZF1',
//     year: 2018,
//     color: 'Ghost white',
//     description: 'Brand New',
//     specification: 'V20 engine',
//     price: 100000,
//     imageUrl:
//       'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
//     country: 'USA',
//     id: 1
//   },
//   {
//     name: 'Mustang',
//     model: 'GT',
//     year: 2018,
//     color: 'Salmon',
//     description: 'Ferocious hemi engine that eats squirrels',
//     specification: 'V20 engine',
//     price: 100500,
//     imageUrl:
//       'http://st.motortrend.com/uploads/sites/5/2018/05/2018-Ford-Mustang-GT-Performance-Pack-2-front-three-quarter-e1526508541250.jpg?interpolation=lanczos-none&fit=around|660:440',
//     country: 'USA',
//     id: 2
//   },
//   {
//     name: 'Camry',
//     model: 'LTE',
//     year: 2018,
//     color: 'Champagne',
//     description: 'This is for moms and dads only, no tweens.',
//     specification: 'V4 engine',
//     price: 7,
//     imageUrl:
//       'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USB50TOC021E0101.jpg',
//     country: 'USA',
//     id: 3
//   },
//   {
//     name: 'Corvette',
//     model: 'ZF1',
//     year: 2018,
//     color: 'Ghost white',
//     description: 'Brand New',
//     specification: 'V20 engine',
//     price: 100000,
//     imageUrl:
//       'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
//     country: 'USA',
//     id: 1
//   },
//   {
//     name: 'Mustang',
//     model: 'GT',
//     year: 2018,
//     color: 'Salmon',
//     description: 'Ferocious hemi engine that eats squirrels',
//     specification: 'V20 engine',
//     price: 100500,
//     imageUrl:
//       'http://st.motortrend.com/uploads/sites/5/2018/05/2018-Ford-Mustang-GT-Performance-Pack-2-front-three-quarter-e1526508541250.jpg?interpolation=lanczos-none&fit=around|660:440',
//     country: 'USA',
//     id: 2
//   },
//   {
//     name: 'Camry',
//     model: 'LTE',
//     year: 2018,
//     color: 'Champagne',
//     description: 'This is for moms and dads only, no tweens.',
//     specification: 'V4 engine',
//     price: 7,
//     imageUrl:
//       'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USB50TOC021E0101.jpg',
//     country: 'USA',
//     id: 3
//   }]

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  rowOfCars: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

function CarResults(props) {
  const { classes } = props;
  return (
    <div className={classes.rowOfCars}>
      {cars.map(car => <SimpleCarCard key={car.id} car={car} />)}
    </div>
  );
}

export default withStyles(styles)(CarResults);
