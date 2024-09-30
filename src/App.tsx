import './App.css'
import { Button } from './components/ui/button'
import { ReloadIcon } from "@radix-ui/react-icons"


function App() {

  return (
    <>
      <div className='flex justify-center items-center p-5'>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    </>
  )
}

export default App
