import * as React from "react";
import * as renderer from 'react-test-renderer';
import App from "../../../src/scripts/components/App";

it("renders the heading", () => {
    const wrapper = renderer.create(<App/>).toJSON();
    expect(wrapper).toMatchSnapshot()
});