import React from 'react';
import { Box, Heading } from 'grommet'
import Typist from 'react-typist';

const Tab = ({ children }) => {
    return (
        <Box margin={{ left: "medium" }}>
            {children}
        </Box>
    )
}

const Code = ({ children, type, nospace }) => {
    return (
        <Heading level={3} margin="none" color={"code-" + type} style={{ display: "inline" }}>
            {children}{!nospace && " "}
        </Heading>
    )
}

export default function CodeSnippet() {
    return (
        <Typist cursor={{ show: false }}>
        <Box>
            <Code>
                <Code type="keyword">
                    const club
                    </Code>
                <Code type="variable">
                    GWC
                    </Code>
                {"= () => {"}
            </Code>
            <Tab>
                <Code>
                    <Code type="keyword">if</Code>{"( "}<Code type="function" nospace>viewing</Code>
                    {"("}<Code type="variable" nospace>you</Code>{") == "}<Code type="keyword" nospace>this</Code>
                    {"."}<Code type="variable">page</Code>{") {"}</Code>
                <Tab>
                    <Code>
                        <Code type="function" nospace>print</Code>{"("}<Code type="string" nospace>"Welcome to UTD Girls Who Code!"</Code>
                        {");"}
                    </Code>
                </Tab>
                <Code>
                    {"}"}
                </Code>
                <br />
                <Code>
                    <Code type="keyword">let</Code><Code type="variable">goals</Code>
                    {"= {"}
                </Code>
                <Tab>
                    <Code>
                        <Code type="variable">"one"</Code>{": "}<Code type="function">build_sisterhood()</Code>{","}<br />
                        <Code type="variable">"two"</Code>{": "}<Code type="function">empower_womxn()</Code>{","}<br />
                        <Code type="variable">"three"</Code>{": "}<Code type="function">build_technical_skills()</Code>{","}
                    </Code>
                </Tab>
                <Code>
                    {"};"}
                </Code>
                <br />
                <Code>
                    <Code type="keyword">return</Code><Code type="variable" nospace>goals</Code>{";"}
                </Code>
            </Tab>
            <Code>
                {"}"}
            </Code>
        </Box>
        </Typist>
    )
    // const club GWC = () => {
    //     if (viewing(you) == this.page) {
    //         print("Welcome to UTD Girls Who Code!");
    //     }

    //     let goals = {
    //         "one": build_sisterhood(),
    //         "two": empower_womxn(),
    //         "three": build_technical_skills(),
    //     };

    //     return goals;
    // }
}