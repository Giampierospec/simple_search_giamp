import { ISearchResult, SearchResult } from '../models/searchResult'
import mongoose from 'mongoose'
import { config } from 'dotenv'
config()
const results: ISearchResult[] = [
  {
    title: 'Times Square, New York',
    description: `New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second largest city. New York City is located at the southern tip of New York State.`,
    photo: '/new_york.jpg',
    shortDescription: 'One of the most iconic venues in New York City',
  },
  {
    title: 'Milan, Catedral',
    description: `Milan is considered a leading alpha global city, with strengths in the fields of art, chemicals,[12] commerce, design, education, entertainment, fashion, finance, healthcare, media (communication), services, research and tourism. Its business district hosts Italy's stock exchange (Italian: Borsa Italiana), and the headquarters of national and international banks and companies. In terms of GDP, Milan is the wealthiest city in Italy, has the third-largest economy among EU cities after Paris and Madrid, and is the wealthiest among EU non-capital cities.`,
    photo: '/milan.jpg',
    shortDescription: 'One of the most iconic cities in Italy',
  },
  {
    title: 'Paris, France',
    description: `The City of Paris is the centre of the Île-de-France region, or Paris Region, with an estimated population of 12,262,544 in 2019, or about 19% of the population of France,[8] making the region France's primate city. The Paris Region had a GDP of €739 billion ($743 billion) in 2019, which is the highest in Europe.[9] According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.`,
    photo: '/paris.jpg',
    shortDescription: 'Capital of france',
  },
  {
    title: 'Sydney, Australia',
    description: `Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.`,
    photo: '/sydney.jpg',
    shortDescription: 'One of the more iconic cities in Australia',
  },
  {
    title: 'Roman Colosseum,Rome, Italy',
    description: `is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72[1] and was completed in 80 AD under his successor and heir, Titus (r. 79–81).`,
    photo: '/rome.jpg',
    shortDescription: 'Capital of Italy',
  },
]

const seedDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL || '')
  const count = await SearchResult.count({})
  if (count === 0) {
    await SearchResult.insertMany(results)
  }
}

seedDb().then(() => {
  mongoose.connection.close()
})
