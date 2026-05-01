import './App.css'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contatos'
import { Analytics } from '@vercel/analytics/react'
function App() {
  
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Analytics />
    </div>
  )
};

export default App