import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Paragraph,
  Heading,
  Box,
  Text,
  Image,
  Menu
} from "grommet";
import ReactCardFlip from 'react-card-flip'
import * as Icons from "grommet-icons";
import { createEvent } from 'ics'

function CardFramework({ children }) {
  return (
    <Card height="medium" margin="medium" width="medium" background="card-background" elevation="medium" round="medium" flex="grow" pad="none" align="center" alignSelf="center">
      {children}
    </Card>
  )
}

function downloadTxtFile(event) {
  const tempDate = new Date(event.dateObj)
  createEvent({
    title: event.title,
    description: event.description,
    busyStatus: 'BUSY',
    duration: { hours: 1 },
    start: [tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), tempDate.getHours(), tempDate.getMinutes()],
    organizer: { name: 'UTD Girls Who Code', email: 'utdgirlswhocode@gmail.com' }
  }, (error, value) => {
    const element = document.createElement("a");
    const file = new Blob([value], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = event.title + ".ics";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  })
}

function SharedCardFooter({ toggleShowFlyer, showFlyer, event }) {
  return (
    <CardFooter align="center" direction="row-responsive" justify="between" gap="medium" pad={{ horizontal: "small" }} fill="horizontal" background="card-footer">
      {/* <Button icon={<Icons.ShareOption color="icon-color" />} hoverIndicator /> */}
      {event.flyerUrl != null && <Button primary label={<Text>{showFlyer ? "View Text" : "View Flyer"}</Text>} color="card-background" onClick={toggleShowFlyer} />}
      <Menu icon={<Icons.More color="icon-color" />} hoverIndicator
        items={[
          { label: "Open Flyer", onClick: () => { window.open(event.flyerUrl, '_blank') } },
          { label: "Save iCal Event", onClick: () => { downloadTxtFile(event) } },
        ]}
      />
    </CardFooter>
  )
}

export default function EventCard(props) {
  const [showFlyer, setShowFlyer] = useState(false)
  const toggleShowFlyer = e => {
    setShowFlyer(!showFlyer)
  }
  return (
    <ReactCardFlip isFlipped={showFlyer}>
      <CardFramework>
        <CardHeader fill="horizontal" pad="small" align="center" justify="between" margin="none" pad="small" gap="medium" direction="row-responsive">
          <Heading level="2" margin="xsmall" textAlign="start" size="medium">
            {props.title}
          </Heading>
          <Box direction="column" justify="center" align="end">
            <Text>
              {props.date}
            </Text>
            <Text>
              {props.time || "TBD"}
            </Text>
          </Box>
        </CardHeader>
        <Box align="center" justify="center" pad="xsmall" margin="xsmall" height="large">
          <Paragraph size="medium" margin="medium" textAlign="center" truncate>{props.description}</Paragraph>
        </Box>
        <SharedCardFooter toggleShowFlyer={toggleShowFlyer} showFlyer={showFlyer} event={props} />
      </CardFramework>


      <CardFramework toggleShowFlyer={toggleShowFlyer} flyerUrl={props.flyerUrl} showFlyer={showFlyer}>
        <Box align="center" justify="center" pad="none" margin="none" height="large">
          <Image src={props.flyerUrl} fill="vertical" fit="contain" />
        </Box>
        <SharedCardFooter toggleShowFlyer={toggleShowFlyer} showFlyer={showFlyer} event={props} />
      </CardFramework>
    </ReactCardFlip>

  );
}
