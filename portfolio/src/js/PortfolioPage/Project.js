import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export default function ProjectsList(props) {
  const { data } = props;
  return (
    <Card>
      <CardHeader
        sx={{ p: '16px' }}
        avatar={<Avatar src={data.mainToolIcon} alt="Sass icon" sx={{ width: 50, height: 50 }} />}
        title={data.name}
        subheader={data.type}
        titleTypographyProps={{ fontSize: '20px' }}
      />
      <CardMedia component="img" image={data.image} alt={data.name} />
      <CardContent sx={{ p: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: '500', m: '10px 0' }}>
          {data.technologies.join(' • ')}
        </Typography>
        <Typography variant="body2">{data.description}</Typography>
      </CardContent>
      <CardActions sx={{ p: '16px' }}>
        {data.links.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            sx={{ p: '4px 10px', textTransform: 'uppercase' }}
            target="_blank"
          >
            <Typography variant="subtitle2" sx={{ color: 'secondary.dark' }}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </CardActions>
    </Card>
  );
}

ProjectsList.propTypes = {
  data: PropTypes.object.isRequired,
};
