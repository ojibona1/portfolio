export function MenuTop({ onClose }: { onClose: () => void }) {
  return (
    <div className='flex flex-col justify-center items-end gap-3 px-10 py-5 w-full bg-[rgba(17,7,31,0.86)]'>
      <a href="#info" className="text-white cursor-pointer scroll-smooth" onClick={onClose}>Info</a>
      <a href="#about" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>About</a>
      <a href="#experience" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Experience</a>
      <a href="#projects" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Projects</a>
      <a href="#contact" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Contact me</a>
    </div>
  )
}

export function MenuDown({ onClose }: { onClose: () => void }) {
  return (
    <div className='flex flex-col justify-center items-end gap-3 px-10 py-5 w-full bg-[rgba(17,7,31,0.86)]'>
      <a href="#info" className="text-white cursor-pointer scroll-smooth" onClick={onClose}>Info</a>
      <a href="#about" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>About</a>
      <a href="#experience" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Experience</a>
      <a href="#projects" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Projects</a>
      <a href="#contact" className="text-white  cursor-pointer scroll-smooth" onClick={onClose}>Contact me</a>
    </div>
  )
}

