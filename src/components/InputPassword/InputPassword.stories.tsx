import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import InputPassword from "./InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/InputPassword",
    component: InputPassword,
} as Meta<typeof InputPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputPassword> = (args) => {
    const [password, set_password] = useState('')
    return (
        <InputPassword {...args} value={password} onChange={(e) => set_password(e.target.value)} />
    )
};

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    className: "form-control",
    id: "hello_world",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    className: "form-control",
    id: "click_me",
};
