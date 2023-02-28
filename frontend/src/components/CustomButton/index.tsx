import { buttonVariantMapperClasses } from '../../helpers/mappers'

interface CustomButtonProps {
  loading?: boolean
  variant?: keyof typeof buttonVariantMapperClasses
  children: React.ReactNode
}
const CustomButton: React.FC<
  CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = 'primary', loading = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${buttonVariantMapperClasses[variant]} text-white font-serif text-sm uppercase rounded-sm py-2 px-6 outline outline-current disabled:opacity-25 ${rest.className}`}
    >
      <div className="flex gap-x-2 justify-center">{children}</div>
    </button>
  )
}
export default CustomButton
