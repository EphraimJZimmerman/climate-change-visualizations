// https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([

    [{
      "apiVersion": "1.0",
      "metadata": {
        "name": "Average Global Sea Levels",
        "location": "https://climate.nasa.gov/vital-signs/sea-level/",
        "shortDescription": "The data points for global sea levels spanning more than two decades.",
        "fullDescription": "The average of global sea levels (in Millimeters) from 1995 to 2021 demonstrating a substantial and alarming increase attributable to carbon emissions.",
        "capacity": {
          "units": "mm",
          "limit": 403.5,
          "currentPercentage": 25.6,
          "context": "The maximum is the sea level that is not conducive to life, (i.e. continental submergence).",
          "sources": ["MAX: https://www.noaa.gov/news-release/us-coastline-to-see-up-to-foot-of-sea-level-rise-by-2050)", "Other ramifications: https://www.jpost.com/environment-and-climate-change/sea-level-rise-could-wipe-out-israeli-beaches-study-688064"],
          "notes": `-The United States is expected to experience as much sea level rise by the year 2050 as it witnessed in the previous hundred years.
          -Sea levels along coastlines will rise an additional 10-12 inches or 25-30 cm by 2050.
          -Direct quote: “This new data on sea rise is the latest reconfirmation that our climate crisis ⁠— as the President has said ⁠— is blinking ‘code red,’” said Gina McCarthy, National Climate Advisor. “We must redouble our efforts to cut the greenhouse gases that cause climate change while, at the same time, help our coastal communities become more resilient in the face of rising seas.”
          -Coastal flooding will cause major cities across the globe, such as Shanghai, New York, Jakaarta, Tel Aviv, San Francisco, and San Diego to sustain immense damage.
          -This calculation is a conservative estimate that assumes emissions are reduced substantially within the next few decades.
          `,
          "model": null
        }
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
          "fullDescription": "Data showing amount of arctic ice, in million square km, from 1979-2022 at the lowest yearly point (September).",
          "capacity": {
            "units": "Degrees C temperature anomaly",
            "limit": 2,
            "currentPercentage": 46,
            "context": "Combined with Global Temperature.",
            "sources": ["https://yaleclimateconnections.org/2021/08/1-5-or-2-degrees-celsius-of-additional-global-warming-does-it-make-a-difference/", "https://nsidc.org/arcticseaicenews/charctic-interactive-sea-ice-graph/3", "https://www.theguardian.com/environment/2021/feb/25/atlantic-ocean-circulation-at-weakest-in-a-millennium-say-scientists"],
            "notes": `
            With a 2°C increase, the Arctic Ocean could become ice-free in the summer once every 10 years.
            An ice-free Arctic can lead to accelerated warming as dark blue sea (as opposed to white ice) absorbs more heat from the sun, through a process known as the albedo effect. 
            Melting sea ice in the Arctic also injects cold water into the Atlantic south of Greenland, upsetting Atlantic Ocean circulation. Scientists reported in 2021 that Atlantic Ocean circulation, which includes the Gulf Stream that brings warm weather to the northeastern U.S. and to Europe, is now at its weakest in more than 1,000 years.
            `,
            "model": null
          }
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
        "fullDescription": "The the Standardised Precipitation-Evapotranspiration Index (SPEI) is used to measure drought severity is indicated by its intensity and duration, and can recognize the beginning and end of drought episodes from 1940 to present.",
        "capacity": {
          "units": "Degrees C temperature anomaly",
          "limit": 2,
          "currentPercentage": 46,
          "context": "Combined with Global Temperature.",
          "sources": ["https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2017GL076521"],
          "notes": `
          We found that the magnitude of droughts is likely to double in 30% of the global landmass under stringent mitigation policies. 
          If global warming continues at the present rate, water supply-demand deficits would increase fivefold while current 1-in-100-year droughts would occur every two to five years for most of Africa, Australia, southern Europe, southern and central United States, Central America, the Caribbean, north-west China, and parts of Southern America. Approximately two thirds of the global population will experience a progressive increase in drought hazard with warming.
          `,
          "model": null
        }
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
        "fullDescription": "Average global sea surface temperature taken from the NOAA Extended Reconstructed Sea Surface Temperature dataset. Data is taken from ships, floating, and stationary bouys. As collection methods have improved considerably since the 1800s, newer data (NOAA mentions past the 1940s) is more reliable. Sea surface temperature increased during the 20th century and continues to rise. From 1901 through 2020, temperature rose at an average rate of 0.14°F per decade.",
        "capacity": {
          "units": "Degrees C temperature anomaly (from pre-industrial)",
          "limit": 3,
          "currentPercentage": 43.5,
          "context": "This is when many marine habitats have an very high chance to be affected negatively by the temperature increase. Note that ocean temperatures are slower to rise than air temperatures.",
          "sources": ["https://nca2018.globalchange.gov/chapter/9/","https://nca2018.globalchange.gov/downloads/NCA4_Ch09_Oceans_Full.pdf","https://www.science.org/doi/10.1126/science.aac4722"],
          "notes": `
          Following a hypothetical “Relative Concentration Pathway 8.5” (which is not a projection, but more of an upper bound of projected carbon emissions should no action be taken to limit them), in 2100, the change in temperature will be +3.2 degrees C over pre-industrial levels (defined as 1870-1899). 
          At that point, some things will be screwed, with a heavy weighting of the impact on “economically important” things such as fishing, recreation, habitats, etc.
          Obviously this should be considered in conjunction with other info, such as global temperature, which will likely pass its mark before this one. There's probably some nice synergistic effects with temperature, ice, and sea temperature.
          `,
          "model": null
        }
        
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
        "fullDescription": "Data Source: National Oceanic and Atmospheric Administration (NOAA). This indicator is based on instrumental measurements of surface water temperature. Due to denser sampling and improvements in sampling design and measurement techniques, newer data are more precise than older data. The earlier trends shown by this indicator have less certainty because of lower sampling frequency and less precise sampling methods. From 1901 through 2020,temperatures rose at an average rate of 0.14°F per decade ",
        "capacity": {
          "units": "Degrees C",
          "limit": 2.61,
          "currentPercentage": 17.6,
          "context": "This is specifically for when the Ocean temperature heats up by 2.15°C",
          "sources": ["https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature-projections"],
          "notes": `
          According to Facu’s data, at around 2100 the world temperature will increase by 1.5 degrees, in 2100 the average increase on SST is (1.1 + 5.4)/2 = 2.15 °C.
          The most recent SST anomaly is 0.46 °C (+ 0.84 ° F), therefore, the temperature in 2100 will be 0.46 + 2.15 = 2.61°C 
          `,
          "model": null
        }
      },
      "data": {
        "refresh": {
          "lastUpdated": 20210401,
          "frequency": "annual"
        },
        "outputs": {
          "current": 0.84,
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
        "fullDescription": "Surveyed by the Global Carbon Project from 1940-present (the live/most recent input in 2021 being an estimate), this dataset displays the global carbon dioxide emissions from fossil fuels and industry, which have increased dramatically in the past 80 years.",
        "capacity": {
          "units": "Billion metric tons CO2",
          "limit": 126.7,
          "currentPercentage": 20,
          "context": "This is specifically for when we reach the 2°C limit",
          "sources": ["https://www.co2.earth/global-co2-emissions","https://climatenexus.org/climate-issues/the-carbon-budget/"],
          "notes": `
          Quote: “If you accept the 2°C target, the world needs to emit no more than 465 GtC by the time carbon emissions end.  Many developing countries also support a reduction in the target to keep global average temperature increases below 1.5°C above pre-industrial levels.”
          The source uses gigatonnes of carbon (GtC). 1 GtC is equal to 109 tonnes of carbon or 1012 kg.
          `,
          "model": {
            "y1": "y = 0.55x",
            "y2":"(With year appended) Y = 0.55x - 1073.3",
            "timespan": "1995 (23.45 billion tonnes) - 2019 (36.7 billion tonnes)",
            "timeline": "161 years until limit",
            "notes": `In 161 years (year 2183), the annual output of CO2 will be an estimated 126.7 billion metric tons. The global output for carbon has been steadily increasing since the early 20th century and has seen especially high rates of output since the 1980s. 
            This estimate is a linear model derived from data during 1995-2019, and not including years impacted by the response of the COVID-19 pandemic.
            `
          }
        }
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
          "capacity": {
            "units": "Years until limit (linear regression model)",
            "limit": 42,
            "currentPercentage": 0.49,
            "context": "Having the annual change in global surface temperature (in Celcius) relative to 1951-1980 being 2 degrees would bring with itself extreme temperatures in Central and Eastern North America, Central and Southern Europe, the Mediterranean (including Southern Europe, Northern Africa and the near-East), Western and Central Asia and Southern Africa. This would imply annual deadly heat waves, about 61 million more people  in Earth’s urban areas would be exposed to severe drought, and an increase in flooding and increased runoff.",
            "sources": ["https://climate.nasa.gov/vital-signs/global-temperature/"],
            "notes": ``,
            "model": {
              "y1": "y = 0.02102x",
              "y2":"(With year appended) Y = 0.02102x - 41.51891",
              "timespan": "1995 (0.45 C) - 2019 (0.98 C)",
              "timeline": "42 years until limit",
              "notes": `In 42 years (year 2070), the change in global surface temperature (in Celcius) relative to 1951-1980 will be an estimated 2 degrees celsius. This estimate is a linear model derived from data during 1995-2019, and not including years impacted by the response of the COVID-19 pandemic.`
            }
        
        },
        "data": {
          "refresh": {
            "lastUpdated": 20220201,
            "frequency": "annual"
          },
          "outputs": {
            "current": 0.92,
            "unit": "C",
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
          "fullDescription": "The historical array displays the heat content in zettajoules for each of the respective dates. The historicalVar is the error range at each of the respective years in dateRange",
          "capacity": {
            "units": "Years until limit (linear regression model)",
            "limit": 228,
            "currentPercentage": null,
            "context": "Making a rough approximation, assuming the specific heat capacity of sea water is about 3,900 Joules per kg per degrees Celsius and the total mass of the oceans is 1.4×10^21kg this would mean that it would take 5.5×10^24Joules (5.5 trillion trillion Joules) to heat the entire ocean by 1 degrees Celsius (1.8 degrees F).",
            "sources": ["https://www.climate.gov/news-features/blogs/enso/role-ocean-tempering-global-warming#:~:text=Making%20a%20rough%20approximation%2C%20assuming,Celsius%20(1.8%20degrees%20F)","https://www.nrsc.gov.in/sites/default/files/pdf/oceanproducts/OMT_report.pdf","https://www.epa.gov/climate-indicators/climate-change-indicators-ocean-heat"],
            "notes": `Check the model`,
            "model": {
              "y1": "y = -10.663229 x + 0.002798 x2",
              "y2":"(With year appended) Y = 10139.28282 -10.663229 x + 0.002798 x2",
              "timespan": "1957 (-4.849, 10^22 joules) - 2019 (17.4909, 10^22 joules)",
              "timeline": "228 years until limit",
              "notes": `A non-linear regression model is more adequate approach. 
              The current regression model has a high multiple r-squared of 94%, meaning that it represents the correlation between variables without much variance.
                `
            }
          }
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