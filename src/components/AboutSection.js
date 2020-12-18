import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet'
import FadeInComponent from './FadeInComponent';

export default function AboutSection(props) {
    return (
        <Box margin="medium" fill="horizontal">
            <FadeInComponent>
                <Box fill="horizontal" align="start" margin={{ bottom: 'large' }}>
                    <Box background="neutral-1" pad="medium" round="small">
                        <Heading level={3} size="medium" margin={{ top: "none" }} textAlign="end">
                            @ UTD
                        </Heading>
                        <Paragraph size="medium">
                            UTD’s GWC College Loop provides a platform for women to build sisterhood and community with other women at UTD, other universities and local high schools and middle schools. While honing our computer science skills, we engage with other women to take action, collaborate, create and inspire one another!
                        </Paragraph>
                    </Box>
                </Box>
            </FadeInComponent>
            <FadeInComponent>
                <Box fill="horizontal" align="end">
                    <Box background="card-background" pad="medium" round="small">
                        <Heading level={3} size="medium" margin={{ top: "none" }}>
                            Internationally
                        </Heading>
                        <Paragraph size="medium" textAlign="end">
                            Girls Who Code is an international non-profit organization working to close the gender gap in technology and lead the movement to inspire, educate and equip young women with the computing skills needed to pursue 21st century opportunities. Since launching in the United States in 2012, Girls Who Code has reached 185,000 girls through its programs (clubs, campuses, summer immersion programs, College Loops) and over 100 million people through campaigns, advocacy work, and New York Times best-selling series!
                        </Paragraph>
                    </Box>
                </Box>
                <Box fill="horizontal" align="center" margin={{ bottom: "none" }}>
                    <Heading level={4} textAlign="center">
                        Learn more about GWC from its founders!
                    </Heading>
                    <Button size="medium" secondary outlined label="Learn More" href="https://girlswhocode.com/" />
                </Box>
            </FadeInComponent>
        </Box>
    )
}