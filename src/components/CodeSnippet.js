import React from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet'
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

const CodeWrapper = ({ children, isTypingDone }) => {
    if (isTypingDone) {
        return (
            <Box elevation={"medium"} margin={{ horizontal: "medium" }} round="small">
                {children}
            </Box>
        )
    } else {
        return (
            <Box elevation={"none"} margin={{ horizontal: "medium" }}>
                {children}
            </Box>
        )
    }
}

const ConditionalTypist = ({ children, isMobile, setIsTypingDone }) => {
    if (isMobile) {
        setIsTypingDone(true);
        return (
            <Box>
                {children}
            </Box>
        )
    } else {
        setIsTypingDone(false);
        return (
            <Typist avgTypingDelay={45} cursor={{ show: false }} onTypingDone={() => { setIsTypingDone(true) }}>
                {children}
            </Typist>
        )
    }
}

export default function CodeSnippet() {
    const [isTypingDone, setIsTypingDone] = React.useState(false);
    const size = React.useContext(ResponsiveContext)
    return (
        <CodeWrapper isTypingDone={isTypingDone}>
            <ConditionalTypist setIsTypingDone={setIsTypingDone} isMobile={size === 'small'}>
                <Box margin="medium">
                    <div>
                        <Code type="keyword">const club</Code><Code type="variable">GWC</Code><Code>{"= () => {"}</Code>
                    </div>
                    <Tab>
                        <div>
                            <Code type="keyword">if</Code><Code>{"("}</Code><Code type="function" nospace>viewing</Code>
                            <Code nospace>{"("}</Code><Code type="variable" nospace>you</Code><Code>{") == "}</Code>
                            <Code type="keyword" nospace>this</Code><Code nospace>{"."}</Code><Code type="variable">page</Code>
                            <Code>{") {"}</Code>
                        </div>
                        <Tab>
                            <div>
                                <Code type="function" nospace>print</Code><Code nospace>{"("}</Code>
                                <Code type="string" nospace>"Welcome to UTD Girls Who Code!"</Code><Code>{");"}</Code>
                            </div>
                        </Tab>
                        <Code>{"}"}</Code>
                        <br />
                        <div>
                            <Code type="keyword">let</Code><Code type="variable">goals</Code><Code>{"= {"}</Code>
                        </div>
                        <Tab>
                            <div>
                                <Code type="variable" nospace>"one"</Code><Code>{": "}</Code><Code type="function" nospace>build_sisterhood()</Code><Code>{","}</Code><br />
                                <Code type="variable" nospace>"two"</Code><Code>{": "}</Code><Code type="function" nospace>empower_womxn()</Code><Code>{","}</Code><br />
                                <Code type="variable" nospace>"three"</Code><Code>{": "}</Code><Code type="function" nospace>learn_technical_skills()</Code><Code>{","}</Code>
                            </div>
                        </Tab>
                        <Code>{"};"}</Code>
                        <br />
                        <div>
                            <Code type="keyword">return</Code><Code type="variable" nospace>goals</Code><Code>{";"}</Code>
                        </div>
                    </Tab>
                    <Code>{"}"}</Code>
                </Box>
            </ConditionalTypist>
        </CodeWrapper>
    )
    // const club GWC = () => {
    //     if (viewing(you) == this.page) {
    //         print("Welcome to UTD Girls Who Code!");
    //     }

    //     let goals = {
    //         "one": build_sisterhood(),
    //         "two": empower_womxn(),
    //         "three": learn_technical_skills(),
    //     };

    //     return goals;
    // }
}