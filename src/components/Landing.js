import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import CodeSnippet from './CodeSnippet.js';
import StayInTheLoop from './StayInTheLoop.js';

export default function Landing() {
    const size = React.useContext(ResponsiveContext)
    const isMobile = size === "small"
    return (
        <Box height={{ min: "80vh" }} fill="vertical" direction="row-responsive" margin={{ top: "large", bottom: isMobile ? "large" : "none" }} gap="large">
            <Box direction="column" width="large">
                <CodeSnippet />
            </Box>
            <Box flex="grow" align="end" direction="column">
                <StayInTheLoop />
            </Box>
        </Box>
    )
}