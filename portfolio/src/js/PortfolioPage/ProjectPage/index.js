import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import SEO from '../../common/SEO';
import ErrorBoundary from '../../common/ErrorBoundary';
import LoadingLayout from '../../Suspense/LoadingMainlayout';

const PageLayout = lazy(() => import('../../PageLayout'));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Project(props) {
  const { t } = useTranslation();
  const { data, children } = props;
  const [expanded, setExpanded] = React.useState(false);

  const ErrorMsg = (error) => {
    return (
      <div>
        {/* Вы можете использовать свои стили и код для обработки ошибок */}
        <p>Something went wrong! Reload the page.</p>
        <p>{error.message}</p>
      </div>
    );
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Suspense fallback={<LoadingLayout />}>
      <PageLayout title={t('portfolio.title')} avatar="ok">
        <ErrorBoundary ErrorComponent={ErrorMsg}>
          <SEO
            // eslint-disable-next-line prettier/prettier, max-len
            title={`${t('portfolio.project')} ${data.name} - ${data.type} (${data.technologies.join(' • ')})`}
            image={data.share}
            description={data.description}
          />
          <Card>
            <CardHeader
              sx={{ p: '16px' }}
              avatar={<Avatar src={data.avatar} alt="Sass icon" sx={{ width: 50, height: 50 }} />}
              title={data.name}
              subheader={data.type}
              titleTypographyProps={{ fontSize: '20px' }}
            />
            <CardMedia component="img" image={data.image} alt={data.name} />
            <CardContent sx={{ p: '16px' }}>
              <Typography variant="h5" sx={{ fontWeight: '500', m: '10px 0' }}>
                {data.technologies.join(' • ')}
              </Typography>
              {data.warning ? (
                <Typography
                  variant="body3"
                  sx={{ backgroundColor: 'warning.light', color: 'black' }}
                >
                  {data.warning}
                </Typography>
              ) : (
                <></>
              )}
              <Typography variant="body2" sx={{ mt: '10px' }}>
                {data.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: '16px', flexDirection: 'row', flexWrap: 'wrap' }}>
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
              {data.more ? (
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  sx={{ color: 'secondary.dark' }}
                >
                  <ExpandMoreIcon className={expanded ? '' : 'bounce2'} />
                </ExpandMore>
              ) : (
                <></>
              )}
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>{data.more}</CardContent>
            </Collapse>
          </Card>
        </ErrorBoundary>
      </PageLayout>
    </Suspense>
  );
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};

Project.defaultProps = {
  children: <></>,
};
