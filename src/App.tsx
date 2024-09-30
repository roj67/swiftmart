import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Button } from './components/ui/button'
import { ReloadIcon } from "@radix-ui/react-icons"


function App() {

  return (
    <div>
      <div className='max-w-7xl w-full mx-auto'>
        <Navbar/>
        <div className='flex justify-center items-center p-5'>
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
