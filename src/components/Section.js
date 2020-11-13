import React from "react";
import { Box, Heading } from 'grommet'
import FadeInComponent from "./FadeInComponent.js";


export default function Section({ title, children }) {
    return (
        <Box flex="grow" margin={{ horizontal: "medium", bottom: "small" }}>
            <FadeInComponent>
                <Heading level="2" margin="none">
                    {title}
                </Heading>
            </FadeInComponent>
            <FadeInComponent>
                {children}
            </FadeInComponent>
        </Box>
    )
}