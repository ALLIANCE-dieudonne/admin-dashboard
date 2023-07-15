import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, colors, useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";
const BreakDownChart = ({ isDashboard = false, isNonMediumScreens }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  if (!data || isLoading) return "Loading...";
  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );
  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      minHeight={isDashboard ? "325px" : undefined}
      width={isDashboard ? "300px" : undefined}
      position="relative"
    >
      {" "}
      <ResponsivePie
        data={formattedData}
        margin={
          isDashboard
            ? { top: 30, right: 70, bottom: 90, left: 40 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
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
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        enableArcLinkLabels={!isDashboard}
        startAngle={-14}
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", "0.2"]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.primary[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: isDashboard ? "column" : "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: isDashboard ? 4 : 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.palette.primary[100],
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      {!isDashboard && (
        <Box
          position="absolute"
          top="42%"
          left="45%"
          color={theme.palette.secondary[600]}
          pointerEvents="none"
          sx={{
            transform: isDashboard
              ? "translate(-75%, -170%)"
              : "translate(-50, -100%)",
          }}
        >
          <Typography variant="h6">"Total:"${data.yearlySalesTotal}</Typography>
        </Box>
      )}
    </Box>
  );
};
export default BreakDownChart;
