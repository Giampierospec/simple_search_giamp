interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full px-35 mx-auto xl:max-w-[1200px] flex flex-col gap-y-5 items-center justify-center">
      {children}
    </div>
  )
}
export default Container
