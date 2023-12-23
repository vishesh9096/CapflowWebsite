import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div style={{flex:1, backgroundColor:'white'}}>
      {/* <Navbar/> */}
      <div className="bg-cover bg-no-repeat bg-fixed bg-[url('https://images.unsplash.com/photo-1611659934318-06fd70ced53c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D')]" >
      <Hero/>
      <Footer/>
   

      </div>
    </div>
  )
}
