import { useFetchGet } from '../../hooks/useFetchGet';

const apiBaseUrl = 'https://api.github.com';
const url = `${apiBaseUrl}/orgs/Developero-oficial/repos?sort=created`;

const CustomHook = () => {
  const { isFetching, error, data } = useFetchGet({ url });

  if (isFetching) {
    return 'Loading...';
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return data.map(({ name, html_url }) => (
    <div key={html_url}>
      <p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
    </div>
  ));
};

export default CustomHook;