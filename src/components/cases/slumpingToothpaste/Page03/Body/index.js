/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import PercentageInitial from '../../../../block-quotes/PercentageInitial';


const Body = function Body() {
  return (
    <View>
      <BodyText>
        You&apos;d like your team to do a deep dive on the trends at Dizcount Mart, which has been far and away the fastest growing point of sale. You also feel that what&apos;s happening there is emblematic of the changes being brought on by ascendant discount stores.
      </BodyText>
      <BodyText>
        How did the revenue generated by the sale of single unit at Dizcount Mart change from 2011 to 2013?
      </BodyText>
      <PercentageInitial />
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
