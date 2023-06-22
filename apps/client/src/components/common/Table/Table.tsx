import { MdDelete, MdMode } from 'react-icons/md'
export const Table = (heads: any, rows: []) => {
  console.log(heads, rows)
  return (
    <div>
      <MdDelete />
      <MdMode />
    </div>
  )
}
