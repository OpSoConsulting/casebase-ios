/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import PercentageSubsequent from '../../../../block-quotes/PercentageSubsequent';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        AAT makes some tweaks to the standard/premium pricing schedule, and your team now forecasts that 20% of first year customers will choose the premium plan.
      </BodyText>
      <BodyText>
        As a final request, the investors of AAT ask you to forecast growth for the premium plan, which has been relatively under-researched as the company focused on fine-tuning its standard plan. Executives tell you that the number of standard subscribers is forecast to increase by 40% over the next 10 years.
      </BodyText>
      <BodyText>
        Your team estimates that AAT’s total customer base will grow in line with the industry average: 52% over the next 10 years.
      </BodyText>
      <BodyText>
        By your estimate, what will be the average annual growth rate in premium subscriptions?
      </BodyText>
      <PercentageSubsequent />
    </View>
  );
};

export default Body;
