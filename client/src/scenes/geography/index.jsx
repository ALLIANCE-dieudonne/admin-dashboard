import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <div>
      <Box sx={{ margin: "1rem 2rem" }}>
        <Header
          title="GEOGRAPHY"
          subtitle="Countries where users are located."
        />
        <Box
          mt="40px"
          height="75vh"
          border={`1px solid ${theme.palette.secondary[200]}`}
          borderRadius="4px"
        >
          {data ? (
            <ResponsiveChoropleth
              data={data}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: theme.palette.secondary[200],
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.secondary[200],
                      strokeWidth: 1,
                    },
                    text: {
                      fill: theme.palette.secondary[200],
                    },
                  },
                },
                legends: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                tooltip: {
                  container: {
                    color: theme.palette.primary[800],
                  },
                },
              }}
              features={geoData.features}
              margin={{ top: 0, right: 0, bottom: 0, left: -30 }}
              domain={[0, 5]}
              unknownColor="#666666"
              label="properties.name"
              valueFormat=".2s"
              projectionScale={100}
              projectionTranslation={[0.5, 0.7]}
              projectionRotation={[-3, 1, 1]}
              borderColor={theme.palette.primary[200]}
              borderWidth={1}
              isInteractive={true} // Enable hover and interaction
              legends={[
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 60,
                  translateY: -35,
                  itemsSpacing: 0,
                  itemWidth: 97,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: theme.palette.secondary[200],
                  itemOpacity: 0.85,
                  symbolSize: 22,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.primary[200],
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          ) : (
            <span>Loading...</span>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Geography;
