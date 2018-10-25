import * as React from "react";
import * as renderer from 'react-test-renderer';
import Seasons from "../../../../src/scripts/components/Seasons";

it("renders the heading", () => {
    const wrapper = renderer.create(<Seasons/>).toJSON();

    expect(wrapper).toMatchSnapshot()
});