import React from 'react'
import { Box } from 'grommet'
import CodeSnippet from './CodeSnippet.js';
import StayInTheLoop from './StayInTheLoop.js';

export default function Landing() {
    return (
        <Box height={{ min: "80vh" }} fill="vertical" direction="row-responsive" margin={{ top: "large" }}>
            <Box direction="column" width="large">
                <CodeSnippet />
            </Box>
            <Box flex="grow" align="end" direction="column">
                <StayInTheLoop />
            </Box>
        </Box>
    )
}