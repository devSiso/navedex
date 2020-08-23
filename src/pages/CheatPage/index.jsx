import React from 'react';

import { CheatWrapper, Cat } from './styles';

const CheatPage = () => {
  return (
    <CheatWrapper>
      <Cat
        style={{
          backgroundImage: `url('https://media1.tenor.com/images/22858f2a70e20ae0a06afa4dd2d6789b/tenor.gif?itemid=10377634')`,
        }}
      />
      {window && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio loop="loop" autoPlay="autoplay">
          <source src="static/audio/what_is_this.mp3" type="audio/mpeg" />
        </audio>
      )}
    </CheatWrapper>
  );
};

export default CheatPage;
