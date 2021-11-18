import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SeasonCard from '../../../../../src/components/SeasonCard';

it('renders the heading', () => {
  const props = {
    raceName: 'Race',
    circuitName: 'Circuit',
    season: 'season',
    round: 'round',
    country: 'country',
    locality: 'locality',
    circuitId: 'circuitId',
    date: 'date',
    time: 'time',
    onSeasonSelect: jest.fn()
  };
  const wrapper = renderer.create(<SeasonCard {...props} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});
