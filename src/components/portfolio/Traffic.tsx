import React from 'react';
import PortfolioDetailesTemplate from './PortfolioDetailesTemplate';
import graphs from '../../assets/graphs.jpg'

function Traffic() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi fugit alias dolore nulla praesentium dicta possimus! Neque, repudiandae. Quam esse unde exercitationem voluptas non dolore praesentium nulla cupiditate tempore ad.
  Vitae reprehenderit ipsum deleniti, earum distinctio sunt fuga dignissimos ab quia commodi exercitationem quam tenetur eaque cumque, dolore incidunt cupiditate? Laborum eligendi possimus dolorem neque amet necessitatibus dolor debitis soluta!
  Optio, nulla vero. Sequi aspernatur officiis tempora numquam illo. Labore quas exercitationem nostrum eaque doloribus dolore aperiam consequatur natus, aspernatur repellendus ullam voluptates sequi pariatur explicabo deleniti necessitatibus ut quia?`
  return (
    <div>
      <PortfolioDetailesTemplate
        projectName="Traffic analysis tool"
        projectDescription={description}
        projectImage={graphs}
        projectImageAlt="traffic"
      />
    </div>
  );
}

export default Traffic;