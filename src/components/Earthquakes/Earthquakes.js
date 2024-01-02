import Loading from "components/Loading/Loading";
import { useFetch } from "hooks";
import EarthquakeLegend from "./EarthquakeLegend";
import EarthquakeItems from "./EarthquakeItems";
import NotFound from "components/NotFound/NotFound";
import SelectForm from "./SelectForm";
import { useState } from "react";
import { EarthquakeProvider } from "./EarthquakeContext";

export default function Earthquakes() {
  const { data, loading, error } = useFetch("http://apis.is/earthquake/is");
  const sizeItems = {
    all: {
      name: "All",
      backgroundColor: "white",
      get: (size) => size > 0,
    },
    minor: {
      name: "Minor",
      backgroundColor: "green",
      get: (size) => size < 1,
    },
    moderate: {
      name: "Moderate",
      backgroundColor: "orange",
      get: (size) => size > 1 && size < 4,
    },
    major: {
      name: "Major",
      backgroundColor: "red",
      get: (size) => size > 4,
    },
  };

  const getSizeColor = (size) => {
    if (size < 1) return sizeItems.minor.backgroundColor;
    else if (size > 1 && size < 5) return sizeItems.moderate.backgroundColor;
    else if (size > 5) return sizeItems.major.backgroundColor;
    else return sizeItems.all.backgroundColor;
  };

  const [selectedSize, setSelectedSize] = useState("all");

  const { results: earthquakes = [] } = data || {};

  const filterDependsOnSize = (eq) => {
    if (!Object.keys(sizeItems).includes(selectedSize)) return [];

    return sizeItems[selectedSize].get?.(eq.size);
  };

  const filteredEarthquakes = earthquakes.filter(filterDependsOnSize);

  return (
    <>
      <EarthquakeProvider>
        {loading && <Loading />}
        {error && <NotFound message={error} />}
        {!loading && !error && (
          <>
            <EarthquakeLegend legend={sizeItems} />
            <SelectForm
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              items={sizeItems}
            />
            <EarthquakeItems
              selectedSize={selectedSize}
              earthquakes={filteredEarthquakes}
              getSizeColor={getSizeColor}
            />
          </>
        )}
      </EarthquakeProvider>
    </>
  );
}
