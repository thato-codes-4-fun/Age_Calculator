'use client'

export default function Home() {
  return (
    <main className='bg-slate-300'>
      <div class="flex items-center justify-center h-screen">
        <div className='w-2/3 h-3/4 bg-white rounded-2xl sm:w-1/3 drop-shadow-2xl px-5' style={{'border-bottom-right-radius':'100px'}}>
            <form action='/process-age' >
              <div className="flex justify-between  mt-4 p-8">
              <div className="w-1/3">
                <label for='day'>Day</label>
                <br />
                <input type="text" id="first" name="first" className="w-16 border-2 rounded-lg" />
              </div>
              <div className="w-1/3">
                <label for='month'>Month</label>
                <br />
                <input type="text" id="first" name="first" className="w-16 border-2 rounded-lg"/>
              </div>
              <div className="w-1/3">
                <label for='year'>Year</label>
                <br />
                <input type="text" id="first" name="first" className="w-16 border-2 rounded-lg"/>
              </div>
              </div>
              <div className="relative flex">
                <input 
                  className="mx-auto sm:mr-10 bg-purple-500 rounded-full p-2 "
                  type='image' src="/images/icon-arrow.svg "
                  width={50} height={50}
                  />
                <div className="absolute bottom-5 left-0 w-full h-1  bg-gray-400 -z-10 px-5"></div>
              </div>
            </form>
            <div className="mt-8 text-6xl">
              <h2><span className="text-purple-500">38</span> years</h2>
              <h2><span className="text-purple-500">3</span> months</h2>
              <h2><span className="text-purple-500">25</span> days</h2>
            </div>
          </div>
          
        </div>
    </main>

  )
}


