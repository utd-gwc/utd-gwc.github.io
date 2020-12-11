import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import LoadingSpinner from "./LoadingSpinner.js";
import OfficerCard from "./OfficerCard.js";
import GridGenerator from './GridGenerator.js'

export default function OfficerSection() {
    const [officers, setOfficers] = useState(null);
    const [loadingOfficers, setloadingOfficers] = useState(false);

    async function getOfficers() {
        try {
            setloadingOfficers(true);
            const res = await fetch(`https://utd-gwc-api.herokuapp.com/api/officers?sort=+order`, {
                method: "GET",
            });
            const officers = await res.json();
            setOfficers(officers);
        } catch (err) {
            console.log(err);
        } finally {
            setloadingOfficers(false);
        }
    }

    useEffect(() => {
        getOfficers();
    }, []);
    return (
        <Box fill={true} direction="row-responsive" justify="center">
            {loadingOfficers || officers == null ? (
                <LoadingSpinner />
            ) : (
                    <GridGenerator fullRow>
                        {officers.map((officer) => {
                            return (
                                <OfficerCard
                                    key={officer._id}
                                    //   name={officer.name}
                                    //   bio={officer.bio}
                                    //   position={officer.position}
                                    {...officer}
                                />
                            );
                        })}
                    </GridGenerator>
                )}
        </Box>
    );
}
