import reactImg from "./assets/react-core-concepts.png";
import Header from "./components/Header/Header";
import {CORE_CONCEPTS} from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import {useState} from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState("Please click");

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {selectedButton}
        </section>
      </main>
    </div>
  );
}

export default App;