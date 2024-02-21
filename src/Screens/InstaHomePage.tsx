import React from 'react';
//import {View, Text, TextInput} from 'react-native';

import InstaHeader from '../Screens/InstagramHeader';
import StoryComponent from '../component/storiesComponent';
import FeedComponent from '../component/feedComponent';

const InstaHomePage = () => {
  return (
    <>
      <InstaHeader />
      <StoryComponent />
      <FeedComponent />
    </>
  );
};

export default InstaHomePage;
