import React, { useState, useEffect } from 'react';
import { Box, CardHeader, Image, InfiniteScroll, Card } from 'grommet'
import LoadingSpinner from './LoadingSpinner';

export default function InstaFeed({isLightMode}) {
    const media = [
        {
            src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123295948_815175352366490_707515184916458879_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=R0usiKxLnssAX_mcKE0&tp=1&oh=72df946949fd085c0398d8e39a4f1322&oe=6000AE74",
            alt: "🇺🇸🇺🇸🇺🇸some wild times we’re living in with the election this time around 🇺🇸🇺🇸🇺🇸 if you want to use some of that ~~civic~~ information on an app or website or if you simply want to learn how to use an API, come through to our workshop to learn more!",
            url: "https://www.instagram.com/p/CHGMpENBCbn/",
        },
        {
            src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/123114601_2740078056312681_7778889110356963061_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=Iaw3pyYPTKEAX-bRN_0&tp=1&oh=d24c0cdbbf76ce4272dbbad49d69f783&oe=5FFFCD18",
            alt: "We’re nearing the end of the Fall semester which means... we’re recruiting for Spring! if you’re interested in leading this organization or our sister organization @wicys.utd, go to bit.ly/gwc-wicys-apps to fill out an app 😁 feel free to DM with any questions about the app or the positions",
            url: "https://www.instagram.com/p/CG-scg2B5Bw/",
        },
        {
            src: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/121729558_3334572683295638_8355437585673869326_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=AmqDQuq91zwAX-W2pug&tp=1&oh=a0e741cbf4dcea42859b3318d5879a61&oe=6000EBBE",
            alt: "Don’t know git? We gotchu 🖥",
            url: "https://www.instagram.com/p/CGgfFCcJRV5/",
        }
    ]
    const instaPFP = "url('https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/s320x320/106479552_312194029957787_6173826917802346628_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_ohc=8Jzi_3r1984AX8Usw1o&tp=1&oh=0a1afaf4873f912ebef8cecd9a823c3f&oe=60033F2D\n')"
    const [loadingFeed, setLoadingFeed] = useState(false)
    const [feed, setFeed] = useState(null)

    var getJSON = function getJSON(body) {
        try {
            var data = body.split("window._sharedData = ")[1].split("</script>")[0];
            return JSON.parse(data.substr(0, data.length - 1));
        } catch (err) {
            throw Error("cannot parse response body");
        }
    };

    var mapMedia = function mapMedia(json) {
        try {
            var thumbnailIndex = function thumbnailIndex(node) {
                node.thumbnail_resources.forEach(function (item, index) {
                    if (item.config_width === 640) {
                        return index;
                    }
                });
                return 4; // MAGIC
            };

            var _url = function _url(node) {
                return "https://www.instagram.com/p/" + node.shortcode;
            };

            var src = function src(node) {
                switch (node.__typename) {
                    case "GraphVideo":
                        return node.thumbnail_src;

                    case "GraphSidecar":
                    default:
                        return node.thumbnail_resources[thumbnailIndex(node)].src;
                }
            };

            var alt = function alt(node) {
                if (node.edge_media_to_caption.edges[0] && node.edge_media_to_caption.edges[0].node) {
                    return node.edge_media_to_caption.edges[0].node.text;
                } else if (node.accessibility_caption) {
                    return node.accessibility_caption;
                } else {
                    return "";
                }
            };

            var edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
            return edges.map(function (edge) {
                return {
                    alt: alt(edge.node),
                    url: _url(edge.node),
                    src: src(edge.node)
                };
            });
        } catch (err) {
            throw Error("cannot map media array");
        }
    };

    async function getFeed() {
        try {
            setLoadingFeed(true);
            const res = await fetch(`https://www.instagram.com/utdgwc/`, {
                method: "GET",
            });
            console.log(res)
            const body = await res.text();
            const json = await getJSON(body)
            console.log(json)
            const media = await mapMedia(json)
            console.log(media)
            setFeed(media);
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
        <Card height="medium" width="medium" style={{ overflowY: 'scoll' }} border={{ color: "card-background" }} background="card-background">
            <CardHeader fill="horizontal" pad="small" background="card-background">
                <Box direction="row">
                    <Box align="center" justify="center" pad="medium" margin="none" background={{ "color": "light-2", "image": instaPFP }} round="full" />
                    <Box align="start">
                        <a class="InstaUsername" href="https://www.instagram.com/utdgwc" target="_blank" referrer="noreferrer" style={{ color: isLightMode ? "black" : "white" }}>
                            utdgwc
                        </a>
                    </Box>
                </Box>
                <a class="ViewProfileButton" href="https://www.instagram.com/utdgwc" referrer="noreferrer" target="_blank">
                    View Profile
                </a>
            </CardHeader>
            {<Box overflow="auto">
                <InfiniteScroll items={feed || media}>
                    {(item) => (
                        <Box flex={false} height="medium" margin={{bottom: "medium"}}>
                            <a href={item.url} target="_blank" referrer="noreferrer">
                                <Image
                                    src={item.src}
                                    fit="cover"
                                    fill="horizontal"
                                    a11yTitle={item.alt} />
                            </a>
                        </Box>
                    )}
                </InfiniteScroll>
            </Box>}
        </Card>
    )
}