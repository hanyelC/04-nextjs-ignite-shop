import { useRouter } from 'next/router'

export default function Foo() {
  const { query } = useRouter()

  console.log(query)

  return (
    <h1>Foo { query.id }</h1>
  )
}
