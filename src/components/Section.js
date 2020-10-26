import React from "react";
import { Box, Heading } from 'grommet'


export default function Section({ title, children }) {
    return (
        <Box margin={{ horizontal: "medium", bottom: "small" }}>
            <Heading level="2" margin="none">
                {title}
            </Heading>
            {children}
        </Box>
    )
}