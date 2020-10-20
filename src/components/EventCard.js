import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Paragraph,
  Heading,
} from "grommet";
import * as Icons from "grommet-icons";

export default function EventCard(props) {
  return (
    <Card height="medium" margin="medium" width="medium" background="accent-2" elevation="small">
      <CardHeader pad="small" margin="none" wrap>
        <Heading level="3" margin="none">
          {props.title}
        </Heading>
        <Heading level="4" margin="none">
          {props.date}
        </Heading>
      </CardHeader>
      <CardBody overflow="auto" pad="medium">
        <Paragraph margin="none">{props.description}</Paragraph>
      </CardBody>
      <CardFooter
        pad={{ horizontal: "small" }}
        background="accent-3"
      >
        <Button icon={<Icons.DownloadOption color="brand" />} hoverIndicator />
        <Button icon={<Icons.ShareOption color="brand" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}
