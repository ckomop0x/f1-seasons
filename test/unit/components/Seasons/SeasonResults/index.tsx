import * as React from "react";
import * as renderer from 'react-test-renderer';
import SeasonResults from "../../../../../src/scripts/components/Seasons/SeasonResults";

it("renders the heading", () => {
    const props = {
        season: '2018',
        round: '1',
        year: '2018',
        toggleViews: jest.fn()
    };
    const wrapper = renderer.create(<SeasonResults {...props}/>).toJSON();

    expect(wrapper).toMatchSnapshot()
});