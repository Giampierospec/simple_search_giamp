import { Link, LinkProps } from 'react-router-dom'
interface CustomLinkProps {
  external?: boolean
}
const CustomLink: React.FC<LinkProps & CustomLinkProps> = (props) => {
  if (props.external) {
    return (
      <a
        {...props}
        href={props.to.toString()}
        target="_blank"
        className={`hover:underline hover:opacity-75 ${props.className}`}
      />
    )
  }
  return (
    <Link
      {...props}
      className={`hover:underline hover:opacity-75 ${props.className}`}
    />
  )
}

export default CustomLink
