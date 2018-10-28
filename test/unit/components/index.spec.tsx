import * as React from "react";
import { shallow } from 'enzyme';
import App from "../../../src/scripts/components/App";

it("renders the heading", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
});