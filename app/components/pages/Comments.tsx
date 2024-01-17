import useSWR from 'swr';
const fetcher = (arg: any, ...args: any) =>
  fetch(arg, ...args).then(res => res.json());
type Comment = {
  id: string;
  text: string;
  postId: string;
};
export default function Comments() {
  const route: string = 'http://localhost:3003/comments';
  const { data, error, isLoading } = useSWR(route, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className='container'>
      <h1>Список комментариев</h1>
      <section>
        {data.map(({ id, text, postId }: Comment) => (
          <li key={id}>
            {id}: {text}
            <p>postId: {postId} </p>
            <br />
          </li>
        ))
        }
      </section>
    </div>
  )
}