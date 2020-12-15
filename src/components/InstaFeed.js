import React, { useState, useEffect } from 'react';
import { Box, CardHeader, Image, InfiniteScroll, Card, Heading } from 'grommet'
import LoadingSpinner from './LoadingSpinner';

export default function InstaFeed({ isLightMode }) {
    // const defaultMedia = [
    //     {
    //         src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123295948_815175352366490_707515184916458879_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=R0usiKxLnssAX_mcKE0&tp=1&oh=72df946949fd085c0398d8e39a4f1322&oe=6000AE74",
    //         alt: "🇺🇸🇺🇸🇺🇸some wild times we’re living in with the election this time around 🇺🇸🇺🇸🇺🇸 if you want to use some of that ~~civic~~ information on an app or website or if you simply want to learn how to use an API, come through to our workshop to learn more!",
    //         url: "https://www.instagram.com/p/CHGMpENBCbn/",
    //     },
    //     {
    //         src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123114601_2740078056312681_7778889110356963061_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=Iaw3pyYPTKEAX-bRN_0&tp=1&oh=d24c0cdbbf76ce4272dbbad49d69f783&oe=5FFFCD18",
    //         alt: "We’re nearing the end of the Fall semester which means... we’re recruiting for Spring! if you’re interested in leading this organization or our sister organization @wicys.utd, go to bit.ly/gwc-wicys-apps to fill out an app 😁 feel free to DM with any questions about the app or the positions",
    //         url: "https://www.instagram.com/p/CG-scg2B5Bw/",
    //     },
    //     {
    //         src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/121729558_3334572683295638_8355437585673869326_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=AmqDQuq91zwAX-W2pug&tp=1&oh=a0e741cbf4dcea42859b3318d5879a61&oe=6000EBBE",
    //         alt: "Don’t know git? We gotchu 🖥",
    //         url: "https://www.instagram.com/p/CGgfFCcJRV5/",
    //     }
    // ]
    const instaPFP = "url('https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s320x320/106479552_312194029957787_6173826917802346628_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_ohc=8Jzi_3r1984AX8Usw1o&tp=1&oh=0a1afaf4873f912ebef8cecd9a823c3f&oe=60033F2D\n')"
    const [loadingFeed, setLoadingFeed] = useState(false)
    const [feed, setFeed] = useState(null)

    async function getFeed() {
        try {
            setLoadingFeed(true);
            const res = await fetch(`https://utd-gwc-api.herokuapp.com/api/posts?sort=-posted`, {
                method: "GET",
            });
            const json = await res.json();
            setFeed(json);
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingFeed(false);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);

    return (
        <Box margin="medium">
            <Card height="medium" width="medium" style={{ overflowY: 'scoll' }} border={{ color: "card-background" }} background="card-background">
                <CardHeader fill="horizontal" pad="small" background="card-background">
                    <Box direction="row">
                        <Box align="center" justify="center" pad="medium" margin="none" background={{ "color": "light-2", "image": instaPFP }} round="full" />
                        <Box align="start">
                            <a class="InstaUsername" href="https://www.instagram.com/utdgwc" target="_blank" referrer="noopener noreferrer" style={{ color: isLightMode ? "black" : "white" }}>
                                utdgwc
                        </a>
                        </Box>
                    </Box>
                    <a class="ViewProfileButton" href="https://www.instagram.com/utdgwc" referrer="noopener noreferrer" target="_blank">
                        View Profile
                </a>
                </CardHeader>
                {loadingFeed ? (<LoadingSpinner />) :
                    (feed == null ? (
                        <Box margin="medium">
                            <Heading level={4}>
                                Something went wrong. Please try again later.
                        </Heading>
                        </Box>
                    ) : (
                            <Box overflow="auto">
                                <InfiniteScroll items={feed}>
                                    {(item) => (
                                        <Box flex={false} height="medium" margin={{ bottom: "medium" }}>
                                            <a href={item.url} target="_blank" referrer="noopener noreferrer">
                                                <Image
                                                    src={item.src}
                                                    fit="cover"
                                                    fill="horizontal"
                                                    a11yTitle={item.alt} />
                                            </a>
                                        </Box>
                                    )}
                                </InfiniteScroll>
                            </Box>
                        ))
                }
            </Card>
        </Box>
    )
}