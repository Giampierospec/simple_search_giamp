import { useForm } from 'react-hook-form'
import { SearchBoxValues } from '../../interfaces/searchBox'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
interface SearchBoxProps {
  onSubmit: (values: SearchBoxValues) => void
}
const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm<SearchBoxValues>({
    defaultValues: {
      query: sessionStorage.getItem('query') ?? '',
    },
  })
  return (
    <form onSubmit={handleSubmit((values) => onSubmit(values))}>
      <div className="flex gap-x-2 max-w-md">
        <CustomInput {...register('query')} />
        <CustomButton type="submit">Search</CustomButton>
      </div>
    </form>
  )
}

export default SearchBox
