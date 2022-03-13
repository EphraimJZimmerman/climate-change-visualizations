// https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([

    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Average Global Sea Levels",
        "location": "https://climate.nasa.gov/vital-signs/sea-level/",
        "shortDescription": "The data points for global sea levels spanning more than two decades.",
        "fullDescription": "The average of global sea levels (in Millimeters) from 1995 to 2021 demonstrating a substantial and alarming increase attributable to carbon emissions."
      },
      "data": {
        "refresh": {
          "lastUpdated": 20220201,
          "frequency": "annual"
        },
        "outputs": {
          "current": 2020,
          "unit": "mm",
          "historical": [9.5, 35.4, 44.9, 49.9, 51.3, 96.4],
          "dateRange": [19950716, 20000723, 20050811, 20100829, 20150619, 20200528]
        }
      }
    }],

    [{
        "apiVersion": "1.0",
        "metadata": {
          "name": "Arctic Sea Ice Extent",
          "location": "https://climate.nasa.gov/vital-signs/arctic-sea-ice/",
          "shortDescription": "Data points showing amounts of arctic ice.",
          "fullDescription": "Data showing amount of arctic ice, in million square km, from 1979-2022 at the lowest yearly point (September)."
        },
        "data": {
          "refresh": {
            "lastUpdated": 20210901,
            "frequency": "quinquennially"
          },
          "outputs": {
            "current": 4.92,
            "unit": "mil km^2",
            "historical": [null, null, null, null, null, null, null, null, 7.17, 6.96, 7.21, 6.63, 5.64, 4.16, 3.39, 4.67, null],
            "dateRange": [19420101, 19470101, 19520101, 19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
          }
        }
      } ],

    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Drought",
        "location": "https://spei.csic.es/map/maps.html#months=1#month=0#year=2022",
        "shortDescription": "This data points drought using the SPEI",
        "fullDescription": "The the Standardised Precipitation-Evapotranspiration Index (SPEI) is used to measure drought severity is indicated by its intensity and duration, and can recognize the beginning and end of drought episodes from 1940 to present."
      },
      "data": {
        "refresh": {
          "lastUpdated": 20220101,
          "frequency": "Monthly"
        },
        "outputs": {
          "current": 3,
          "unit": "SPEI",
          "historical": [0.45729, -0.9095, 0.44055, -0.45425, 0.47097, -1.05054, 0.05694, -0.15988, -0.76426, 0.28303, -1.09292, -0.71919, -0.39175, 0.51665, -0.9802],
          "dateRange": [19520101, 19570101, 19620101, 19670101, 19720101, 19760101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
        }
      }
    }],

    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Average Global Sea Surface Temperature",
        "location": "https://www.epa.gov/climate-indicators/climate-change-indicators-sea-surface-temperature",
        "shortDescription": "Average global sea surface temperature anomaly from 1880 through 2020. Baseline is the 1971 to 2000 average.",
        "fullDescription": "Average global sea surface temperature taken from the NOAA Extended Reconstructed Sea Surface Temperature dataset. Data is taken from ships, floating, and stationary bouys. As collection methods have improved considerably since the 1800s, newer data (NOAA mentions past the 1940s) is more reliable. Sea surface temperature increased during the 20th century and continues to rise. From 1901 through 2020, temperature rose at an average rate of 0.14°F per decade."
      },
      "data": {
        "refresh": {
          "lastUpdated": 20210401,
          "frequency": "Pentannually"
        },
        "outputs": {
          "current": 0.84,
          "unit": "Temperature Anomaly (degrees Farenheit)",
          "historical": [-0.258, -0.546, -0.312, -0.222, -0.294, -0.42, -0.186, -0.078, -0.006, 0.21, 0.048, 0.354, 0.408, 0.3, 0.444, 0.822, null],
          "dateRange": [19420101, 19470101, 19520101, 19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
        }
      }
    }],
    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Average Global Sea Surface Temperature",
        "location": "https://www.epa.gov/climate-indicators/climate-change-indicators-sea-surface-temperature#ref7",
        "shortDescription": "Sea Surface Temperature data collected from the Environmental Protection Agency (EPA)",
        "fullDescription": "Data Source: National Oceanic and Atmospheric Administration (NOAA). This indicator is based on instrumental measurements of surface water temperature. Due to denser sampling and improvements in sampling design and measurement techniques, newer data are more precise than older data. The earlier trends shown by this indicator have less certainty because of lower sampling frequency and less precise sampling methods. From 1901 through 2020,temperatures rose at an average rate of 0.14°F per decade "
      },
      "data": {
        "refresh": {
          "lastUpdated": 20210401,
          "frequency": "annual"
        },
        "outputs": {
          "current": 0.444,
          "unit": "Temperature Anomaly (F) with respect to the average of sea air temperature from 1971 to 2000 ",
          "historical": [-0.258, -0.546, -0.312, -0.222, -0.294, -0.42, -0.186, -0.078, -0.006, 0.21, 0.048, 0.354, 0.408, 0.3, 0.444, 0.822, null],
          "dateRange": [19420101, 19470101, 19520101, 19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
        }
      }
    }],
    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Global Emissions of Carbon Dioxide",
        "location": "https://www.statista.com/statistics/276629/global-co2-emissions/",
        "notes": "Accessible by Statista, provided by Global Carbon Project.",
        "cited": "Global Carbon Project; Expert(s) (Friedlingstein et al.)",
        "shortDescription": "This data points to carbon dioxide (CO2) emissions in billion metric tons.",
        "fullDescription": "Surveyed by the Global Carbon Project from 1940-present (the live/most recent input in 2021 being an estimate), this dataset displays the global carbon dioxide emissions from fossil fuels and industry, which have increased dramatically in the past 80 years."
      },
      "data": {
        "refresh": {
          "lastUpdated": 20220223,
          "frequency": "Annually"
        },
        "outputs": {
          "current": 36.4,
          "unit": "Billion metric tons",
          "historical": [4.94, 5.13, 6.47, 8.19, 9.75, 16.22, 18.49, 18.88, 21.27, 22.57, 24.3, 26.04, 31.49, 34.97, 35.93, 36.4, null],
          "dateRange": [19420101, 19470101, 19520101, 19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
        }
      }
    }],

    [
      {
        "apiVersion": "1.0",
        "metadata": {
          "name": "Average Global Temperature",
          "location": "https://climate.nasa.gov/vital-signs/global-temperature/",
          "shortDescription": "The data points for change in global temperature",
          "fullDescription": "The change in global surface temperature (in Celcius) relative to 1951-1980 average temperatures per decade."
        },
        "data": {
          "refresh": {
            "lastUpdated": 20220201,
            "frequency": "annual"
          },
          "outputs": {
            "current": 0.92,
            "unit": "USD",
            "historical": [0.07, -0.03, 0.01, 0.05, 0.03, -0.02, 0.01, 0.18, 0.14, 0.32, 0.22, 0.43, 0.63, 0.66, 0.64, 0.92, null],
            "dateRange": [19420101, 19470101, 19520101, 19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
          }
        }
      }],

    [
      {
        "apiVersion": "1.0",
        "metadata": {
          "name": "Ocean Heat Content",
          "location": "https://climate.nasa.gov/vital-signs/ocean-heat/",
          "shortDescription": "The data points for Ocean Heat Content, starting in 1957.",
          "fullDescription": "The historical array displays the heat content in zettajoules for each of the respective dates. The historicalVar is the error range at each of the respective years in dateRange"
        },
        "data": {
          "refresh": {
            "lastUpdated": 20211201,
            "frequency": "annual"
          },
          "outputs": {
            "current": 17.288,
            "unit": "10^22 joules",
            "historical": [-4.849, -2.927, -5.837, -3.337, -3.157, -0.117, -1.137, 2.753, 3.083, 7.733, 8.173, 11.023, 15.642, 17.288],
            "dateRange": [19570101, 19620101, 19670101, 19720101, 19770101, 19820101, 19870101, 19920101, 19970101, 20020101, 20070101, 20120101, 20170101, 20220101]
          }
        }
      }],
  ])
}