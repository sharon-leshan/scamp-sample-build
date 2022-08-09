import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import AttributionCard from '../AttributionCard';
import AvatarGroup from '../AvatarGroup';
import BadgeGroup from '../BadgeGroup';
import Heading from '../heading/Heading';
import ReadMore from '../readMore/ReadMore';

const Card = ({ blog }) => {
  const {
    id,
    imageUrl,
    title,
    categoryType,
    readTime,
    text,
    authorImage,
    author,
    datePosted,
    featured,
  } = blog;

  const { pathname } = useLocation();

  const isMatch = matchPath('/blog-post/:blogId', pathname);

  return (
    <article
      className={`blog-card ${featured && !!!isMatch ? 'featured' : ''}`}
    >
      <div className="blog-card__img-container">
        <img
          className="blog-card__img"
          src={require(`../../${imageUrl}`)}
          alt=""
        />
        {isMatch ? (
          <AttributionCard
            author={author}
            date={datePosted}
            category={categoryType.split(', ')[0]}
          />
        ) : null}
      </div>
      <div>
        {isMatch ? null : (
          <BadgeGroup
            className="blog-card__badge"
            badge={categoryType.split(', ')[0]}
            message={readTime}
          />
        )}
        {isMatch ? <h4>{title}</h4> : <Heading title={title} id={id} />}
        <p className="blog-card__text">{text}</p>
        {isMatch ? (
          <ReadMore id={id} />
        ) : (
          <AvatarGroup
            imageURL={authorImage}
            author={author}
            date={datePosted}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
