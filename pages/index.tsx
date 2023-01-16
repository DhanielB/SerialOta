export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <header className="flex w-screen h-[2rem] bg-[#F0F0F0]">
        <input type="text" placeholder="" className="left-[0.75rem] top-[0.25rem] w-[calc(100%-6.75rem)]  border border-[#828790] outline-none absolute"/>
        <button className="border border-[#C9C9C9] bg-[#FAFAFA] top-[0.25rem] w-[5rem] h-[1.5rem] left-[calc(100%-5.5rem)] text-xs rounded  hover:bg-[#D8E6F1] hover:border-[#0078D4] transition-colors absolute">Enviar</button>
      </header>

      <div className="p-[0.15rem] left-[0.5rem] top-[2rem] w-[calc(100%-1rem)] h-[calc(100%-4rem)] border border-[#828790] absolute">
        
      </div>

      <footer className="flex w-screen h-[2rem] bg-[#F0F0F0] bottom-0 absolute">
        <input type="checkbox" id="autoscroll" name="autoscroll" className="left-[1rem] bottom-[0.5rem] absolute"/><p className="left-[2rem] bottom-[0.35rem] text-xs absolute">Auto Scroll</p>
        <input type="checkbox" id="autoscroll" name="autoscroll" className="left-[7rem] bottom-[0.5rem] absolute"/><p className="left-[8rem] bottom-[0.35rem] text-xs absolute">Show Timestamp</p>
      </footer>
    </div>
  )
}
