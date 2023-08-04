import './../App.css';
type NextPageProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function NextPage({ page, setPage }: NextPageProps) {
  return (
    <header className="pages">
      <p className="page">Page: {page}</p>
      <button
        onClick={() => setPage(page++)}
        className="btn">
        next
      </button>
    </header>
  );
}
