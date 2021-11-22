
import Header from './components/organisms/header'
import Card from './components/atoms/card'
import Text from './components/atoms/text'
import Button from './components/atoms/button'
import Image from './components/atoms/image'
import cardData from './json/cardData.js'
import './components/commonStyles/commonStyles.css'
import './App.css'

function App() {
  const navItems = ['Home', 'Contacts', 'Profile', 'About']

  return (
    <div className="App">
      <Header backgroundColor="red" navItems={navItems} />
      <div className = 'row margin-auto mV-16'>
       
      <div className=" flex-wrap  flex mV-16">
        {cardData.map((card) => {
          return (
            <div className="mH-16 mV-16">
              <Card classes="relative">
                <Image
                  imageClass="image-width image-height"
                  classes="image-height image-width"
                  source={card.background}
                />
                <Text size="large-font" thickness="bold">
                  <p>{card.title}</p>
                </Text>
                <Text size="small-font truncate">{card.description}</Text>

                <Button
                  classes="black-button white-text bottom-placing"
                  onClick={() => {
                    alert(`${card.title}`)
                  }}
                >
                  See Details
                </Button>
              </Card>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default App
