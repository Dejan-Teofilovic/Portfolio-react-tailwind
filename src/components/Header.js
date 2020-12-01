import React, { Component } from 'react';
import SocialIconGroup from './SocialIconGroup';

export class Header extends Component {
  render() {
    return (
      <div className="mt-20 h-80 flex flex-col justify-between border-2 border-red-400">
        <div>
          <h1 className="text-6xl mb-6  max-w-lg font-display font-extrabold">
            Pretty code by ingenious person
          </h1>

          <p className="max-w-xl text-sm text-grayLight font-body">
            Hello I am a software developer! I can help you build a product,
            featre or website. Look through some of my work and experience! If
            you like what you see and have project you need coded, don’t
            hesistate to contact me.
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-12 text-grayLight font-semibold">
            My works in social networks
          </p>
          <SocialIconGroup />
        </div>
      </div>
    );
  }
}

export default Header;
